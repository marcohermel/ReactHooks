import { useState } from 'react'

export default (initialState, required = true) => {
    let [value, setValue] = useState(initialState);
    let [isValid, setIsValid] = useState(true);

    function handleChange(e) {
        setValue(e.target.value);
        if(required) setIsValid(e.target.value.length > 0);
    }

    let style = { borderColor: isValid ? '' : 'red' };
    
    let className = "form-control form-control-sm";

    return { value, onChange: handleChange, type: "text", style, className };
}
