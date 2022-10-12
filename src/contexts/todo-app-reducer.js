import { nanoid } from "nanoid";
const todoAppReducer = (state, action) => {
  //console.log(state, action);
  switch (action.type) {
    case "modifyTodo":
      const { editID } = state;
      if (editID === "") {
        const newTodoList = [
          ...state.todo,
          {
            id: nanoid(),
            content: action.payload.content,
            date: action.payload.date,
            category: action.payload.category,
            done: false,
          },
        ];
        return { ...state, todo: newTodoList };
      } else {
        const newList = [...state.todo];
        const updateTodo = newList.find((item) => item.id === editID);
        updateTodo.date = action.payload.date;
        updateTodo.category = action.payload.category;
        updateTodo.content = action.payload.content;
        return { ...state, todo: newList };
      }
    case "toggleTodoComplete":
      const { todo } = state;
      const newTodoList = [...todo];
      const toggleTodo = newTodoList.find((item) => item.id === action.payload);
      toggleTodo.done = !toggleTodo.done;
      console.log("2", toggleTodo);
      console.log("3", newTodoList);
      return { ...state, todo: newTodoList };
    case "addCategory":
      const newCateoryList = [
        ...state.categorys,
        {
          id: nanoid(),
          name: action.payload,
          default: false,
        },
      ];
      return { ...state, categorys: newCateoryList };
    case "deleteCategory":
      const newCategoryList = state.categorys.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, categorys: newCategoryList };
    case "registerDeleteInfo":
      return { ...state, deleteInfo: action.payload };
    case "changeAlertShow":
      return { ...state, alertShow: action.payload };
    default:
      return state;
  }
};
export default todoAppReducer;
