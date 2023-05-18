const { default: styled } = require("styled-components");

const StyledCreatePost = styled.div`
  height: 58px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  img {
    height: 36px;
  }
  input {
    height: 38px;
    border: 1px solid #edeff1;
    background-color: #f6f7f8;
    padding: 0 1rem;
    width: 100%;
    margin-right: 0.5rem;
    border-radius: 4px;
    &:hover {
      border: 1px solid #0665fc;
    }
    &::placeholder {
      font-weight: 300;
      color: #828282;
      letter-spacing: 0.5px;
    }
  }
`;

export default StyledCreatePost;