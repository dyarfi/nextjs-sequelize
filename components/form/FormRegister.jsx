function FormRegister({ props }) {
  const {
    onSubmitHandler,
    onChangeHandler,
    stateFormData,
    stateFormError,
    stateFormMessage,
  } = props;

  return (
    <form
      onSubmit={onSubmitHandler}
      className="form-register card"
      method="POST"
    >
      <div className="form-group">
        <h2>Register</h2>
        <hr />
        {stateFormMessage.status === "error" && (
          <h4 className="warning text-center">{stateFormMessage.error}</h4>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">Username</label>
        <input
          onChange={onChangeHandler}
          className="form-control"
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          // value=""
          value={stateFormData.username.value}
        />
        {stateFormError.username && (
          <span span className="warning">
            {stateFormError.username.hint}
          </span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          onChange={onChangeHandler}
          className="form-control"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          // value=""
          defaultValue={stateFormData.email.value}
        />
        {stateFormError.email && (
          <span className="warning">{stateFormError.email.hint}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          onChange={onChangeHandler}
          className="form-control"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          // value=""
          defaultValue={stateFormData.password.value}
        />
        {stateFormError.password && (
          <span className="warning">{stateFormError.password.hint}</span>
        )}
      </div>
      <div>
        <button type="submit" className="btn btn-block btn-warning">
          Register
        </button>
      </div>
    </form>
  );
}
export default FormRegister;
