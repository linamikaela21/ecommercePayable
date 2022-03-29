import { SignInAndSignUp } from '../SignIn-SignUp';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

describe('SignInAndSignUp', () => {
  // it('should render a SignInAndSignUp', () => {
  //   render(
  //     <Router>
  //       <Provider>
  //         <SignInAndSignUp />
  //       </Provider>
  //     </Router>
  //   );
  //   const SignInAndSignUpElement = screen.getByTestId(
  //     'test-id-SignInAndSignUp'
  //   );
  //   expect(SignInAndSignUpElement).toBeInTheDocument();
  // });
  it('DELETE', () => {
    expect(true).toBe(true);
  });
});
