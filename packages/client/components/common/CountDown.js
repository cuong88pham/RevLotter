import React from 'react';
import moment from 'moment';
import { compose } from 'redux';
import { withTranslation } from '../../i18n';

import CountDownSVGCircle from './CountDownSVGCircle';
import CountDownText from './CountDownText';

function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}
const enhance = compose(withTranslation('views'));

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined,
      outOfDate: false
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      // const countdown = moment(then - now);
      // const days = countdown.format('D');
      // const hours = countdown.format('HH');
      // const minutes = countdown.format('mm');
      // const seconds = countdown.format('ss');
      const duration = moment.duration(then.diff(now));
      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();
      this.setState({ ...this.state, days, hours, minutes, seconds });

      if (seconds < 0) {
        clearInterval(this.interval);
        this.setState({ ...this.state, outOfDate: true });
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds, outOfDate } = this.state;
    const { timeTillDate, t } = this.props;
    const daysRadius = mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);
    const { isSVGCircle } = this.props;

    return (
      <div
        className={
          isSVGCircle
            ? 'countdown-container countdown-wrapper'
            : 'countdown-container'
        }
      >
        {isSVGCircle ? (
          <CountDownSVGCircle
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds === 0 ? 60 : seconds}
            daysRadius={daysRadius}
            hoursRadius={hoursRadius}
            minutesRadius={minutesRadius}
            secondsRadius={secondsRadius}
            t={t}
          />
        ) : (
          <CountDownText
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            timeTillDate={timeTillDate}
            outOfDate={outOfDate}
            t={t}
          />
        )}
      </div>
    );
  }
}

export default enhance(Countdown);
