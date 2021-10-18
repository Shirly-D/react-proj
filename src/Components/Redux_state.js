import {useState} from 'react';

function ReduxState() {
    // state
    const [counter, setCounter] = useState(0);

    //action
    const incr = () => {
        setCounter(state => state + 1)
    }

    //view
    return(
        <>
        Value: {counter} <button onClick={incr}>Click</button>
        </>
    )
}

export default ReduxState;