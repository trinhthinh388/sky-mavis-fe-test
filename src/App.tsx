import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import styled from 'styled-components';

const Main = lazy(() => import('./pages/Main'));

const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Suspense fallback={null}>
      <Container className="main-bg">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Main />} />
          </Routes>
        </Router>
      </Container>
    </Suspense>
  );
}

export default App;
