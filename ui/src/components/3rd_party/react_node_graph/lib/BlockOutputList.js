import React from 'react';
import PropTypes from 'prop-types';
import BlockOutputListItem from './BlockOutputListItem';


export default class BlockOutputList extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    onStartConnector: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    resources_dict: PropTypes.object.isRequired,
  }

  onMouseDown(i) {
    this.props.onStartConnector(i);
  }

  onClick(i) {
    this.props.onClick(i);
  }

  render() {
    let i = 0;

    return (
      <div className="nodeOutputWrapper">
          <ul className="nodeOutputList">
          {this.props.items.map((item) => {
            return (
              <BlockOutputListItem
                onMouseDown={(idx) => this.onMouseDown(idx)}
                onClick={(idx) => this.onClick(idx)}
                key={i}
                index={i++}
                item={item}
                resources_dict={this.props.resources_dict}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
