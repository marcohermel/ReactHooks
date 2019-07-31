import React from 'react'
import useCustomInput from '../common/useCustomInput'

export default function FormHooks() {
    let line1 = useCustomInput('');  
    let line2 = useCustomInput('', false);
    let postalCode = useCustomInput('');   
    let state = useCustomInput('');  
    return (
        <>
        <div className="form-group">
            <label >Line 1</label>
            <input  {...line1}   />        
        </div>
         <div className="form-group">
            <label >Line 2</label>
            <input {...line2} />
        </div>
         <div className="form-group">
            <label >Postal Code</label>
            <input {...postalCode} />
        </div>
         <div className="form-group">
            <label >State </label>
            <input {...state} />
        </div>
        </>
    )
}
