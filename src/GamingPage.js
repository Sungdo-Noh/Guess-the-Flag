import { useState, useEffect, useRef } from 'react';
import { QuizData } from './QuizData';

function GamingPage() {
  const [num, setNum] = useState(0); //문제id, 0번째부터 시작
  const [ans, setAns] = useState('');
  const [newArr, setNewArr]=useState([]); //랜덤한 숫자배열
  const deleteInput = useRef(null);
  let n;
  // 첫 렌더링 시, 200여개 중에 랜덤한 숫자 10개 생성, 그 숫자로 구성된 배열 만들기
  useEffect(() => {
    const copy = [...QuizData]; // 새로운 주소지가 있는 배열로 생성
   for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
      [copy[i],copy[j]] = [copy[j],copy[i]];
    }
    const copySliced = copy.slice(0,1);
    setNewArr(copySliced);
    console.log(newArr);
    console.log(copy);
  }, []);

  const handleAnswer = e => {
    setAns(e.target.value);
  };
  const handleSubmit = () => {
    if (ans === '') {
      alert('값을 입력하시오');
    }
    if (ans === QuizData[num].a) {
      console.log('correct');
      setAns('');
      // 다음 문제로 넘어가기 => newArr의 i+1번째 배열의 문제로 
    } else {
      console.log('no');
      setAns('');
    }
    deleteInput.current.value='';
  };
  return (
    <div>
      <h3>{QuizData[num].q}</h3>
      <input placeholder="answer" ref={deleteInput} onChange={handleAnswer} />
      <button onClick={handleSubmit}>제출</button>
      
    </div>
  );
}

export default GamingPage;
