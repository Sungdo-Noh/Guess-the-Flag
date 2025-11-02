import './App.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const goToGamingPage = () => {
    navigate('/gaming');
  };
  return (
    <div>
      <div>
        <h1>국기 맞추기 게임</h1>
      </div>
      <div>
        <button onClick={goToGamingPage}>10문제</button>
        <button onClick={goToGamingPage}>20문제</button>
        <button onClick={goToGamingPage}>30문제</button>
        <button onClick={goToGamingPage}>40문제</button>
      </div>
    </div>
  );
}

export default HomePage;
