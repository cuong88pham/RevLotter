import React from 'react';
import Router from 'next/router';

const Button = ({ href, text, isScrollButton, exClassName, doOnClick }) => {
  return (
    <a
      className={`btn-action ${
        isScrollButton ? 'js-scroll-trigger' : ''
      } ${exClassName || ''}`}
      href={isScrollButton ? href : null}
      onClick={event =>
        !isScrollButton && !doOnClick ? Router.push(href) : doOnClick(event)
      }
    >
      {text}
    </a>
  );
};

export default Button;
