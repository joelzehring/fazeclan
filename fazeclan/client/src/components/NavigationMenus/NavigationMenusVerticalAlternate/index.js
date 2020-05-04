import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, List, ListItem, Divider } from '@material-ui/core';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <div className="heading-3 text-center">List menus</div>
          <Card className="card-box m-2">
            <List className="py-0">
              <ListItem button className="align-box-row">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'file-pdf']}
                    className="text-black-50 font-size-xl mr-3"
                  />
                  Adobe_file.pdf
                  <span className="text-info ml-2 badge badge-neutral-info">
                    New
                  </span>
                </div>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="text-primary"
                  />
                </div>
              </ListItem>
              <ListItem button className="align-box-row">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'file-word']}
                    className="text-black-50 font-size-xl mr-3"
                  />
                  Word_file.docx
                </div>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="text-primary"
                  />
                </div>
              </ListItem>
              <ListItem button className="align-box-row">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'file-excel']}
                    className="text-black-50 font-size-xl mr-3"
                  />
                  Excel_doc.csv
                  <span className="text-success ml-2 badge badge-neutral-success">
                    Draft
                  </span>
                </div>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="text-primary"
                  />
                </div>
              </ListItem>
              <ListItem button className="align-box-row">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'file-alt']}
                    className="text-black-50 font-size-xl mr-3"
                  />
                  Archive_docs.zip
                </div>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="text-primary"
                  />
                </div>
              </ListItem>
              <Divider />
              <ListItem
                button
                className="d-flex justify-content-center text-center">
                <FontAwesomeIcon
                  icon={['fas', 'chevron-down']}
                  className="text-muted mr-3"
                />
                <div className="text-primary">
                  Show all files <b>(93)</b>
                </div>
                <FontAwesomeIcon
                  icon={['fas', 'chevron-down']}
                  className="text-muted ml-3"
                />
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="heading-3 text-center">List menus alternate</div>
          <Card className="card-box m-2">
            <List className="py-0">
              <ListItem button className="align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-grow-early text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'bell']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold text-primary d-block">
                      Sales
                    </div>
                    <small className="text-success">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-up']}
                        className="text-success mr-1"
                      />
                      <span>15.4% increase</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </ListItem>
              <Divider />
              <ListItem button className="align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-danger text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'object-group']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold text-primary d-block">
                      Income
                    </div>
                    <small className="text-danger">
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-up']}
                        className="text-danger mr-1"
                      />
                      <span>5.2% decrease</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </ListItem>
              <Divider />
              <ListItem button className="align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-warning text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'chart-bar']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold text-primary d-block">
                      Expenses
                    </div>
                    <small className="text-warning">
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-down']}
                        className="text-warning mr-1"
                      />
                      <span>5.2% down</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="heading-3 text-center mt-4 mt-xl-0">
            List menus integrations
          </div>
          <Card className="card-box m-2">
            <List className="py-0">
              <ListItem button className="align-box-row">
                <div className="align-box-row align-items-start w-100">
                  <div className="mr-3">
                    <div className="bg-love-kiss text-center text-white font-size-xl d-flex align-items-center justify-content-center d-50 rounded-circle">
                      <AddCircleTwoToneIcon />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="font-weight-bold">
                      <small className="text-black-50 d-block mb-1 text-uppercase">
                        New Accounts
                      </small>
                      <span className="font-size-xxl mt-1">586,356</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-success pr-1">15.4%</span>
                      <span className="text-black-50">increase</span>
                    </div>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-lg"
                    />
                  </div>
                </div>
              </ListItem>
              <Divider />
              <ListItem button className="align-box-row">
                <div className="align-box-row align-items-start w-100">
                  <div className="mr-3">
                    <div className="bg-happy-fisher text-center text-white font-size-xl d-flex align-items-center justify-content-center d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'keyboard']} />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="font-weight-bold">
                      <small className="text-black-50 d-block mb-1 text-uppercase">
                        Sales
                      </small>
                      <span className="font-size-xxl mt-1">23,274</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-warning pr-1">7.4%</span>
                      <span className="text-black-50">more sales</span>
                    </div>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-lg"
                    />
                  </div>
                </div>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
