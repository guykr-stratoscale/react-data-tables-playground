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
const initialState = fromJS({});
export default class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIds: initialState,
    };
  };

  handleClick = (newSelection) => {
    this.setState({
      selectedIds: this.state.selectedIds.withMutations(state => {
        Object.keys(newSelection).forEach(key => {
          if (state.has(key)) {
            state.delete(key);
          } else {
            state.set(key, newSelection[key]);
          }
        });
      }),
    });
  };

  render() {
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
