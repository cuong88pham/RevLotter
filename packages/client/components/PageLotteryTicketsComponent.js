import React from 'react';
import PlayCardComponent from './PlayCardComponent';

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

const LINES = [3, 5, 7, 10, 15, 20, 25];

class PageLotteryTicketsComponent extends React.Component {
  render() {
    const { indexActions = {}, currentLineNumber, ticketsState } = this.props;
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
                        {LINES.map(line => (
                          <span
                            key={line}
                            onClick={() =>
                              indexActions.changeLineNumberAction(line)
                            }
                            className={`add-line ${currentLineNumber === line &&
                              'active-add-line'}`}
                          >
                            {line} lines
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="right text-right">
                      <div className="header-btn-area">
                        <button
                          onClick={this.props.indexActions.actionExample}
                          type="button"
                          id="quick-pick-all"
                        >
                          Quick Pick All
                        </button>
                        <button type="button" id="add-item">
                          <i className="fa fa-plus" />
                        </button>
                        <button type="button" id="delete-item">
                          <i className="fa fa-trash" />
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
                        />
                      ))}
                    </div>
                  </div>
                  {/* single-body end */}
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
