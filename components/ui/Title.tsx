import React from 'react';

const Title = ({
  primary,
  secondary,
}: {
  primary?: string;
  secondary?: string;
}) => {
  return (
    <h1 className="heading">
      {primary} <span className="text-purple">{secondary}</span>
    </h1>
  );
};

export default Title;
