import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div>
                <p>{this.props.item.name}</p>
                <p>{this.props.item.color}</p>
                <p>${this.props.item.price}</p>
            </div>
        );
    }
}

export default Item;