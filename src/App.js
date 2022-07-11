import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <main className='container mx-auto px-5 py-5 mt-10'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
