import React from 'react';
export default function TestTwo(props) {
  function disrev(data) {
    return data
      .split('')
      .reverse()
      .join('');
  }
  return (
    <div>
      <h1> show {disrev(props.name)}</h1>
    </div>
  );
}
