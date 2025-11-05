import { useState } from 'react';
import { QuizData } from './QuizData';

function GamingPage() {
    const [num, setNum]= useState(0); //문제id, 0번째부터 시작
    const [ans, setAns] = useState('');

    //num이 랜덤하게 생성=> 랜덤하게 문제 출제
    const randNum=()=>{
        
    }
    
    const handleAnswer =(e)=>{
        setAns(e.target.value);
    }
    const handleSubmit =()=>{
        if(ans==""){
            alert("값을 입력하시오");
        }
        if(ans==QuizData[1].a){
            console.log("correct");
            setAns('');
        }else{
            console.log("no");
            setAns('');
        }
        
    }
    return (
        <div>
            <h3>{QuizData[num].q}</h3>
            <input value={ans} onChange={handleAnswer}/>
            <button onClick={handleSubmit}>제출</button>
        </div>
    );
}

export default GamingPage;