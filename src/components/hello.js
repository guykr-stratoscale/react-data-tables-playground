import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

const rowCount = 1000;

const getData = () => {
  const res = [];

  for (let i = 0; i < rowCount; i++) {
    res.push([`a${i}`, `b${i}`, `c${i}`]);
  };

  return res;
};

const rows = getData();

class MyCell extends React.Component {
  render() {
    const {data, selected, ...props} = this.props;
    return (
      <Cell {...props} className={ selected ? 'selected' : null }>
        {data}
      </Cell>
    );
  }
}

export default class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: [],
    };
  };

  handleClick = (rowIndex) => {
    const copy = this.state.selectedIndex.slice(0);
    const index = copy.indexOf(rowIndex);
    if (index > -1) {
      copy.splice(index, 1);
    } else {
      copy.push(rowIndex);
    };

    this.setState({
      selectedIndex: copy,
    });
  };

  render() {
    return (
      <div>
      <Table
      rowHeight={50}
      rowsCount={rows.length}
      width={600}
      height={5000}
      headerHeight={50}>
      <Column
        header={<Cell>Col 1</Cell>}
        cell={({rowIndex, ...props}) => (
          <MyCell {...props} data={rows[rowIndex][0]} selected={this.state.selectedIndex.indexOf(rowIndex) > -1} onClick={() => this.handleClick(rowIndex)}>
          </MyCell>
        )}
        width={200}
      />
      <Column
        header={<Cell>Col 2</Cell>}
        cell={({rowIndex, ...props}) => (
          <MyCell {...props} data={rows[rowIndex][1]} selected={this.state.selectedIndex.indexOf(rowIndex) > -1} onClick={() => this.handleClick(rowIndex)}>
          </MyCell>
        )}
        width={200}
      />
      <Column
        header={<Cell>Col 3</Cell>}
        cell={({rowIndex, ...props}) => (
          <MyCell {...props} data={rows[rowIndex][2]} selected={this.state.selectedIndex.indexOf(rowIndex) > -1} onClick={() => this.handleClick(rowIndex)}>
          </MyCell>
        )}
        width={200}
      />
    </Table>
    </div>
    );
  }
}
