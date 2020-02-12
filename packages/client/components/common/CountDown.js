import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as indexActions from '../../stores/initState';

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
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

const connectToRedux = connect(
  state => ({
    ...state
  }),
  distpatch => ({
    indexActions: bindActionCreators(indexActions, distpatch)
  })
);

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format('D');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');
      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    const daysRadius = mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);
    if (!seconds) {
      return null;
    }

    return (
      <div>
        <div className="countdown-wrapper">
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
                  {seconds}
                  <span>seconds</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connectToRedux(Countdown);
