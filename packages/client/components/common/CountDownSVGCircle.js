import React from 'react';

const SVGCircle = ({ radius }) => (
  <svg className="countdown-svg">
    <path
      fill="none"
      stroke="#DDEBF4"
      strokeWidth="20"
      d={describeArc(100, 100, 88, 0, 359.999)}
    />
    <path
      fill="none"
      stroke="#6c47e5"
      strokeWidth="20"
      d={describeArc(100, 100, 88, 0, radius)}
    />
  </svg>
);

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  var d = [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y
  ].join(' ');

  return d;
}

const CountDownSVGCircle = ({
  days,
  daysRadius,
  hours,
  hoursRadius,
  minutes,
  minutesRadius,
  seconds,
  secondsRadius
}) => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-6">
        {days && (
          <div className="countdown-item">
            <SVGCircle radius={daysRadius} />
            {days}
            <span>days</span>
          </div>
        )}
      </div>
      <div className="col-lg-3 col-md-6">
        {hours && (
          <div className="countdown-item">
            <SVGCircle radius={hoursRadius} />
            {hours}
            <span>hours</span>
          </div>
        )}
      </div>
      <div className="col-lg-3 col-md-6">
        {minutes && (
          <div className="countdown-item">
            <SVGCircle radius={minutesRadius} />
            {minutes}
            <span>minutes</span>
          </div>
        )}
      </div>
      <div className="col-lg-3 col-md-6">
        {seconds && (
          <div className="countdown-item">
            <SVGCircle radius={secondsRadius} />
            {seconds === 60 ? 0 : seconds}
            <span>seconds</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountDownSVGCircle;
