type Action = {
  type: string;
  payload?: [];
};

export default (posts = [], action: Action) => {
  switch (action.type) {
    case "ADD_CURRENT_POSTS":
      return action.payload;
    default:
      return posts;
  }
};
