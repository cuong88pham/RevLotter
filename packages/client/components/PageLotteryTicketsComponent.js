import React from 'react';
import PlayCardComponent from './PlayCardComponent';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as indexActions from '../stores/initState';

const connectToRedux = connect(
  state => ({
    ...state
  }),
  distpatch => ({
    indexActions: bindActionCreators(indexActions, distpatch)
  })
);

const LINES = [1, 3, 5, 7, 10, 15, 20, 25];
const DEFAULT_LINE_NUMBER = 1;
const PRICE_TICKET = 0.1;
const UNIT = 'ETH';

class PageLotteryTicketsComponent extends React.Component {
  checkPickedNumber = ({ numbers, number }) => {
    if (numbers.length < 5) {
      toast.warn('Please checking your pick !', {
        position: toast.POSITION.TOP_LEFT
      });
    }
    if (number < 1) {
      toast.warn('Please checking your pick !', {
        position: toast.POSITION.TOP_LEFT
      });
    }
  };
  handlePlay = () => {
    // 1. verify all tickets was picked
    // 2. check signup
    console.log(this.props);
    let { isAllowPlay } = this.props;

    // let currentTicketNumber = ticketsState;

    // let arrayMissingPickTicket = [];
    // currentTicketNumber.map(item => {
    //   if (item.numbers.length < 5 || item.numbers == null) {
    //     indexActions.quickPickAll(false);
    //     arrayMissingPickTicket.push(item.name);
    //   }
    // });
    // let errMsgToast = 'Missing pick in tickets: ';
    // arrayMissingPickTicket.map(item => {
    //   errMsgToast += item + ', ';
    // });
    // if (isAllowPlay)
    if (isAllowPlay) {
      // indexActions.quickPickAll(true);
      toast.success('Connect to metamark !', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  render() {
    const {
      indexActions = {},
      currentLineNumber,
      ticketsState,
      isAllowPlay
    } = this.props;
    const {
      changeLineNumberAction,
      addEmptyTicket,
      removeOneTicket
    } = indexActions;

    // console.log(this.props);
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
                        {LINES.map(line => (
                          <span
                            key={line}
                            onClick={() => changeLineNumberAction(line)}
                            className={`add-line ${currentLineNumber === line &&
                              'active-add-line'}`}
                          >
                            {line +
                              `${
                                line === DEFAULT_LINE_NUMBER
                                  ? ' line'
                                  : ' lines'
                              }`}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="right text-right">
                      <div className="header-btn-area">
                        <button
                          onClick={() => (
                            indexActions.quickPickAll(true),
                            indexActions.allowPlay(ticketsState)
                          )}
                          type="button"
                          id="quick-pick-all"
                        >
                          Quick Pick All
                        </button>
                        <button
                          onClick={() => (
                            indexActions.clearAll(true),
                            indexActions.allowPlay(ticketsState)
                          )}
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
                        {currentLineNumber !== DEFAULT_LINE_NUMBER && (
                          <button type="button" id="delete-item">
                            <i
                              className="fa fa-trash"
                              onClick={() =>
                                changeLineNumberAction(DEFAULT_LINE_NUMBER)
                              }
                            />
                          </button>
                        )}
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
                            this.handlePlay();
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
