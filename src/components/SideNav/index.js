import React from 'react';
import { Menu, Item, SubItem} from './styles';

const SideMenu = () => (
    <Menu>
        <h4>Navigation</h4>
            <Item>
                <a href="/">
                    Home
                    <div>&nbsp;</div>
                </a>
                <SubItem>
                    <li>subitem_1</li>
                    <li>subitem_2</li>
                    <li>subitem_3</li>
                </SubItem>
            </Item>
            <Item>
                <a href="/">
                    Blog
                    <div>&nbsp;</div>
                </a>
            </Item>
            <Item>
                <a href="/">
                    News
                    <div>&nbsp;</div>
                </a>
            </Item>
            <Item>
                <a href="/">
                    Calendar
                    <div>&nbsp;</div>
                </a>
            </Item>


    </Menu >
);

export default SideMenu;
