import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addPosts } from "../redux/actions/allPosts";
import { setCurrentPage, setTotalPage } from "../redux/actions/pageValues";
import { Container, Box, Button } from "@mui/material";
import Table from "./Table";
import { useEffect } from "react";

type State = {
  pageValues: {
    currentPage: number;
    totalPage: number;
  };
};

const Home = () => {
  const pageValues = useSelector((state: State) => state.pageValues);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pageValues.totalPage === 0) {
      getData();
    } else {
      setTimeout(() => {
        console.log("In time");

        getData();
      }, 10000);
    }
  }, [pageValues.totalPage]);

  const getData = async () => {
    const { data }: any = await axios.get(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageValues.totalPage}`
    );
    if (data.hits.length > 0) {
      dispatch(addPosts(data.hits));
      dispatch(setTotalPage());
      if (pageValues.totalPage === 0) {
        dispatch(setCurrentPage(1));
      }
    }
  };

  return (
    <Container>
      <Box>
        <Button
          disabled={pageValues.currentPage <= 1}
          onClick={() => dispatch(setCurrentPage(-1))}
        >
          Prev Page
        </Button>
        <span>currentPage: {pageValues.currentPage}</span>
        <span>Total Pages: {pageValues.totalPage}</span>
        <Button
          disabled={pageValues.totalPage <= pageValues.currentPage}
          onClick={() => dispatch(setCurrentPage(+1))}
        >
          Next Page
        </Button>
      </Box>
      <Table pageValues={pageValues} />
    </Container>
  );
};

export default Home;
