import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar';
import Home from './modules/Home';
import './styles/styles.sass';

function App() {
    return (
        <Router>
            <NavBar />
            <Home />
            <ToastContainer autoClose={4000} position="top-right" theme="colored" />
        </Router>
    );
}

export default App;
