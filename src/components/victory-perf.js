import React from 'react';
import {VictoryAnimation} from 'victory-animation';

export default class VictoryPerf extends React.Component {
  render() {
    return (
      <div>
        <svg height={this.props.size} width={this.props.size}>
        {this.props.items.map((item) => {
          return (
            <VictoryAnimation key={item.id} data={item}>
            {(data) => {
              return (
                <circle key={data.id} cx={data.x} cy={data.y} r={data.r} />
              );
            }}
            </VictoryAnimation>
          );
        })}
        </svg>
      </div>
    );
  }
};
