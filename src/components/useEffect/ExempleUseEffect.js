import React, { useState, useEffect } from "react";

export default function ExempleUseEffect() {
    const [name, setName] = useState("Marco");
    const [age, setAge] = useState(29);

    useEffect(
        () => {
            localStorage.setItem("stateless name", name);
            localStorage.setItem("stateless age", age);
        },
        [name, age]
    );

    return (
        <form className="form-inline mb-4">
            <label>Name: </label>
            <input type="text" className="form-control form-control-sm ml-2 mr-2" onChange={e => setName(e.target.value)} value={name} />
            <label>Age: </label>
            <input type="number" className="form-control form-control-sm ml-2 mr-2" onChange={e => setAge(e.target.value)} value={age} />
        </form>
    );
}