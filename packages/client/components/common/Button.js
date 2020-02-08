import React from 'react';
import Router from 'next/router';

const Button = ({ href, text }) => {
  return (
    <button class="btn-action" onClick={() => Router.push(href)}>
      {text}
    </button>
  );
};

export default Button;
