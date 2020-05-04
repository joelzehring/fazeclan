import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Tooltip, Divider } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="heading-3 pt-3">With Fontawesome</div>
      <Button variant="outlined" color="inherit" className="text-facebook m-2">
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon
            icon={['fab', 'facebook']}
            className="font-size-lg"
          />
        </span>
        <span className="btn-wrapper--label">Facebook</span>
      </Button>
      <Button variant="outlined" color="inherit" className="text-twitter m-2">
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon icon={['fab', 'twitter']} className="font-size-lg" />
        </span>
        <span className="btn-wrapper--label">Twitter</span>
      </Button>
      <Button variant="outlined" color="inherit" className="text-google m-2">
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon icon={['fab', 'google']} className="font-size-lg" />
        </span>
        <span className="btn-wrapper--label">Google</span>
      </Button>
      <Button variant="outlined" color="inherit" className="text-instagram m-2">
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon
            icon={['fab', 'instagram']}
            className="font-size-lg"
          />
        </span>
        <span className="btn-wrapper--label">Instagram</span>
      </Button>
      <Button variant="outlined" color="inherit" className="text-pinterest m-2">
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon
            icon={['fab', 'pinterest']}
            className="font-size-lg"
          />
        </span>
        <span className="btn-wrapper--label">Pinterest</span>
      </Button>
      <Button variant="outlined" color="inherit" className="text-youtube m-2">
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon icon={['fab', 'youtube']} className="font-size-lg" />
        </span>
        <span className="btn-wrapper--label">Youtube</span>
      </Button>
      <Button variant="outlined" color="inherit" className="text-slack m-2">
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon icon={['fab', 'slack']} className="font-size-lg" />
        </span>
        <span className="btn-wrapper--label">Slack</span>
      </Button>
      <Button variant="outlined" color="inherit" className="text-dribbble m-2">
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon
            icon={['fab', 'dribbble']}
            className="font-size-lg"
          />
        </span>
        <span className="btn-wrapper--label">Dribbble</span>
      </Button>
      <Button variant="outlined" color="inherit" className="text-github m-2">
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon icon={['fab', 'github']} className="font-size-lg" />
        </span>
        <span className="btn-wrapper--label">Github</span>
      </Button>

      <Divider className="my-3" />

      <div className="d-flex align-items-center flex-wrap">
        <Tooltip arrow title="Facebook">
          <Button
            variant="outlined"
            color="inherit"
            className="text-facebook d-60 p-0 m-2">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon
                icon={['fab', 'facebook']}
                className="font-size-lg"
              />
            </span>
          </Button>
        </Tooltip>
        <Tooltip arrow title="Twitter">
          <Button
            variant="outlined"
            color="inherit"
            className="text-twitter d-60 p-0 m-2">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon
                icon={['fab', 'twitter']}
                className="font-size-lg"
              />
            </span>
          </Button>
        </Tooltip>
        <Tooltip arrow title="Google">
          <Button
            variant="outlined"
            color="inherit"
            className="text-google d-60 p-0 m-2">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon
                icon={['fab', 'google']}
                className="font-size-lg"
              />
            </span>
          </Button>
        </Tooltip>
        <Tooltip arrow title="Instagram">
          <Button
            variant="outlined"
            color="inherit"
            className="text-instagram d-60 p-0 m-2">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon
                icon={['fab', 'instagram']}
                className="font-size-lg"
              />
            </span>
          </Button>
        </Tooltip>
        <Tooltip arrow title="Pinterest">
          <Button
            variant="outlined"
            color="inherit"
            className="text-pinterest d-60 p-0 m-2">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon
                icon={['fab', 'pinterest']}
                className="font-size-lg"
              />
            </span>
          </Button>
        </Tooltip>
        <Tooltip arrow title="Youtube">
          <Button
            variant="outlined"
            color="inherit"
            className="text-youtube d-60 p-0 m-2">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon
                icon={['fab', 'youtube']}
                className="font-size-lg"
              />
            </span>
          </Button>
        </Tooltip>
        <Tooltip arrow title="Slack">
          <Button
            variant="outlined"
            color="inherit"
            className="text-slack d-60 p-0 m-2">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon
                icon={['fab', 'slack']}
                className="font-size-lg"
              />
            </span>
          </Button>
        </Tooltip>
        <Tooltip arrow title="Dribbble">
          <Button
            variant="outlined"
            color="inherit"
            className="text-dribbble d-60 p-0 m-2">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon
                icon={['fab', 'dribbble']}
                className="font-size-lg"
              />
            </span>
          </Button>
        </Tooltip>
        <Tooltip arrow title="Github">
          <Button
            variant="outlined"
            color="inherit"
            className="text-github d-60 p-0 m-2">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon
                icon={['fab', 'github']}
                className="font-size-lg"
              />
            </span>
          </Button>
        </Tooltip>
      </div>
    </Fragment>
  );
}
