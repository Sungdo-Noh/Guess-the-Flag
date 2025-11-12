import { useState, useEffect, useRef } from 'react';
import { QuizData } from './QuizData';

function GamingPage() {
  const [num, setNum] = useState(0); //문제id, 0번째부터 시작
  const [ans, setAns] = useState(''); // 유저가 input에 입력한 텍스트
  const [newArr, setNewArr] = useState([]); //랜덤한 숫자배열
  const [isCorrect, setIsCorrect] = useState(false); // 정답 맞는지
  const [isAnswerd, setIsAnswerd] = useState(false); // 버튼 클릭 여부
  const deleteInput = useRef(null);
  let n;
  // 첫 렌더링 시, 200여개 중에 랜덤한 숫자 10개 생성, 그 숫자로 구성된 배열 만들기
  useEffect(() => {
    const copy = [...QuizData]; // 새로운 주소지가 있는 배열로 생성
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    const copySliced = copy.slice(0, 11);
    setNewArr(copySliced);
  }, []);

  const handleAnswer = e => {
    setAns(e.target.value);
  };
  const handleSubmit = () => {
    if (ans === '') {
      alert('값을 입력하시오');
    }
    setIsAnswerd(true);
    if (ans === newArr[num].a) {
      setIsCorrect(true);
    } else setIsCorrect(false);

    deleteInput.current.value = '';
  };
  return (
    <div>
      {/* 버튼 클릭 하면 */}
      {isAnswerd ? (
        isCorrect ? (
          <div>
            <img
              src={newArr[num]?.imgUrl}
              alt="quiz image"
              style={{width:'300px',height:'auto'}} 
            />
            <p>정답</p>
            <button onClick={()=>{
              setNum(prevNum=>prevNum+1);
              setIsAnswerd(false);
            }}>다음 문제</button>
            <h3>{newArr[num]?.a}</h3>
          </div>
        ) : (
          <div>
            <p>오답</p>
          </div>
        )
      ) : (
        <div>
          <img
              src={newArr[num]?.imgUrl}
              alt="quiz image"
              style={{width:'300px',height:'auto'}} 
            />
          <p>{num}</p>
          <input placeholder="answer" ref={deleteInput} onChange={handleAnswer} />
          <button onClick={handleSubmit}> submit </button>
        </div>
      )}
    </div>
  );
}

export default GamingPage;
