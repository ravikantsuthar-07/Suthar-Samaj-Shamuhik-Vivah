import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Spinners from 'react-bootstrap/Spinner';

const Spinner = ({ path = "login" }) => {
    const [count, serCount] = useState(3);
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            serCount((prevValue) => --prevValue);
        }, 1000);
        count === 0 && navigate(`/${path}`);
        return () => clearInterval(interval)
    }, [count, navigate, path]);

    return (
        <Spinners animation="grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinners>
    )
}

export default Spinner