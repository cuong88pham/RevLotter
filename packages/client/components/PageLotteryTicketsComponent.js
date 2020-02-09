import React from 'react';
import PlayCardComponent from './PlayCardComponent';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as indexActions from '../stores/initState';

const PlayCards = ({ amount }) => {
  let playCards = [];
  for (let i = 0; i < amount; i++)
    playCards.push(<PlayCardComponent key={i} />);

  return playCards;
};

const connectToRedux = connect(
  state => ({
    ...state
  }),
  distpatch => ({
    indexActions: bindActionCreators(indexActions, distpatch)
  })
);

class PageLotteryTicketsComponent extends React.Component {
  render() {
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
                        <span className="add-line active-add-line">
                          3 lines
                        </span>
                        <span className="add-line">5 lines</span>
                        <span className="add-line">7 lines</span>
                        <span className="add-line">10 lines</span>
                        <span className="add-line">15 lines</span>
                        <span className="add-line">20 lines</span>
                        <span className="add-line">25 lines</span>
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
                    <div className="single-body-inner d-flex">
                      <PlayCards amount={3} />
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
