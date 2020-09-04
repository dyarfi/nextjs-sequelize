function FormLogin({ props }) {
  const {
    onSubmitHandler,
    onChangeHandler,
    loading,
    stateFormData,
    stateFormError,
    stateFormMessage,
  } = props;

  return (
    <form className="form-login card" method="POST" onSubmit={onSubmitHandler}>
      <div className="form-group">
        <h2>Login</h2>
        <hr />
        {stateFormMessage.status === 'error' && (
          <h4 className="warning text-center">{stateFormMessage.error}</h4>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChangeHandler}
          readOnly={loading && true}
          value={stateFormData.email.value}
        />
        {stateFormError.email && (
          <span className="warning">{stateFormError.email.hint}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={onChangeHandler}
          readOnly={loading && true}
          value={stateFormData.email.password}
        />
        {stateFormError.password && (
          <span className="warning">{stateFormError.password.hint}</span>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-block btn-warning"
          disabled={loading}
        >
          {!loading ? 'Login' : 'Loading...'}
        </button>
      </div>
    </form>
  );
}
export default FormLogin;
