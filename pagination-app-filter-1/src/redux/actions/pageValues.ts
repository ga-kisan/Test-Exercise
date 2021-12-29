export const setTotalPage = () => ({
  type: "SET_TOTAL_PAGE",
});

export const setCurrentPage = (page: number) => ({
  type: "SET_CURRENT_PAGE",
  payload: page,
});
