import React from 'react';
import VictoryPerf from './victory-perf';
import D3Perf from './d3-perf';
import MotionPerf from './motion-perf';
import Button from 'react-toolbox/lib/button'
import Input from 'react-toolbox/lib/input';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

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

  handleCountChange = (val) => {
    this.setState({
      itemCount: val,
      items: this.getData(val),
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
      <div style={{marginBottom: 20}}>
        <Input label='Item Count' type='number' value={this.state.itemCount} onChange={this.handleCountChange} />
        <Button icon='motorcycle' onClick={this.handleClick} label={"Make'em Move!"} raised primary />
        <div style={{marginTop: 10}}>
        <div style={{marginBottom: 10}}>Choose Tech</div>
        <Button onClick={this.chooseVelocity} label={'Velocity'} raised accent={this.state.tech == 'velocity'} />
        <Button onClick={this.chooseD3} label={'D3'} raised accent={this.state.tech == 'd3'} />
        <Button onClick={this.chooseMotion} label={'Motion'} raised accent={this.state.tech == 'motion'} />
        </div>
      </div>
      <Card>
      <center style={{marginBottom: 40, marginTop:40}}>
        {componet}
      </center>
      </Card>

      </div>
    );
  }
};
