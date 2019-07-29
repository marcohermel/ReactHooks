import React, { useState, useEffect } from 'react'

export default function SimpleFieldHooks() {
   let [statePessoa, setPessoa] = useState({ name: "Marco" })

   useEffect(() => {
      document.title = statePessoa.name;
   })

   return (
      <div className="form-group row">
         <label>Name </label>
         <input className="form-control " onChange={e => setPessoa({ name: e.target.value })} value={statePessoa.name} />
         <small> Nome: {statePessoa.name}</small>
      </div>
   )
}