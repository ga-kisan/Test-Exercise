import { addPosts } from "../../redux/actions/allPosts";

test("Should return valid Action", () => {
  const action = addPosts([
    {
      id: "232",
      title: "This is Title",
    },
  ]);
  expect(action).toEqual({
    type: "ADD_POSTS",
    payload: [
      {
        id: "232",
        title: "This is Title",
      },
    ],
  });
});
