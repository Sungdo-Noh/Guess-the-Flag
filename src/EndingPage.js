import React from 'react';
import { Link } from 'react-router-dom';

function EndingPage(props) {
    return (
        <div>
            <h1>Ending Page</h1>
            <button><Link to="/">처음부터</Link></button>
        </div>
    );
}

export default EndingPage ;