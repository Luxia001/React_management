import "./Item.css";
import { BsTrash3 } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";

export function Item(props) {
  const { data, deleteTask, editTask } = props;
  return (
    <div className="list-item">
      <p className="title">{props.data.title}</p>
      <div className="button-container">
        <BsTrash3
          className="btn"
          onClick={() => deleteTask(data.id)}
          style={{ background: "red" }}
        />
        <CiEdit
          className="btn"
          onClick={() => editTask(data.id)}
          style={{ background: "green" }}
        />
      </div>
    </div>
  );
}
