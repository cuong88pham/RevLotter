import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from '../i18n';
import { pick } from 'lodash/fp';
import { bindActionCreators, compose } from 'redux';

import * as TicketActions from '../stores/TicketState';
import {
  MAX_NUMBER_LIST_1_NUMBER,
  MAX_NUMBER_LIST_5_NUMBERS,
  MIN_TICKET
} from '../constants/index';
import { getRandomIntArray, getRandomInt } from '../utils';

const pickNumber = (value, activeNumbers, maxSize, setActiveNumbers) => {
  let indexItem = activeNumbers.indexOf(value);
  if (maxSize > MAX_NUMBER_LIST_1_NUMBER) {
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

const checkIsDone = (activeNumber, activeNumbers) => {
  if (activeNumbers.length === 5 && activeNumber) return true;
  return false;
};

const getIndexCurrentTicket = (curTicketState, id) =>
  curTicketState && curTicketState.map(ticket => ticket.id).indexOf(id);

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
  pick(['isClearAll', 'isQuickPickAll', 'currentLineNumber', 'ticketsState']),
  distpatch => ({
    TicketActions: bindActionCreators(TicketActions, distpatch)
  })
);

const enhance = compose(connectToRedux, withTranslation('views'));

class PlayCardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNumbers: [],
      activeNumber: null,
      isDone: false
    };
  }
  setActiveNumbers = activeNumbers => {
    this.setState({ ...this.state, activeNumbers });
  };

  setActiveNumber = activeNumber => {
    this.setState({ ...this.state, activeNumber });
  };

  setIsDone = isDone => {
    this.setState({ ...this.state, isDone });
  };

  setQuickActiveCombo = (activeNumbers, activeNumber) => {
    this.setState({ ...this.state, activeNumbers, activeNumber });
  };

  setTicket = (numbers, number, isDone) => {
    this.setState({
      ...this.state,
      activeNumbers: numbers,
      activeNumber: number,
      isDone
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { activeNumbers, activeNumber } = this.state;
    const { TicketActions = {}, id, isClearAll, ticketsState } = this.props;
    const { updateTicketsData, clearAll, updateStatusTicket } = TicketActions;

    if (
      prevState.activeNumber !== activeNumber ||
      prevState.activeNumbers !== activeNumbers
    ) {
      updateTicketsData(id, activeNumbers, activeNumber);
    }

    if (prevProps.ticketsState !== ticketsState) {
      const curTicket = ticketsState.find(ticket => ticket.id === id);
      const { numbers, number, isDone } = curTicket;
      this.setTicket(numbers, number, isDone);
    }

    if (prevProps.isClearAll !== isClearAll && isClearAll) {
      this.setQuickActiveCombo([], null);
      clearAll(false);
    }

    const isDoneCurrent = checkIsDone(activeNumber, activeNumbers);
    const prevTicketsState = prevProps.ticketsState;
    const indexCurrentTicket = getIndexCurrentTicket(prevTicketsState, id);

    if (prevTicketsState[indexCurrentTicket].isDone !== isDoneCurrent) {
      updateStatusTicket(id, isDoneCurrent);
      this.setIsDone(isDoneCurrent);
    }
  }

  render() {
    const { activeNumber, activeNumbers, isDone } = this.state;
    const { onRemove, currentLineNumber, t } = this.props;

    return (
      <div className="play-card mb-4">
        <button type="button" className="close-play-card">
          <i
            className={`fa fa-times ${
              currentLineNumber === MIN_TICKET ? 'fa-disabled' : ''
            }`}
            onClick={currentLineNumber !== MIN_TICKET ? onRemove : () => {}}
          ></i>
        </button>
        <div className="play-card-inner text-center">
          <div className={`play-card-header ${isDone ? 'ticket-done' : ''}`}>
            <span className="number-amount">{t('lottery_ticket.pick_5')}</span>
            <div className="header-btn-area">
              <button
                type="button"
                id="quick-pick1"
                onClick={() => {
                  const randomIntArray = getRandomIntArray(
                    MAX_NUMBER_LIST_5_NUMBERS,
                    5
                  );
                  this.setQuickActiveCombo(
                    randomIntArray,
                    getRandomInt(1, MAX_NUMBER_LIST_1_NUMBER)
                  );
                }}
              >
                {t('lottery_ticket.quick_pick')}
              </button>
              <button
                type="button"
                id="clear-pick1"
                onClick={() => {
                  this.setQuickActiveCombo([], null);
                }}
              >
                {t('lottery_ticket.clear')}
              </button>
            </div>
          </div>
          <div className={`play-card-body ${isDone ? 'ticket-done' : ''}`}>
            <ul className="number-list">
              <NumberList
                maxSize={MAX_NUMBER_LIST_5_NUMBERS}
                activeNumbers={activeNumbers}
                setActiveNumbers={this.setActiveNumbers}
              />
            </ul>
            <span className="add-more-text">{t('lottery_ticket.pick_1')}</span>
            <ul className="number-list">
              <NumberList
                maxSize={MAX_NUMBER_LIST_1_NUMBER}
                activeNumbers={[activeNumber]}
                setActiveNumbers={this.setActiveNumber}
              />
            </ul>
          </div>
          <div className="play-card-footer">
            <p className="play-card-footer-text mt-0">
              {t('lottery_ticket.selected_number')}:
            </p>
            <div className="selected-numbers">
              {!activeNumber && activeNumbers.length === 0 ? (
                <span className="pt-1">{t('lottery_ticket.no_selected')}</span>
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

export default enhance(PlayCardComponent);
