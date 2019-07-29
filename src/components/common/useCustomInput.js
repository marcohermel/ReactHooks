import {useState} from 'react'

export default (initialState) => {
    let [value, setValue] = useState(initialState);   
    let [isValid, setIsValid] = useState(true);

   function handleChange(e){
       setValue(e.target.value);
       setIsValid(e.target.value.length > 0);     
   }

    let style = {borderColor: isValid ? '' : 'red' };
 
    let className = "form-control form-control-sm";
    let type = "text";

    return { value, onChange: handleChange, type, style, className};
}
