import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as indexActions from '../stores/initState';

import MyTicketsTableComponent from './MyTicketsTableComponent';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';

import { UNIT } from '../constants/index';

let dataMyTickets = {
  idAccount: 1,
  code: 'xmKDike9',
  balance: 8,
  level: 'Regular',
  point: 10,
  pointNextLevel: 51,
  totalAllTimesWins: 10,
  counterRefferal: 10,
  bonusMoney: 1,
  tickets: [
    {
      id: 1,
      type: '',
      buyAt: '02 13 2020, 15:49:01',
      ballsDrawn: [22, 34, 33, 51, 2, 9],
      nextDraw: '02 19 2020, 15:49:01'
    },
    {
      id: 2,
      type: '',
      buyAt: '02 13 2020, 15:49:01',
      ballsDrawn: [34, 33, 51, 22, 2, 1],
      nextDraw: '02 20 2020, 15:49:01'
    },
    {
      id: 3,
      type: '',
      buyAt: '02 13 2020, 15:49:01',
      ballsDrawn: [22, 51, 34, 33, 2, 5],
      nextDraw: '02 22 2020, 15:49:01'
    },
    {
      id: 4,
      type: '',
      buyAt: '02 13 2020, 15:49:01',
      ballsDrawn: [22, 15, 33, 51, 27, 3],
      nextDraw: '02 24 2020, 15:49:01'
    }
  ]
};

const connectToRedux = connect(
  state => ({
    ...state
  }),
  distpatch => ({
    indexActions: bindActionCreators(indexActions, distpatch)
  })
);

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCopy: false,
      currentUser: dataMyTickets
    };
  }

  render() {
    const {
      code,
      level,
      point,
      pointNextLevel,
      totalAllTimesWins,
      counterRefferal,
      bonusMoney,
      tickets,
      balance
    } = this.state.currentUser;

    return (
      <div id="history" className="flex-split">
        <ToastContainer />
        <div className="flex-intro account text-left">
          <h2 className="text-left title">My Account</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="account-detail-container p-4">
                <div className="item d-flex justify-content-between">
                  <p>VIP Level:</p>
                  <p className="highlight">{level}</p>
                </div>
                <div className="item d-flex justify-content-between">
                  <p>Points:</p>
                  <p>{point}</p>
                </div>
                <div className="item d-flex justify-content-between">
                  <p>To Upgrade Level:</p>
                  <p>{pointNextLevel}</p>
                </div>
                <div className="item d-flex justify-content-between">
                  <p>Total All-Time Wins:</p>
                  <p className="highlight">
                    {totalAllTimesWins} {UNIT}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="account-detail-container p-4">
                <div className="item d-flex justify-content-between">
                  <p>Counter Referral: </p>
                  <p className="highlight">{counterRefferal}</p>
                </div>
                <div className="item d-flex justify-content-between">
                  <p>Bonus Money:</p>
                  <p className="highlight">
                    {parseFloat(bonusMoney).toFixed(2)} {UNIT}
                  </p>
                </div>
                <div className="item ">
                  <p>Link Referral: </p>
                  <CopyToClipboard
                    text={`/register?code=${code}`}
                    onCopy={() => (
                      this.setState({ isCopy: true }),
                      toast.success('Copied', {
                        position: toast.POSITION.TOP_RIGHT,
                        draggablePercent: 60
                      })
                    )}
                  >
                    <span>register?code={code}</span>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
            <div className="cold-md-4">
              <div className="balance-container">
                <div className="d-flex">
                  <img src="/static/images/ic_wallet.svg" alt="" width="80" />
                  <div className="balance pl-4">
                    <p className="mb-0 ">Balance</p>
                    <h2 className="highlight">
                      {parseFloat(balance).toFixed(2)} ETH
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-intro history">
          <h2 className="text-left title">My tickets</h2>
          <MyTicketsTableComponent tickets={tickets} />
        </div>
      </div>
    );
  }
}

export default connectToRedux(ProfileComponent);