type Action = {
  type: string;
  payload: [];
};

const initialState: [] = [];

export default (posts = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_POSTS":
      return [...posts, ...action.payload];

    default:
      return posts;
  }
};
