import React from 'react';
import DataGrid from 'react-datagrid';
import {fromJS, Set} from 'immutable';

const rowCount = 1000;
const columns = [
  {
    name: 'id',
    title: '#',
    width: 50,
  },
  {
    name: 'colA',
    title: 'Column A',
    width: 100,
  },
  {
    name: 'colB',
    title: 'Column B',
    width: 100,
  },
  {
    name: 'colC',
    title: 'Column C',
    width: 100,
  },
];

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
      selectedIds: fromJS({}),
    };
  };

  handleClick = (newSelection) => {
    this.setState({
      selectedIds: fromJS(newSelection),
    });
  };

  render() {
    debugger
    return (
      <div>
        <DataGrid
          idProperty='id'
          dataSource={rows}
          columns={columns}
          style={{height: 400}}
          selected={this.state.selectedIds.toJS()}
          onSelectionChange={this.handleClick}
        />
      </div>
    );
  }
}
