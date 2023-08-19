import React from 'react';
import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
    const navigate = useNavigate();

    const goToHome = ()=>{
        navigate('/');
    }

    return (
        <div className='pnf'>
            <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png" className="pnf_image" alt="pnf_image" />
            <button onClick={goToHome}>Go to Home</button>
            
        </div>
    )
}

export default PageNotFound;