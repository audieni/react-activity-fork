import { useState } from "react";

function Counter() {
    // count is a variable to track the count
    // setCount is the method to use when state changes
    const [count, setCount] = useState(1);

    function increment() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>{ count }</p>
            <button onClick={increment}>Count +1</button>
        </div>
    )
}

export default Counter;