import React from 'react';

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

const PlayCardComponent = ({ id, numbers = [] }) => {
  console.log(`Numbers at Card ${id}: ${numbers}`);
  const [activeNumbers, setActiveNumbers] = React.useState([]);
  const [activeNumber, setActiveNumber] = React.useState();

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
                setActiveNumbers(randomIntArray);
                setActiveNumber(getRandomInt(1, 10));
              }}
            >
              quick pick
            </button>
            <button
              type="button"
              id="clear-pick1"
              onClick={() => {
                setActiveNumbers([]);
                setActiveNumber();
              }}
            >
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
            <NumberList maxSize={10} activeNumbers={[activeNumber]} />
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
};

export default PlayCardComponent;
