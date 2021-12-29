import { useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";

type Props = {
  id: string;
};

type State = {
  allPosts: any[];
  currentPosts: any[];
};

const Post = ({ id }: Props) => {
  const post = useSelector((state: State) =>
    state.allPosts.find((post) => post.objectID === id)
  );
  return (
    <Container>
      <Typography>Raw JSON data</Typography>
      <code>{JSON.stringify(post)}</code>
    </Container>
  );
};

export default Post;
