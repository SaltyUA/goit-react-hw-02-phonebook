const { default: styled } = require('styled-components');

const DeleteButton = styled.button`
  border-radius: 10px;
  font-weight: 500;
  padding: 5px;
  margin-left: 10px;
  &:hover {
    background-color: #ff3030;
  }
`;

export default DeleteButton;
