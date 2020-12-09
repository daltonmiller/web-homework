import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import {
  Input,
  Select,
  Button,
  Form,
  Error,
  SelectContainer,
  FormAlign,
  HeaderDiv
} from '../components/styles/FormStyles';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .required(),
  amount: yup.number(),
  merchant: yup.string().required(),
  type: yup.string().required()
});

const SignUpForm = () => {
  const [application, setApplication] = useState([]);
  const [isDisabled, setDisabled] = useState(true);

  const [formState, setFormState] = useState({
    name: '',
    amount: '',
    merchant: '',
    type: 'Instructor'
  });
  const [errorState, setErrorState] = useState({
    name: '*',
    amount: '*',
    merchant: '*',
    type: ''
  });

  const validate = e => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrorState({
          ...errorState,
          [e.target.name]: ''
        });
      })
      .catch(err => {
        console.log(err.errors);
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0]
        });
      });
  };

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setDisabled(!valid);
    });
  }, [formState]);

  const inputChange = e => {
    e.persist();
    validate(e);
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const formSubmit = e => {
    e.preventDefault();
    console.log('form submitted');

    axios.post('https://reqres.in/api/users', formState).then(res => {
      console.log(res.data);
      setApplication([...application, res.data]);
      if (formState.roll === 'Instructor') {
        window.location.href = '/Instructor';
      } else {
        window.location.href = '/Client';
      }
    });
  };
  return (
    <div>
      <Form onSubmit={formSubmit}>
        <FormAlign>
          <HeaderDiv>
            Create <br /> Transaction
          </HeaderDiv>

          <label htmlFor="name">
            <SelectContainer>
              <Input
                type="name"
                name="name"
                id="name"
                placeholder="Enter Name"
                value={formState.name}
                onChange={inputChange}
              />
              {errorState.name ? <Error>{errorState.name}</Error> : null}
            </SelectContainer>
          </label>

          <label htmlFor="amount">
            <SelectContainer>
              <Input
                type="amount"
                name="amount"
                id="amount"
                placeholder="Enter amount"
                value={formState.amount}
                onChange={inputChange}
              />
              {errorState.amount ? <Error>{errorState.amount}</Error> : null}
            </SelectContainer>
          </label>

          <label htmlFor="merchant">
            <SelectContainer>
              <Input
                type="text"
                name="merchant"
                id="merchant"
                placeholder="Enter merchant"
                value={formState.merchant}
                onChange={inputChange}
              />
              {errorState.merchant ? <Error>{errorState.merchant}</Error> : null}
            </SelectContainer>
          </label>
          <label htmlFor="type">
            <SelectContainer>
              <Select name="type" id="type" placeholder="Enter Type" value={formState.type} onChange={inputChange}>
                <option value="Debit">Debit</option>
                <option value="Credit">Credit</option>
              </Select>
              {errorState.type ? <Error>{errorState.type}</Error> : null}
            </SelectContainer>
          </label>
        </FormAlign>
        <Button disabled={isDisabled} onClick={() => ToastsStore.success('Sign Up successful')}>
          Submit
        </Button>
        <ToastsContainer store={ToastsStore} />
      </Form>
    </div>
  );
};

export default SignUpForm;
