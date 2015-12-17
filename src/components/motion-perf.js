import React from 'react';
import {Motion, spring} from 'react-motion';

export default class MotionPerf extends React.Component {
  render() {
    return (
      <div>
        <svg height={this.props.size} width={this.props.size}>
        {this.props.items.map((item) => {
          const style = {
            x: spring(item.x),
            y: spring(item.y),
            r: spring(item.r),
          };

          return (
            <Motion key={item.id} defaultStyle={item} style={style}>
            {(data) => {
              return (
                <circle key={data.id} cx={data.x} cy={data.y} r={data.r} />
              );
            }}
            </Motion>
          );
        })}
        </svg>
      </div>
    );
  }
};
