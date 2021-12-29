import { setCurrentPosts } from "../../redux/actions/currentPosts";

test("Should return valid Action", () => {
  const action = setCurrentPosts([
    {
      id: "cdc34",
      title: "This is another Title",
    },
  ]);
  expect(action).toEqual({
    type: "ADD_CURRENT_POSTS",
    payload: [
      {
        id: "cdc34",
        title: "This is another Title",
      },
    ],
  });
});
