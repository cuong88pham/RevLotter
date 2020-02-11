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

const pickNumber = (value, activeNumbers, maxSize, setActiveNumbers) => {
  let indexItem = activeNumbers.indexOf(value);
  if (maxSize > 10) {
    if (activeNumbers.length * 10 < maxSize) {
      activeNumbers.includes(value)
        ? activeNumbers.splice(indexItem, 1)
        : activeNumbers.push(value);
    } else {
      if (activeNumbers.includes(value)) {
        activeNumbers.splice(indexItem, 1);
      }
    }
    setActiveNumbers(activeNumbers);
  } else {
    setActiveNumbers(value);
  }
};

const NumberList = ({ maxSize, activeNumbers, setActiveNumbers }) => {
  let numberList = [];
  for (let i = 1; i <= maxSize; i++) {
    numberList.push(
      <li
        className={activeNumbers.includes(i) ? 'active' : ''}
        key={i}
        onClick={() => {
          pickNumber(i, activeNumbers, maxSize, setActiveNumbers);
        }}
      >
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

const DEFAULT_LINE_NUMBER = 1;

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

  componentDidUpdate(prevProps, prevState) {
    const { activeNumbers, activeNumber } = this.state;
    const { indexActions = {}, id, isQuickPickAll, isClearAll } = this.props;
    if (
      prevState.activeNumber !== activeNumber ||
      prevState.activeNumbers !== activeNumbers
    ) {
      indexActions.updateTicketsData(id, activeNumbers, activeNumber);
    }

    if (prevProps.isQuickPickAll !== isQuickPickAll && isQuickPickAll) {
      const randomIntArray = getRandomIntArray(50, 5);
      this.setQuickActiveCombo(randomIntArray, getRandomInt(1, 10));
      indexActions.quickPickAll(false);
    }

    if (prevProps.isClearAll !== isClearAll && isClearAll) {
      this.setQuickActiveCombo([], null);
      indexActions.clearAll(false);
    }
  }

  render() {
    const { activeNumber, activeNumbers } = this.state;
    const { onRemove, currentLineNumber } = this.props;

    console.log(currentLineNumber);

    return (
      <div className="play-card mb-4">
        <button type="button" className="close-play-card">
          <i
            className={`fa fa-times ${
              currentLineNumber === DEFAULT_LINE_NUMBER ? 'fa-disabled' : ''
            }`}
            onClick={
              currentLineNumber !== DEFAULT_LINE_NUMBER ? onRemove : () => {}
            }
          ></i>
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
            <p className="play-card-footer-text mt-0">Selected Numbers:</p>
            <div className="selected-numbers">
              {!activeNumber && activeNumbers.length === 0 ? (
                <span className="pt-1">No selected number</span>
              ) : (
                activeNumbers.map((activeNumber, index) => (
                  <span className="p-1" key={index}>
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
