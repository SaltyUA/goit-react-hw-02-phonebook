const { default: styled } = require('styled-components');

const Input = styled('input')(() => ({
  borderRadius: 5,
  boxShadow: 'box-shadow: inset 10px -10px 30px 0px rgba(0,0,0,0.75)',
  padding: '5px 10px',
}));

export default Input;
