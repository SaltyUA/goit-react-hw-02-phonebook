const { default: styled } = require('styled-components');

const FormFlex = styled('form')(() => ({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  width: '50vw',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default FormFlex;
