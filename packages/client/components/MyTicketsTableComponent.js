import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as indexActions from '../stores/initState';

import CountDown from '../components/common/CountDown';

const connectToRedux = connect(
  state => ({
    ...state
  }),
  distpatch => ({
    indexActions: bindActionCreators(indexActions, distpatch)
  })
);

class MyTicketsTableComponent extends React.Component {
  render() {
    const { tickets } = this.props;
    return (
      <table className="table table-background table-hover">
        <thead>
          <tr>
            <th scope="col">Bought at</th>
            <th scope="col">Balls Drawn</th>
            <th scope="col">Next draw</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((item, index) => {
            return (
              <tr key={index}>
                <td className="align-middle">{item.buyAt}</td>
                <td className="align-middle">
                  <div className="row-numbers ">
                    <ul className="number-list border-0 m-auto">
                      {item.ballsDrawn.map(value => {
                        return (
                          <li className="item" key={value}>
                            {value}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </td>
                <td className="align-middle">
                  <CountDown
                    timeTillDate={item.nextDraw}
                    timeFormat="MM DD YYYY, h:mm:ss"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default connectToRedux(MyTicketsTableComponent);
