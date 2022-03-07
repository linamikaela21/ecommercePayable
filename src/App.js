import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { HomePage } from '../src/pages/HomePage/HomePage';
import { Redirect, Route } from 'react-router-dom';
import { ShopPage } from '../src/pages/Shop/ShopPage';
import { Header } from '../src/components/Header/Header';
import { SignInAndSignUp } from '../src/pages/SignIn-SignUp/SignIn-SignUp';
import { auth, createUserProfileDoc } from '../src/Firebase/firebase.utils';
import { setActualUser } from './redux/user/actionsUser';
import { CheckOut } from '../src/pages/CheckOut/CheckOut';

export const App = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        const userRef = await createUserProfileDoc(currentUser);
        await userRef?.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
        setUser(currentUser?.providerData[0]);
      }
      dispatch(setActualUser(user));
    });
  }, [user]);

  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/checkOut" component={CheckOut} />
      <Route path="/shop" component={ShopPage} />
      <Route
        exact
        path="/signIn"
        render={() => (user.length ? <Redirect to="/" /> : <SignInAndSignUp />)}
      />
    </div>
  );
};
