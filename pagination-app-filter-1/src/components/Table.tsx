import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import moment from "moment";
import {
  Button,
  Container,
  Box,
  TextField,
  Table as MUITable,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import Post from "./Post";

type State = {
  allPosts: any[];
  currentPosts: any[];
};

type Props = {
  pageValues: {
    currentPage: number;
    totalPage: number;
  };
};

const Table = ({ pageValues }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showId, setShowId] = useState("");
  const [filter, setFilter] = useState({
    query: "",
    ascending: false,
  });

  let currentPosts: {
    objectID: string;
    title: string;
    url: string;
    created_at_i: string;
    author: string;
  }[] = [];

  currentPosts = useSelector((state: State) =>
    state.allPosts
      .filter(
        (post, i) =>
          i >= pageValues.currentPage * 20 - 20 &&
          i <= pageValues.currentPage * 20 - 1
      )
      .sort((a, b) => {
        if (filter.ascending) {
          if (a.created_at_i > b.created_at_i) return 1;
          if (a.created_at_i < b.created_at_i) return -1;
        } else {
          if (a.created_at_i > b.created_at_i) return -1;
          if (a.created_at_i < b.created_at_i) return 1;
        }
        return 0;
      })
  );

  Modal.setAppElement("#root");

  return (
    <Container>
      <Box>
        <TextField
          placeholder="Search by Title"
          value={filter.query}
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        />
        <Button
          onClick={() => setFilter({ ...filter, ascending: !filter.ascending })}
        >
          Sort
        </Button>
      </Box>
      <MUITable>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>URL</TableCell>
            <TableCell>Created AT</TableCell>
            <TableCell>Author</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentPosts.map((post) =>
            filter.query ? (
              post.title
                .toLocaleLowerCase()
                .includes(filter.query.toLowerCase()) ||
              moment(post.created_at_i)
                .format("MMM Do YYYY, h:mm:ss a")
                .toLowerCase()
                .includes(filter.query.toLowerCase()) ? (
                <TableRow
                  key={post.objectID}
                  onClick={() => {
                    setShowId(post.objectID);
                    setIsModalOpen(true);
                  }}
                >
                  <TableCell>{post.title}</TableCell>
                  <TableCell>{post.url}</TableCell>
                  <TableCell>
                    {moment(post.created_at_i).format("MMM Do YYYY, h:mm:ss a")}
                  </TableCell>
                  <TableCell>{post.author}</TableCell>
                </TableRow>
              ) : null
            ) : (
              <TableRow
                key={post.objectID}
                onClick={() => {
                  setShowId(post.objectID);
                  setIsModalOpen(true);
                }}
              >
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.url}</TableCell>
                <TableCell>
                  {moment(post.created_at_i).format("MMM Do YYYY, h:mm:ss a")}
                </TableCell>
                <TableCell>{post.author}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </MUITable>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Raw Json Data"
      >
        <Box>
          <Post id={showId} />
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default Table;
