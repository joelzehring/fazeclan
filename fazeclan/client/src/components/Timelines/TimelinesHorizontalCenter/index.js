import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '@material-ui/core';

import people2 from '../../../assets/images/stock-photos/people-2.jpg';
import people3 from '../../../assets/images/stock-photos/people-3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="pt-3 pb-1">
        <div className="timeline-list timeline-list-horizontal">
          <ul className="d-flex justify-content-center flex-wrap">
            <li className="timeline-item timeline-item-icon">
              <div className="timeline-item--content">
                <div className="timeline-item--icon-wrapper bg-danger text-white">
                  <FontAwesomeIcon icon={['far', 'gem']} />
                </div>
                <h4 className="timeline-item--label mb-2 font-weight-bold">
                  Lunch with investors
                </h4>
                <p>
                  Mosaic, the first graphical browser, is introduced to the
                  average consumer.
                </p>
              </div>
            </li>
            <li className="timeline-item timeline-item-icon">
              <div className="timeline-item--content">
                <div className="timeline-item--icon-wrapper bg-success text-white">
                  <FontAwesomeIcon icon={['far', 'keyboard']} />
                </div>
                <h4 className="timeline-item--label mb-2 font-weight-bold">
                  Create new accounts
                </h4>
                <p>MySpace becomes the most popular social network.</p>
                <div className="mt-3">
                  <a href="#/" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img-fluid rounded mr-3 shadow-sm"
                      src={people3}
                      width="70"
                    />
                  </a>
                  <a href="#/" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img-fluid rounded shadow-sm"
                      src={people2}
                      width="70"
                    />
                  </a>
                </div>
              </div>
            </li>
            <li className="timeline-item timeline-item-icon">
              <div className="timeline-item--content">
                <div className="timeline-item--icon-wrapper bg-midnight-bloom text-white">
                  <FontAwesomeIcon icon={['far', 'bell']} />
                </div>
                <h4 className="timeline-item--label mb-2 font-weight-bold">
                  Lunch with investors
                </h4>
                <p>
                  Mosaic, the first graphical browser, is introduced to the
                  average consumer.
                </p>
                <div className="mt-2">
                  <Button size="small" variant="contained" color="primary">
                    Submit Report
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
