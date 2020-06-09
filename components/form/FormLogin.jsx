function FormLogin(props) {
  return (
    <form
      onSubmit={props.handleSubmit}
      className="form-login card"
      method="POST"
    >
      <div className="form-group">
        <h2>Login</h2>
        <hr />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          defaultValue=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          defaultValue=""
        />
      </div>
      <div>
        <button type="submit" className="btn btn-block btn-warning">
          Login
        </button>
      </div>
    </form>
  );
}
export default FormLogin;
