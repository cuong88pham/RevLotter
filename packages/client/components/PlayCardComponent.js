import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as indexActions from '../stores/initState';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomIntArray = (maxValue, size) => {
  let randomIntArray = [];

  while (true) {
    const randomInt = getRandomInt(1, maxValue);
    if (randomIntArray.length === size) break;
    if (!randomIntArray.includes(randomInt)) randomIntArray.push(randomInt);
  }

  return randomIntArray;
};

const NumberList = ({ maxSize, activeNumbers }) => {
  let numberList = [];
  for (let i = 1; i <= maxSize; i++) {
    numberList.push(
      <li className={activeNumbers.includes(i) ? 'active' : ''} key={i}>
        {i}
      </li>
    );
  }

  return numberList;
};

const connectToRedux = connect(
  state => ({
    ...state
  }),
  distpatch => ({
    indexActions: bindActionCreators(indexActions, distpatch)
  })
);

class PlayCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNumbers: [],
      activeNumber: null
    };
  }

  setActiveNumbers = activeNumbers => {
    this.setState({ ...this.state, activeNumbers });
  };

  setActiveNumber = activeNumber => {
    this.setState({ ...this.state, activeNumber });
  };

  setQuickActiveCombo = (activeNumbers, activeNumber) => {
    this.setState({ ...this.state, activeNumbers, activeNumber });
  };

  componentDidUpdate() {
    const { activeNumbers, activeNumber } = this.state;
    const { indexActions = {}, id } = this.props;

    indexActions.updateTicketsData(id, activeNumbers, activeNumber);
  }

  render() {
    const { indexActions = {}, activeNumber, activeNumbers } = this.state;

    return (
      <div className="play-card">
        <button type="button" className="close-play-card">
          <i className="fa fa-times">x</i>
        </button>
        <div className="play-card-inner text-center">
          <div className="play-card-header">
            <span className="number-amount">Pick 5 Numbers</span>
            <div className="header-btn-area">
              <button
                type="button"
                id="quick-pick1"
                onClick={() => {
                  const randomIntArray = getRandomIntArray(50, 5);
                  this.setQuickActiveCombo(randomIntArray, getRandomInt(1, 10));
                }}
              >
                quick pick
              </button>
              <button
                type="button"
                id="clear-pick1"
                onClick={() => {
                  this.setQuickActiveCombo([], null);
                }}
              >
                clear
              </button>
            </div>
          </div>
          <div className="play-card-body">
            <ul className="number-list">
              <NumberList
                maxSize={50}
                activeNumbers={activeNumbers}
                setActiveNumbers={this.setActiveNumbers}
              />
            </ul>
            <span className="add-more-text">Pick 1 numbers</span>
            <ul className="number-list">
              <NumberList
                maxSize={10}
                activeNumbers={[activeNumber]}
                setActiveNumbers={this.setActiveNumber}
              />
            </ul>
          </div>
          <div className="play-card-footer">
            <p className="play-card-footer-text">Selected Numbers:</p>
            <div className="selected-numbers">
              {!activeNumber && activeNumbers.length === 0 ? (
                <span className="pt-1">No selected number</span>
              ) : (
                activeNumbers.map((activeNumber, index) => (
                  <span className="p-2" key={index}>
                    {activeNumber}
                  </span>
                ))
              )}
              <span style={{ fontWeight: 'bold' }}>{activeNumber}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connectToRedux(PlayCardComponent);
