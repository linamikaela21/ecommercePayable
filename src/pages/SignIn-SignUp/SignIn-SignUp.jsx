import React from 'react';
import { SignIn } from '../../components/SignIn/SignIn';
import { SignUp } from '../../components/SignUp/SignUp';
import './SignIn-SignUp.style.scss';

export const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up" data-testid="test-id-SignInAndSignUp">
    <SignIn />
    <SignUp />
  </div>
);
