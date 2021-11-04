const Form = ({ title, onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>
      {title ? <h3>{title}</h3> : ""}
      {children}
    </form>
  );
};

export default Form;
