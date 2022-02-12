import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsersStart } from '../modules/actions/actions';

import Layout from '../packages/Layout';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersStart());
  }, [dispatch]);

  return (
    <>
      <Layout />
    </>
  );
};

export default Home;
