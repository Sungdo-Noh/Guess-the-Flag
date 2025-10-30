import './App.css';
import { useNavigate } from 'react-router-dom';

function HomePage(props) {
    const navigate = useNavigate();
    const goToGamingPage =()=>{
        navigate('/gaming');
    }
    return (
        <div className='App'>
            <h1>국기 맞추기 게임</h1>
            <button onClick={goToGamingPage}>시작</button>

        </div>
    );
}

export default HomePage;