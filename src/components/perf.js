import React from 'react';
import VictoryPerf from './victory-perf';
import D3Perf from './d3-perf';
import MotionPerf from './motion-perf';

const SIZE = 800;
const MAX_CIRCLE_SIZE = 20;

const getRandom = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

export default class Perf extends React.Component {
  constructor() {
    super();
    this.state = {
      tech: 'velocity',
      itemCount: 1000,
      items: [],
    };
  }

  componentDidMount() {
    this.setState({
      items: this.getData(this.state.itemCount),
    });
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({
      items: this.getData(nextState.itemCount),
    });
  }

  getData = (count) => {
    const res = [];

    for (let i = 0; i < count; i++) {
      res.push({
        id: i,
        x: getRandom(MAX_CIRCLE_SIZE, SIZE - MAX_CIRCLE_SIZE),
        y: getRandom(MAX_CIRCLE_SIZE, SIZE - MAX_CIRCLE_SIZE),
        r: getRandom(1, MAX_CIRCLE_SIZE),
      });
    };

    return res;
  };

  handleClick = () => {
    this.setState({
      items: this.getData(this.state.itemCount),
    });
  }

  chooseD3 = () => {
    this.setState({
      tech: 'd3',
    });
  }

  chooseVelocity = () => {
    this.setState({
      tech: 'velocity',
    });
  }

  chooseMotion = () => {
    this.setState({
      tech: 'motion',
    });
  }

  handleCountChange = (e) => {
    this.setState({
      itemCount: e.target.value,
      items: this.getData(e.target.value),
    });
  }

  render() {
    let componet;
    switch (this.state.tech) {
      case 'velocity':
        componet = <VictoryPerf size={SIZE} items={this.state.items} />;
        break;
      case 'd3':
        componet = <D3Perf size={SIZE} items={this.state.items} />;
        break;
      case 'motion':
        componet = <MotionPerf size={SIZE} items={this.state.items} />;
        break;
    }
    return (
      <div style={{padding: 10}}>
      <h1>{this.state.tech}</h1>
      <div style={{marginBottom: 20}}>
        <label>Item Count</label>
        <input type='number' value={this.state.itemCount} onChange={this.handleCountChange} />
        <button onClick={this.chooseVelocity}>Velocity</button>
        <button onClick={this.chooseD3}>D3</button>
        <button onClick={this.chooseMotion}>Motion</button>
        <div style={{marginTop: 10}}>
          <button onClick={this.handleClick}>move it</button>
        </div>
      </div>
      {componet}
      </div>
    );
  }
};
