// import React from 'react';
import empData from '../Util/taskData.js';

function EmployeeDetails(props) {
    const displayData = empData.find(data => data.id === props.match.params.id)
    console.log(displayData) 

    return <div className={displayData.className}>
        <p>Name: {displayData.ename}</p>
        <p>Joining: {displayData.joining}</p>
        <p>Progress: {displayData.progress}%</p>
    </div>
}


export default EmployeeDetails;