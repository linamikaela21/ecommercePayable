import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { HomePage } from '../src/pages/HomePage/HomePage';
import { Redirect, Route } from 'react-router-dom';
import { ShopPage } from '../src/pages/Shop/ShopPage';
import { Header } from '../src/components/Header/Header';
import { SignInAndSignUp } from '../src/pages/SignIn-SignUp/SignIn-SignUp';
import { checkUserSession } from './redux/user/actionsUser';
import { CheckOut } from './pages/CheckOut/CheckOut';
import { fetchCollectionStart } from './redux/shop/actionsShop';
import { Form } from './Form/Form';

export const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchCollectionStart());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/checkOut" component={CheckOut} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/contact" component={Form} />
      <Route
        exact
        path="/signIn"
        render={() => (user ? <Redirect to="/" /> : <SignInAndSignUp />)}
      />
    </div>
  );
};
