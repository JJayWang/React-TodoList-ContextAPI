import React from "react";
import { useContext } from "react";
import { TodoAppContext } from "../../contexts/todo-app-context";
import "./index.css";
import { toast } from "react-toastify";

export default function ConfirmDialog({ info, handleDialogClick }) {
  const contextData = useContext(TodoAppContext);
  const { alertShow, deleteInfo, changeAlertShow, deleteCategory, todo } =
    contextData;
  let name = "";
  if (alertShow) {
    switch (deleteInfo.type) {
      case "todo":
        //const deleteTodo = todoList.find((item) => item.id === deleteInfo.id);
        //name = deleteTodo.content;
        break;
      case "category":
        const { categorys } = contextData;
        const deleteCategory = categorys.find(
          (item) => item.id === deleteInfo.id
        );
        if (deleteCategory) {
          name = deleteCategory.name;
        }
        break;
    }
  }

  return (
    <div
      className="dialog-background"
      style={{ display: `${alertShow ? "block" : "none"}` }}
    >
      <div className="dialog-wrap">
        <div className="header">
          <div className="text">Delete Message</div>
          <div className="close"></div>
        </div>
        <div className="content">
          <div className="icon">
            <i className="fa-solid fa-circle-exclamation"></i>
          </div>
          <div className="text">{name}</div>
        </div>
        <div className="footer">
          <div
            className="footer-item check"
            onClick={() => {
              changeAlertShow(false);
              switch (deleteInfo.type) {
                case "category":
                  let canDelete = !(
                    todo.length > 0 &&
                    todo.find((item) => item.category === deleteInfo.id)
                  );
                  if (canDelete) {
                    deleteCategory(deleteInfo.id);
                    toast.success("Data has been deleted!");
                  } else {
                    toast.warn("Data can not delete!");
                  }
                  break;
                default:
                  break;
              }
            }}
          >
            OK
          </div>
          <div
            className="footer-item cancel"
            onClick={() => {
              changeAlertShow(false);
            }}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}
