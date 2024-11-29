import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Header from './Components/Header';
import UserList from './Pages/UserList';
import UserDetail from './Pages/UserDetail';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
