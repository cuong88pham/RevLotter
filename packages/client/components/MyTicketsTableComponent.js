import React from 'react';
import CountDown from '../components/common/CountDown';

class MyTicketsTableComponent extends React.Component {
  render() {
    const { tickets = [], t } = this.props;
    return (
      <table className="table table-background table-hover">
        <thead>
          <tr>
            <th scope="col">{t('my_account.bought_at')}</th>
            <th scope="col">{t('my_account.balls_draw')}</th>
            <th scope="col">{t('my_account.next_draw')}</th>
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

export default MyTicketsTableComponent;
