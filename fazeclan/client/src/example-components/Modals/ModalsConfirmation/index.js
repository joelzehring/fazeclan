import React, { Fragment, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Dialog, Button } from '@material-ui/core';

const LivePreviewExample = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);

  const toggle1 = () => setModal1(!modal1);
  const toggle2 = () => setModal2(!modal2);
  const toggle3 = () => setModal3(!modal3);
  const toggle4 = () => setModal4(!modal4);

  return (
    <Fragment>
      <Button onClick={toggle1} color="primary" className="m-2">
        Success confirm modal
      </Button>
      <Dialog open={modal1} onClose={toggle1}>
        <div className="text-center p-5">
          <div className="avatar-icon-wrapper rounded-circle m-0">
            <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-success text-success m-0 d-130">
              <FontAwesomeIcon
                icon={['far', 'lightbulb']}
                className="d-flex align-self-center display-3"
              />
            </div>
          </div>
          <h4 className="font-weight-bold mt-4">Do you want to create this?</h4>
          <p className="mb-0 font-size-lg text-muted">
            You can later review your options.
          </p>
          <div className="pt-4">
            <Button
              onClick={toggle1}
              variant="outlined"
              color="secondary"
              className="mx-1">
              <span className="btn-wrapper--label">Cancel</span>
            </Button>
            <Button
              onClick={toggle1}
              color="primary"
              variant="contained"
              className="mx-1">
              <span className="btn-wrapper--label">Create</span>
            </Button>
          </div>
        </div>
      </Dialog>

      <Button onClick={toggle2} color="primary" className="m-2">
        Error confirm modal
      </Button>
      <Dialog open={modal2} onClose={toggle2}>
        <div className="text-center p-5">
          <div className="avatar-icon-wrapper rounded-circle m-0">
            <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-danger text-danger m-0 d-130">
              <FontAwesomeIcon
                icon={['fas', 'times']}
                className="d-flex align-self-center display-3"
              />
            </div>
          </div>
          <h4 className="font-weight-bold mt-4">
            Are you sure you want to delete this entry?
          </h4>
          <p className="mb-0 font-size-lg text-muted">
            You cannot undo this operation.
          </p>
          <div className="pt-4">
            <Button
              onClick={toggle2}
              variant="outlined"
              color="secondary"
              className="mx-1">
              <span className="btn-wrapper--label">Cancel</span>
            </Button>
            <Button
              onClick={toggle2}
              color="primary"
              variant="contained"
              className="mx-1">
              <span className="btn-wrapper--label">Delete</span>
            </Button>
          </div>
        </div>
      </Dialog>

      <Button onClick={toggle3} color="primary" className="m-2">
        Warning confirm modal
      </Button>
      <Dialog open={modal3} onClose={toggle3}>
        <div className="text-center p-5">
          <div className="avatar-icon-wrapper rounded-circle m-0">
            <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-warning text-white m-0 d-130">
              <FontAwesomeIcon
                icon={['far', 'dot-circle']}
                className="d-flex align-self-center display-3"
              />
            </div>
          </div>
          <div className="font-weight-bold font-size-lg mt-4">
            Double checking you options?
          </div>
          <p className="mb-0 mt-2 text-muted">
            Use the helper classes to style these paragraphs!
          </p>
          <div className="pt-4">
            <Button
              onClick={toggle3}
              variant="outlined"
              color="primary"
              className="mx-1">
              <span className="btn-wrapper--label">Cancel</span>
            </Button>
            <Button
              onClick={toggle3}
              variant="outlined"
              color="primary"
              className="mx-1">
              <span className="btn-wrapper--label">Yes, do it</span>
            </Button>
          </div>
        </div>
      </Dialog>

      <Button onClick={toggle4} color="primary" className="m-2">
        Info confirm modal
      </Button>
      <Dialog open={modal4} onClose={toggle4}>
        <div className="text-center p-5">
          <div className="avatar-icon-wrapper rounded-circle m-0">
            <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-first text-first m-0 d-130">
              <FontAwesomeIcon
                icon={['far', 'keyboard']}
                className="d-flex align-self-center display-3"
              />
            </div>
          </div>
          <h4 className="font-weight-bold mt-4">Are you sure?</h4>
          <p className="mb-0 text-black-50">You can change your mind later.</p>
          <div className="pt-4">
            <Button
              onClick={toggle4}
              variant="outlined"
              color="secondary"
              className="text-danger mx-1">
              <span className="btn-wrapper--label">Cancel</span>
            </Button>
            <Button
              onClick={toggle4}
              color="primary"
              variant="contained"
              className="mx-1">
              <span className="btn-wrapper--label">Add</span>
            </Button>
          </div>
        </div>
      </Dialog>
    </Fragment>
  );
};

export default LivePreviewExample;
