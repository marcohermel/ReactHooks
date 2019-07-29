import React from 'react'
import useCustomInput from '../common/useCustomInput'

export default function FormHooks() {
    let line1 = useCustomInput('');  
    let line2 = useCustomInput('');
    let postalCode = useCustomInput('');   
    let state = useCustomInput('');  
    let country = useCustomInput('');  
    return (
        <>
        <div className="form-group row">
            <label >Line 1</label>
            <input  {...line1}   />        
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
