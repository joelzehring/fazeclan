import React, { Fragment, Component } from 'react';

import { Card } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import InfiniteScroll from 'react-infinite-scroll-component';
import { BarLoader } from 'react-spinners';

export default class LivePreviewExample extends Component {
  state = {
    items: Array.from({ length: 20 }),
    hasMore: true
  };

  fetchMoreData = () => {
    if (this.state.items.length >= 200) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 500);
  };

  render() {
    return (
      <Fragment>
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={
            <div className="d-flex align-items-center justify-content-center py-3">
              <BarLoader color={'var(--primary)'} loading={true} />
            </div>
          }
          height={380}
          endMessage={
            <div className="mb-2 mr-3">
              <MuiAlert severity="success">
                This is th end of the list!
              </MuiAlert>
            </div>
          }>
          {this.state.items.map((i, index) => (
            <Card className="card-box py-2 px-5 mb-2 mr-3" key={index}>
              List item: #{index}
            </Card>
          ))}
        </InfiniteScroll>
      </Fragment>
    );
  }
}
