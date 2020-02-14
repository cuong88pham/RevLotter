import React, { Fragment } from 'react';

const CountDownText = ({ days, hours, minutes, seconds, outOfDate }) => {
  return (
    <Fragment>
      {outOfDate && <div className="countdown-item">Out of date</div>}
      {!outOfDate && (
        <Fragment>
          <div className="countdown-item">
            {days}
            <span className="pr-2"> {days > 1 ? ' days' : 'day'}</span>
          </div>
          <div className="countdown-item">
            {hours >= 10 ? hours : `0${hours}` || '00'}
            <span>:</span>
          </div>
          <div className="countdown-item">
            {minutes >= 10 ? minutes : `0${minutes}` || '00'}
            <span>:</span>
          </div>
          <div className="countdown-item">
            {seconds >= 10 ? seconds : `0${seconds}` || '00'}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CountDownText;
