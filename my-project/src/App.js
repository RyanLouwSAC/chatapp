// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Chat from './pages/Chat';

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/chat" component={Chat} />
      </Layout>
    </Router>
  );
}

export default App;
