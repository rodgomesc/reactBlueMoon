import React from 'react';
import { Container, Input, PhoneInfo } from './styles.js';

const SideDrawer = (props) => {
    return (
    <Container activated={props.activated}>
        <Input placeholder="&#xf002;  search..." />
        <PhoneInfo>
            <strong> Talk to us</strong>
            <a href="tel:00000-00">0000-000</a>
        </PhoneInfo>

        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Blog</a>
                </li>
            </ul>
        </nav>
    </Container>
)};

export default SideDrawer;
