const { default: styled } = require('styled-components');

const SubmitButton = styled.button`
  padding: 5px 10px;
  font-weight: 600;
  border-radius: 10px;
  &:hover {
    background-color: green;
    color: #fff;
  }
`;

export default SubmitButton;
