import React from 'react';
import Router from 'next/router';

const Button = ({ href, text, isScrollButton, exClassName }) => {
  return (
    <a
      className={`btn-action ${
        isScrollButton ? 'js-croll-trigger' : ''
      } ${exClassName || ''}`}
      href={href}
      onClick={() => (!isScrollButton ? Router.push(href) : null)}
    >
      {text}
    </a>
  );
};

export default Button;
