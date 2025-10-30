import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function GamingPage(props) {
    const navigate = useNavigate();
    const gotoEndingPage =()=>{
        navigate('/ending');
    }
    
    return (
        <div>
            <button onClick={gotoEndingPage}>Finish</button>
        </div>
    );
}

export default GamingPage;