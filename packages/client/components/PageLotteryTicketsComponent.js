import React from 'react';
import PlayCardComponent from './PlayCardComponent';
import { pick } from 'lodash/fp';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as TicketActions from '../stores/TicketState';
import { withTranslation } from '../i18n';

import Web3 from 'web3';
import { SM_ADDRESS, LOTTERY_ABI } from '../constants/index';
import {
  OPTION_LINES,
  MIN_TICKET,
  PRICE_TICKET,
  UNIT
} from '../constants/index';
import { TOAST_SUCCESS } from '../stores/ToastState';

const connectToRedux = connect(
  pick(['currentLineNumber', 'ticketsState']),
  distpatch => ({
    TicketActions: bindActionCreators(TicketActions, distpatch),
    displayToast: msg =>
      distpatch({ type: TOAST_SUCCESS, payload: { message: msg } })
  })
);

const enhance = compose(connectToRedux, withTranslation(['views', 'common']));

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
      isAllowPlay: false,
      web3: null,
      account: null,
      contract: null,
      tx: null,
      confirmationNumber: null
    };
  }

  setIsAllowPlay = isAllowPlay => {
    this.setState({ ...this.state, isAllowPlay });
  };
  getWeb3 = async () => {
    let contract = null;
    if (window.ethereum) {
      await window.ethereum.enable();
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      contract = new web3.eth.Contract(LOTTERY_ABI, SM_ADDRESS);
      this.setState({ account: accounts[0], web3: web3, contract: contract });
    }
  };
  componentDidMount = async () => {
    this.getWeb3();
  };
  buyTicket = async numbers => {
    const { web3, account, contract } = this.state;
    const { t, displayToast } = this.props;
    let d = [];
    for (var i = 0; i < numbers.length; i++) {
      let ticket = numbers[i];
      const ticket_line = ticket.numbers.join('#') + `#${ticket.number}`;
      d.push(web3.utils.fromAscii(ticket_line));
    }
    const total_price = numbers.length * PRICE_TICKET * 1e18;
    contract.methods
      .buyTicket(d)
      .send({ from: account, value: total_price })
      .on('error', error => {
        console.log(error);
      })
      .on('transactionHash', tx => {
        this.setState({ tx });
        displayToast(`${t('common:toast.your_tx')}:${tx}`);
      });
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
    const {
      TicketActions = {},
      currentLineNumber,
      ticketsState,
      t
    } = this.props;
    const { isAllowPlay } = this.state;
    const {
      changeLineNumberAction,
      addEmptyTicket,
      removeOneTicket,
      quickPickAll,
      clearAll
    } = TicketActions;

    return (
      <div className="container home lottery-tickets ">
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
                              `${
                                line === MIN_TICKET
                                  ? ` ${t('lottery_ticket.line')}`
                                  : ` ${t('lottery_ticket.lines')}`
                              }`}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="right text-right">
                      <div className="header-btn-area">
                        <button
                          onClick={() => quickPickAll(true)}
                          type="button"
                          id="quick-pick-all"
                        >
                          {t('lottery_ticket.quick_pick_all')}
                        </button>
                        <button onClick={() => clearAll(true)} type="button">
                          {t('lottery_ticket.clear_all')}
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
                          <span>
                            {`${t('lottery_ticket.draw_with')} ${
                              ticketsState.length
                            } 
                            ${t('lottery_ticket.ticket')}`}
                            :
                          </span>
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
                            if (isAllowPlay) this.buyTicket(ticketsState);
                          }}
                        >
                          <span className="single-cart-amount">
                            {t('lottery_ticket.play_now')}
                          </span>
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

export default enhance(PageLotteryTicketsComponent);
