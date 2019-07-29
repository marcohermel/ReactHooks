import React, { useEffect, useState } from 'react'
import useCustomInput from '../common/useCustomInput'

export default function ExempleUseEffect() {
    let line1 = useCustomInput('');
    let line2 = useCustomInput('');
    let postalCode = useCustomInput('');
    let state = useCustomInput('');
    let country = useCustomInput('');
   let [isValid, setIsValid] = useState(true);

    useEffect(() => {
        let flag = true;
        let fields = [line1, line2, postalCode, state, country];
        fields.map(field => {
           if (field.value.length === 0) flag = false;
        });

        setIsValid(flag);
    }, [line1])

    return (
        <>
            <h2>{isValid ? "Valid" : "Invalid"}</h2>
            <div className="form-group row">
                <label >Line 1</label>
                <input  {...line1} />
            </div>
            <div className="form-group row">
                <label >Line 2</label>
                <input {...line2} />
            </div>
            <div className="form-group row">
                <label >Postal Code</label>
                <input {...postalCode} />
            </div>
            <div className="form-group row">
                <label >State </label>
                <input {...state} />
            </div>
            <div className="form-group row">
                <label >Country</label>
                <input  {...country} />
            </div>
        </>
    )
}
