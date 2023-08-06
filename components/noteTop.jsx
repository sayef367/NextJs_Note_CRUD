import NewNote from "./newNote";

export default function NoteTop(props) {
  return (
    <div className="row justify-content-md-center mt-4">
      <div className="col-lg-4 col-md-10 col-sm-10 mb-3">
        <form>
          <input 
            onChange={props.handleFilter}
            className="form-control form-control me-2 border border-dark" 
            type="search" 
            placeholder="Search your notes" />
        </form>
      </div>
      <div className="col-lg-4 col-md-10 col-sm-10 mb-3">
        <div className="d-grid gap-2" data-bs-toggle="modal" data-bs-target="#exampleModalNewNote">
          <button type="button" 
            className="btn btn-outline-dark">
            <i className="bi bi-file-earmark-plus" /> New Note
          </button>
        </div>
      </div>
      {/* add new note */}
      <NewNote />
    </div>
  );
};
