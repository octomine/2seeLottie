import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Holder = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid grey;
`;

export const CanvasHolder = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 100, 100);
  }, []);

  return (
    <Holder>
      <canvas ref={canvasRef} />
    </Holder>
  );
};
