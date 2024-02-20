import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import WaiterApp from './components/pages/WaiterApp/WaiterApp';
import { fetchTables } from './redux/tableReducer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {dispatch(fetchTables())}, [dispatch]);
  return (
      <div>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table/:tableId" element={<WaiterApp />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Container>
      </div>
  );
};

export default App;


