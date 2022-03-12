import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SignIn.styles.scss';
import { FormInput } from '../FormInput/FormInput';
import { Button } from '../Button/Button';
import { FcGoogle } from 'react-icons/fc';
import {
  emailSignInStart,
  googleSignInStart,
} from '../../redux/user/actionsUser';

export const SignIn = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ ...user }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const { email, password } = user;

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your Email and Password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          name="email"
          type="email"
          label="E-mail"
          value={email}
          required
          handleChange={(e) => handleChange(e)}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          required
          handleChange={(e) => handleChange(e)}
        />
        <div className="buttons">
          <Button
            type="button"
            childen={'Sing In'}
            onClick={(e) => handleSubmit(e)}
          />
          <Button
            type="button"
            childen={<FcGoogle size={35} />}
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSingIn
          />
        </div>
      </form>
    </div>
  );
};
