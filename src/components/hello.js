import React from 'react';
import Griddle from 'griddle-react';
import {fromJS, Set} from 'immutable';

const rowCount = 1000;

const getData = () => {
  const res = [];

  for (let i = 0; i < rowCount; i++) {
    res.push({
      id: i,
      colA: `a-${i}`,
      colB: `b-${i}`,
      colC: `c-${i}`,
    });
  };

  return res;
};

const rows = getData();

export default class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIds: Set(),
    };
  };

  handleClick = () => {
    const _this = this;

    return function() {
      let newState;

      // here this is the row
      const clickedId = this.data.id;
      if (_this.state.selectedIds.contains(clickedId)) {
        newState = _this.state.selectedIds.delete(clickedId);
      } else {
        newState = _this.state.selectedIds.add(clickedId);
      }

      _this.setState({
        selectedIds: newState,
      });

    };
  };

  render() {
    const rowMetadata = {
      bodyCssClassName: (rowData) => {
        if (this.state.selectedIds.contains(rowData.id)) {
          return 'selected';
        }

        return 'default-row';
      },
    };
    return (
      <div>
        <Griddle results={rows} onRowClick={this.handleClick()} enableInfiniteScroll={true} bodyHeight={400} useFixedHeader={true} rowHeight={20} rowMetadata={rowMetadata}/>
      </div>
    );
  }
}
