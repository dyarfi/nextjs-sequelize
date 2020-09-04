function FormJob(props) {
  const {
    onSubmit,
    onChange,
    loading,
    stateFormData,
    stateFormError,
    stateFormValid,
    stateFormMessage,
  } = props;
  return (
    <form onSubmit={onSubmit} className="form-job card" method="POST">
      <div className="form-group">
        <h2>Form Job</h2>
        <hr />
        {stateFormMessage.status === 'error' && (
          <h4 className="warning text-center">{stateFormMessage.error}</h4>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          className="form-control"
          type="text"
          id="title"
          name="title"
          placeholder="Job Title"
          onChange={onChange}
          value={stateFormData.title.value}
        />
        {stateFormError.title && (
          <span className="warning">{stateFormError.title.hint}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="text">Text</label>
        <textarea
          className="form-control"
          type="text"
          id="text"
          name="content"
          placeholder="Post Text"
          onChange={onChange}
          value={stateFormData.content.value}
        />
        {stateFormError.content && (
          <span className="warning">{stateFormError.content.hint}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="text">Job Report Manager</label>
        <input
          className="form-control"
          type="text"
          id="text"
          name="reportManager"
          placeholder="Job Report Manager"
          onChange={onChange}
          readOnly={loading && true}
          value={stateFormData.reportManager.value}
        />
        {stateFormError.reportManager && (
          <span className="warning">{stateFormError.reportManager.hint}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="text">Date Limit</label>
        <input
          className="form-control"
          type="text"
          id="text"
          name="dateLimit"
          placeholder="Job Date Limit"
          onChange={onChange}
          readOnly={loading && true}
          value={stateFormData.dateLimit.value}
        />
        {stateFormError.dateLimit && (
          <span className="warning">{stateFormError.dateLimit.hint}</span>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-block btn-warning"
          disabled={loading}
        >
          {!loading ? 'Submit' : 'Submitting...'}
        </button>
      </div>
    </form>
  );
}
export default FormJob;
