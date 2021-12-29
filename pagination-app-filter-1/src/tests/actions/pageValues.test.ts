import { setCurrentPage, setTotalPage } from "../../redux/actions/pageValues";

test("Should return valid Action", () => {
  const action = setTotalPage();
  expect(action).toEqual({
    type: "SET_TOTAL_PAGE",
  });
});
test("Should return valid Action", () => {
  const action = setCurrentPage(5);
  expect(action).toEqual({
    type: "SET_CURRENT_PAGE",
    payload: 5,
  });
});
