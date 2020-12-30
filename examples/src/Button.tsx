// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module 'react'. Did you mean to set th... Remove this comment to see the full error message
import React from 'react';

const ButtonStyle = {
  borderRadius: '3px',
  background: 'rgb(3, 174, 243)',
  color: 'white',
  border: 'none',
  padding: '.5rem 1rem',
  fontWeight: 700,
  borderBottom: '2px solid rgb(2, 143, 199)',
};

const Button = ({
  handleClick,
  children
}: any) => (
  <button type="button" style={ButtonStyle} onClick={handleClick}>
    {children}
  </button>
);

export default Button;
