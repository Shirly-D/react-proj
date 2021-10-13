import React from "react";
import empData from '../Util/taskData.js';
import { Link } from 'react-router-dom';

function Emp(props) {
    console.log(props)
    return empData.map((emp) => {
    return <Link to={`/employee/${emp.id}`}> 
    <li key={emp} className={emp.className}>
            <p>Emp ID: {emp.id}</p>
            <p>Name: {emp.ename}</p>
            <p>Year of Joining: {emp.joining}</p>
            <p>Progress: {emp.progress}%</p>
        </li>
    </Link>
    });
}

export default Emp;