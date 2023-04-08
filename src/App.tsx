import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home/Home';
import MovieDetails from './views/MovieDetails/MovieDetails';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:imdbID" element={<MovieDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
