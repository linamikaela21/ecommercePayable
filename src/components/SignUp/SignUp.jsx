import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SignUp.styles.scss';
import { FormInput } from '../FormInput/FormInput';
import { Button } from '../Button/Button';
import { signUpStart } from '../../redux/user/actionsUser';

export const SignUp = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = user;

    if (confirmPassword !== password)
      return alert(`Passwords doesn't match. Please try again !`);

    dispatch(signUpStart({ displayName, email, password }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I do not have an account</h2>
      <span>Sign up with your Email and Password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          name="displayName"
          type="text"
          label="Name"
          value={user.displayName}
          required
          handleChange={(e) => handleChange(e)}
        />
        <FormInput
          name="email"
          type="email"
          label="E-mail"
          value={user.email}
          required
          handleChange={(e) => handleChange(e)}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={user.password}
          required
          handleChange={(e) => handleChange(e)}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value={user.confirmPassword}
          required
          handleChange={(e) => handleChange(e)}
        />
        <div className="buttons">
          <Button type="submit" childen={'Sing Up'} />
        </div>
      </form>
    </div>
  );
};
