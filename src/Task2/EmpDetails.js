// import React from 'react';
import empData from '../Util/taskData.js';
import Emp from './Employee.js';

function EmployeeDetails(props) {
    const displayData = empData.find(data => data.id === props.match.params.id)
    console.log(displayData)

    return <Emp data = {displayData}></Emp>  
}


export default EmployeeDetails;