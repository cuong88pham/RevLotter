import React from 'react';
import PlayCardComponent from './PlayCardComponent';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as indexActions from '../stores/initState';

import {
  OPTION_LINES,
  MIN_TICKET,
  PRICE_TICKET,
  UNIT
} from '../constants/index';

const connectToRedux = connect(
  state => ({
    ...state
  }),
  distpatch => ({
    indexActions: bindActionCreators(indexActions, distpatch)
  })
);

const checkAllowPlay = ticketsState => {
  const indexFalseValue = ticketsState
    .map(ticket => ticket.isDone)
    .indexOf(false);

  if (indexFalseValue >= 0) return false;
  return true;
};

class PageLotteryTicketsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAllowPlay: false
    };
  }

  setIsAllowPlay = isAllowPlay => {
    this.setState({ ...this.state, isAllowPlay });
  };

  componentDidUpdate(prevProps, prevState) {
    const { ticketsState } = this.props;
    const isAllowPlayCur = checkAllowPlay(ticketsState);

    if (
      prevProps.ticketsState !== ticketsState &&
      prevState.isAllowPlay !== isAllowPlayCur
    )
      this.setIsAllowPlay(isAllowPlayCur);
  }

  render() {
    const { indexActions = {}, currentLineNumber, ticketsState } = this.props;
    const { isAllowPlay } = this.state;
    const {
      changeLineNumberAction,
      addEmptyTicket,
      removeOneTicket
    } = indexActions;

    return (
      <div className="container home lottery-tickets ">
        <ToastContainer />
        <section className="single-categories-play-section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="single-cat-play-area">
                  <div className="single-header d-flex justify-content-between row">
                    <div className="left">
                      <div className="header-btn-area">
                        {OPTION_LINES.map(line => (
                          <span
                            key={line}
                            onClick={() => changeLineNumberAction(line)}
                            className={`add-line ${currentLineNumber === line &&
                              'active-add-line'}`}
                          >
                            {line +
                              `${line === MIN_TICKET ? ' line' : ' lines'}`}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="right text-right">
                      <div className="header-btn-area">
                        <button
                          onClick={() => indexActions.quickPickAll(true)}
                          type="button"
                          id="quick-pick-all"
                        >
                          Quick Pick All
                        </button>
                        <button
                          onClick={() => indexActions.clearAll(true)}
                          type="button"
                        >
                          Clear All
                        </button>
                        <button type="button" id="add-item">
                          <i
                            className="fa fa-plus"
                            onClick={() => addEmptyTicket(currentLineNumber)}
                          />
                        </button>
                        <button type="button" id="delete-item">
                          <i
                            className="fa fa-trash"
                            onClick={() => changeLineNumberAction(MIN_TICKET)}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* single-header end */}
                  <div className="single-body pt-4 pb-4">
                    <div className="single-body-inner d-flex row">
                      {ticketsState.map(ticket => (
                        <PlayCardComponent
                          key={ticket.id}
                          id={ticket.id}
                          numbers={ticket.numbers}
                          onRemove={() =>
                            removeOneTicket({
                              id: ticket.id,
                              currentLineNumber
                            })
                          }
                        />
                      ))}
                    </div>
                  </div>
                  {/* single-body end */}
                  <div className="single-footer d-flex justify-content-start row">
                    <div className="right d-flex justify-content-between align-items-center flex-wrap flex-row">
                      <div className="content">
                        <p className="mt-0">
                          <span>1 draw with {ticketsState.length} ticket:</span>
                          <br />
                          <span className="amount">
                            {ticketsState.length} x {PRICE_TICKET} {UNIT}{' '}
                          </span>
                          <span className="amount font-weight-bold">
                            = {(ticketsState.length * PRICE_TICKET).toFixed(1)}{' '}
                            {UNIT}
                          </span>
                        </p>
                        {/* <p className="mt-0">
                          <span>Total Discount:</span>
                          <span className="amount pl-2">-€0.00</span>
                        </p> */}
                      </div>
                      <div className="card-cart-btn-area">
                        <a
                          className={`single-cart-btn d-block btn-play ${
                            isAllowPlay === true ? '' : 'disabled'
                          }`}
                          onClick={() => {
                            if (isAllowPlay)
                              toast.success('Connect to metamark !', {
                                position: toast.POSITION.TOP_RIGHT
                              });
                          }}
                        >
                          <span className="single-cart-amount">Play now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connectToRedux(PageLotteryTicketsComponent);
