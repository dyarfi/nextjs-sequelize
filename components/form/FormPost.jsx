function FormPost(props) {
  return (
    <form
      onSubmit={props.handleSubmit}
      className="form-post card"
      method="POST"
    >
      <div className="form-group">
        <h2>Form Post</h2>
        <hr />
      </div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          className="form-control"
          type="text"
          id="title"
          name="title"
          placeholder="Post Title"
          defaultValue=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Text</label>
        <textarea
          className="form-control"
          type="text"
          id="text"
          name="text"
          placeholder="Post Text"
          defaultValue=""
        ></textarea>
      </div>
      <div>
        <button type="submit" className="btn btn-block btn-warning">
          Submit
        </button>
      </div>
    </form>
  );
}
export default FormPost;
