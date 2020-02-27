import React, { Fragment } from 'react';

export default function HowToPlayComponent() {
  return (
    <Fragment>
      <div className="text-center">
        <img src="/static/images/tickets.png" alt="" className="img-fluid" />
      </div>
      <h1 className="title">THREE STEPS TO JOIN THE GAME</h1>
      <div class="accordion accordion-custom mt-4 mb-4" id="howtoplay">
        <div class="card border-0">
          <div class="card-header p-1" id="headingOne">
            <h2 class="mb-0">
              <button
                class="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong className="pr-2">STEP 1.</strong>
              </button>
            </h2>
          </div>
          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#howtoplay"
          >
            <div class="card-body">
              <h2 className="font-weight-bold">Deposit ETH</h2>
              <p className="ml-0 text-dark">Register account (Free)</p>
              <p className="ml-0 text-dark">Deposit ETH into your wallet</p>
            </div>
          </div>
        </div>
        <div class="card border-0">
          <div class="card-header p-1" id="headingTwo">
            <h2 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong className="pr-2">STEP 2.</strong>
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#howtoplay"
          >
            <div class="card-body">
              <h2 className="font-weight-bold">Buy tickets</h2>
              <p className="ml-0 text-dark">
                Simple select 05 main numbers from 01 to 50, and 01 REVBALL from
                01 to 20. You can win up the Jackpot for matching 06 main
                numbers. The 06 main numbers are NOT compulsory UNORDERED SET
                NUMBERS. Note: In case that a selected number repeats
                constantly, the number will only count for once.
              </p>
              <h2>Ticket price: 0,1 ETH</h2>
            </div>
          </div>
        </div>
        <div class="card border-0">
          <div class="card-header p-1" id="headingThree">
            <h2 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong className="pr-2">STEP 3.</strong>
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#howtoplay"
          >
            <div class="card-body">
              <h2 className="font-weight-bold">Drawing results & time</h2>
              <p className="ml-0 text-dark">
                You can win Jackpot for matching 05 main numbers and 01 REVBALL.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
