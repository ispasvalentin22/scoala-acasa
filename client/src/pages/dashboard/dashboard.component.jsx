import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../redux/user/user.actions';
import { isLoggedIn } from "../../utils/isLoggedIn";

const Dashboard = () => {
  useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (isLoggedIn()) {
    console.log(isLoggedIn());
    const request = () => dispatch(getUserInfo());
    console.log(request);
    request();
  }

  // useEffect(() => {
  //   if (isLoggedIn()) {
  //     console.log(isLoggedIn());
  //     const request = () => dispatch(getUserInfo());
  //     console.log(request);
  //     request();
  //   }
  // }, [dispatch]);

  return (

  );
}

export default Dashboard;