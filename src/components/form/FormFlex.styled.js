const { default: styled } = require('styled-components');

const FormFlex = styled('form')(() => ({
  paddingTop: 20,
  margin: '0 auto',
  border: '1px solid black',
  padding: 10,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 300,
  justifyContent: 'center',
  alignItems: 'center',
}));

export default FormFlex;
