import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './component/Header';
import LoadingSpinner from './component/LoadingSpinner';

const App = () => {
  const navigation=useNavigate();
  return (
    <div>
      <Header></Header>
      <div>
          {
            navigation.state==='loading' && <LoadingSpinner></LoadingSpinner>
          }
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default App;