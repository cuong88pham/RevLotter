import React from 'react';

const convertTimeStrToSecond = timeStr => {
  const [hours, minutes, second] = timeStr.split(':');
  const convertHoursToSecond = parseInt(hours) * 3600;
  const convertMinutesToSecond = parseInt(minutes) * 60;

  return convertHoursToSecond + convertMinutesToSecond + parseInt(second);
};

const getDeadlineTimeSecond = deadlineTimeInDay => {
  const arrTimeNow = new Date().toString().split(' ');
  return (
    convertTimeStrToSecond(deadlineTimeInDay) -
    convertTimeStrToSecond(arrTimeNow[4])
  );
};

class SimpleCountDown extends React.Component {
  constructor(props) {
    super(props);

    const { deadlineTimeInDay } = this.props;
    const deadlineTimeSecond = getDeadlineTimeSecond(deadlineTimeInDay);

    this.state = {
      time: {},
      seconds: deadlineTimeSecond < 0 ? 0 : deadlineTimeSecond
    };
    this.timer = 0;
    this.countDown = this.countDown.bind(this);

    this.startTimer();
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      hours,
      minutes,
      seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });

    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { hours, minutes, seconds } = this.state.time;
    const { styleSimpleCountDown } = this.props;

    return (
      <div style={styleSimpleCountDown}>
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    );
  }
}

export default SimpleCountDown;
