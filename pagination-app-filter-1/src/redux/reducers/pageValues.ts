type Action = {
  type: string;
  payload: number;
};

type Values = {
  totalPage: number;
  currentPage: number;
};

const initialValues: Values = {
  totalPage: 0,
  currentPage: 0,
};

export default (values = initialValues, action: Action) => {
  switch (action.type) {
    case "SET_TOTAL_PAGE":
      return { ...values, totalPage: values.totalPage + 1 };

    case "SET_CURRENT_PAGE":
      return { ...values, currentPage: values.currentPage + action.payload };

    default:
      return values;
  }
};
