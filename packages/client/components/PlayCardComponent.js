import React from 'react';

const NumberList = ({ maxSize, activeNumbers }) => {
  let numberList = [];

  for (let i = 1; i <= maxSize; i++) {
    numberList.push(
      <li className={activeNumbers.includes(i) ? 'active' : ''}>{i}</li>
    );
  }

  return numberList;
};

const PlayCardComponent = () => {
  const activeNumbers = [9, 13, 20, 22, 29];

  return (
    <div className="play-card">
      <button type="button" className="close-play-card">
        <i className="fa fa-times">x</i>
      </button>
      <div className="play-card-inner text-center">
        <div className="play-card-header">
          <span className="number-amount">Pick 5 Numbers</span>
          <div className="header-btn-area">
            <button type="button" id="quick-pick1">
              quick pick
            </button>
            <button type="button" id="clear-pick1">
              clear
            </button>
          </div>
        </div>
        <div className="play-card-body">
          <ul className="number-list">
            <NumberList maxSize={50} activeNumbers={activeNumbers} />
          </ul>
          <span className="add-more-text">Pick 1 numbers</span>
          <ul className="number-list">
            <NumberList maxSize={10} activeNumbers={[8]} />
          </ul>
        </div>
        <div className="play-card-footer">
          <p className="play-card-footer-text">Selected Numbers:</p>
          <div className="selected-numbers">
            {activeNumbers.map(activeNumber => (
              <span className="p-1">{activeNumber}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayCardComponent;
