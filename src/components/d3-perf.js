import React from 'react';
import d3 from 'd3';

const duration = 1000;
export default class D3Perf extends React.Component {
  render() {
    return (
      <div ref="wrapper">
      </div>
    );
  }

  update = (props, state) => {
    const circles = d3.select(this.refs.wrapper).select('.chart')
      .selectAll('circle').data(props.items, d => d.id);

    const circlesEnter = circles.enter().append('circle');

    circles.transition().duration(duration)
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', d => d.r);

    circles.exit().remove();
  }

  componentDidMount() {
    const chart = d3.select(this.refs.wrapper).append('svg')
      .attr('height', this.props.size)
      .attr('width', this.props.size)
      .append('g')
      .attr('class', 'chart');

    this.update(this.props);
  }

  componentWillReceiveProps(props, state) {
    this.update(props, state);
  }
};
