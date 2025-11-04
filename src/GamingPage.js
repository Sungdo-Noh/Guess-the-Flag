import { useState } from 'react';
import { QuizData } from './QuizData';

function GamingPage() {
    const [num, setNum]= useState(0); //문제id, 0번째부터 시작
    const [ans, setAns] = useState('');
    
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
            console.log("hh");
            console.log("hh");

        }
        
    }
    return (
        <div>
            <h3>{QuizData[1].q}</h3>
            <input value={ans} onChange={handleAnswer}/>
            <button onClick={handleSubmit}>제출</button>
        </div>
    );
}

export default GamingPage;