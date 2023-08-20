import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: darkred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkred;
  border-radius: 3px;
`;

function ArmDrone() {
  fetch('http://localhost:8001/arm', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}

function ArmButton() {
  const [drone, setDrone] = useState(0);

  return (
    <div>
      <Button onClick={() => ArmDrone()}>Arm Button</Button>
    </div>
  );
}

export default ArmButton;
