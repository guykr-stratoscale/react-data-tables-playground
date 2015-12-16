import React from 'react';
import { FlexTable, FlexColumn } from 'react-virtualized';
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
const initialState = Set();

export default class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedRows: initialState,
    };
  };

  handleClick = (rowIndex, rowData) => {
    this.setState({
      selectedRows: this.state.selectedRows.withMutations(state => {
        if (state.contains(rowIndex)) {
          state.delete(rowIndex);
        } else {
          state.add(rowIndex);
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <FlexTable
          width={300}
          height={600}
          headerHeight={20}
          rowHeight={30}
          rowsCount={rows.length}
          rowGetter={index => rows[index]}
          rowClassName={rowIndex => this.state.selectedRows.contains(rowIndex) ? 'selected' : null }
          onRowClick={this.handleClick}
        >
          <FlexColumn
            label='ID'
            dataKey='id'
            width={100}
          />
          <FlexColumn
            width={200}
            label='Col A'
            dataKey='colA'
          />
          <FlexColumn
            width={200}
            label='Col B'
            dataKey='colB'
          />
          <FlexColumn
            width={200}
            label='Col C'
            dataKey='colC'
          />
        </FlexTable>
      </div>
    );
  }
}
