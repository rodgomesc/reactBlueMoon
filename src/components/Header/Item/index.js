import React, { Component } from 'react';
import { Container } from './styles';


class Item extends Component {

    constructor(props) {
        super(props)
        this.text = props.text
    }

    render() {
        return (
            <Container>
                {this.text}
            </Container>
        )
    }
}

export default Item;
