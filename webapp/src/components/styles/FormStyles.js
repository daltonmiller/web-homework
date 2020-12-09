import styled from 'styled-components';

export const HeaderDiv = styled.h2``;

export const FormAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  animation-fill-mode: both;
`;
export const SelectContainer = styled.div`
  display: flex;
  align-items: center;

  h5 {
    width: 100px;
  }
`;
export const Select = styled.select`
margin: 20px;
width 230px;
border:none;
color: #808080;
background: rgba(265, 265, 265, 0.1);
box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
height: 30px;
border-radius: 10px;
&:focus {
    outline:0
}


`;
export const Input = styled.input`
margin: 20px;
width 230px;
border:none;
border-radius: 10px;
background: rgba(265, 265, 265, 0.1);
box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
height: 30px;

padding: 5px 10px;

&:focus {
    outline:0
}


`;

export const Button = styled.button`
  color: black;
  border: none;
  min-width: 100px;
  text-decoration: none;
  height: 50px;
  display: flex;
  justify-content: center;
  // gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  transition: 0.5s ease-out;
  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
export const Error = styled.p`
  color: red;
`;
