import StyledForm from "./StyledForm";

const Form = ({ children, onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
}

export default Form;