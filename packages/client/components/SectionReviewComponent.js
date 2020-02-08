import React from 'react';

export default function SectionReviewComponent() {
  return (
    <div id="reviews" className="yd-reviews">
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-12 col-lg-8 offset-lg-2">
            <div className="intro wow fadeIn" data-wow-delay="0.1s">
              <h1>Customers say nice things</h1>
              <p>
                We have very fair pricing policy that would benefit you and us
                at the same time. Get the free plan &amp; if you need more -
                pay.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-8 offset-lg-2 text-center">
            <div
              className="review-cards owl-carousel owl-theme wow fadeInDown"
              data-wow-delay="0.2s"
            >
              <div className="card-single">
                <div className="review-text">
                  <h1>
                    "We have very fair pricing policy that would benefit you and
                    us at the same time. Choose what price you're willing to
                    pay. Get the free plan & if you need more - pay."
                  </h1>
                </div>
                <div className="review-attribution">
                  <div className="review-img">
                    <img
                      className="img-fluid rounded-circle"
                      src="/static/icons/review-1.png"
                      alt="Review"
                    />
                  </div>
                  <i className="ion ion-star"></i>
                  <i className="ion ion-star"></i>
                  <i className="ion ion-star"></i>
                  <i className="ion ion-star"></i>
                  <i className="ion ion-ios-star-half"></i>
                  <h2> Albert Rossi</h2>
                  <h6>Stack Developer</h6>
                  <a href="#">Dropboxes Inc</a>
                </div>
              </div>
              <div className="card-single">
                <div className="review-text">
                  <h1>
                    "We have very fair pricing policy that would benefit you and
                    us at the same time. Choose what price you're willing to
                    pay. Get the free plan & if you need more - pay."
                  </h1>
                </div>
                <div className="review-attribution">
                  <div className="review-img">
                    <img
                      className="img-fluid rounded-circle"
                      src="/static/icons/review-2.png"
                      alt="Review"
                    />
                  </div>
                  <i className="ion ion-star"></i>
                  <i className="ion ion-star"></i>
                  <i className="ion ion-star"></i>
                  <i className="ion ion-star"></i>
                  <i className="ion ion-ios-star-half"></i>
                  <h2> Melissa Vanbergh</h2>
                  <h6>Vice President</h6>
                  <a href="#">Vestor Corp</a>
                </div>
              </div>
              <div className="card-single">
                <div className="review-text">
                  <h1>
                    "We have very fair pricing policy that would benefit you and
                    us at the same time. Choose what price you're willing to
                    pay. Get the free plan & if you need more - pay."
                  </h1>
                </div>
                <div className="review-attribution">
                  <div className="review-img">
                    <img
                      className="img-fluid rounded-circle"
                      src="/static/icons/review-3.png"
                      alt="Review"
                    />
                  </div>
                  <i className="ion ion-star"></i>
                  <i className="ion ion-star"></i>
                  <i className="ion ion-star"></i>
                  <i className="ion ion-star"></i>
                  <i className="ion ion-star"></i>
                  <h2> Joshua Peterson</h2>
                  <h6>Product Developer</h6>
                  <a href="#">Betabet Inc</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
