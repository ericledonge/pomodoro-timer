import React from 'react';

type HelloProps = {
  name?: string;
};

const Hello = ({ name }: HelloProps) => {
  return <div>{`Hello ${name}`}</div>;
};

export default Hello;
