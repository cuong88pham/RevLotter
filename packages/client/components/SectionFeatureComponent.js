import React from 'react';

export default function SectionFeatureComponent() {
  return (
    <div id="features" className="flex-split">
      <div className="container-s">
        <div className="flex-intro align-center wow fadeIn">
          <h2>Features</h2>
          <p>
            {' '}
            When you get staright to the point the presentation looks attractive
            on your web pages. Keep it simple and clean always.
          </p>
        </div>
        <div className="flex-inner align-center">
          <div className="f-image wow">
            <img
              className="img-fluid"
              src="/static/images/feature.png"
              alt="Feature"
            />
          </div>
          <div className="f-text">
            <div className="left-content">
              <h2>Transparent.</h2>
              <p>
                {' '}
                When you get staright to the point the presentation looks
                attractive on your web pages.
              </p>
              <a href="#">Know more</a>
            </div>
          </div>
        </div>

        <div className="flex-inner flex-inverted align-center">
          <div className="f-image f-image-inverted">
            <img
              className="img-fluid"
              src="/static/images/feature.png"
              alt="Feature"
            />
          </div>
          <div className="f-text">
            <div className="left-content">
              <h2>Mobile Analytics.</h2>
              <p>
                {' '}
                When you get staright to the point the presentation looks
                attractive on your web pages.
              </p>
              <a href="#">Know more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
