import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Cart from './components/Cart';
import { useAuth } from './context/AuthContext';

const App = () => {
  const { isAuthenticated } = useAuth();


  return (
    <Provider store={store}>

      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/cart"
            element={isAuthenticated ? <Cart /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<Navigate to="/register" />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
