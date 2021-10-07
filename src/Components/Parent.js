import React from 'react';
import Child from './Child.js';


const Parent = () => {
    const data = "Hello Everyone";
    return (
        <div>
            <Child data = {data}></Child>
        </div>
    );

}

export default Parent;