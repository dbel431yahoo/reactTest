import React, { useState } from 'react';
import TestTwo from './TestTwo';
export default function Test(props) {
  const [name,setName] = useState(props.name);
  function change(event) {
    console.log(event.target.value);
    setName(event.target.value)
  }
  return (
    <div>
      <h1> show {name}</h1>
      <input type="text" onChange={change} value={name} />
      <TestTwo name={name} />
    </div>
  );
}
