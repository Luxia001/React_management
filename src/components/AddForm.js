import "./AddForm.css";

export function AddForm(props) {
  const { title, setTitle, saveTask, nullText, editId } = props;
  return (
    <>
      <h2> Management</h2>
      <form className="form-group" onSubmit={saveTask}>
        <div className="form-control">
          <input
            type="text"
            name=""
            className="text-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {editId ? "update" : "add"}
          </button>
        </div>
        {!title && nullText ? (
          <span className="nulltext" style={{ color: "red", fontSize: "18px" }}>
            input text
          </span>
        ) : (
          ""
        )}
      </form>
    </>
  );
}
