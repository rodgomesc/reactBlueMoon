import React from 'react';
import { Wrapper, Item, SubItem} from './styles';

const SideMenu = () => (
    <Wrapper>
        <h4>Navigation</h4>
            <Item first>
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
                    <SubItem>
                    <li>noticias_1</li>
                    <li>noticias_2</li>
                    <li>noticias_3</li>
                </SubItem>
                </a>
            </Item>
            <Item>
                <a href="/">
                    News
                    <div>&nbsp;</div>
                    <SubItem>
                    <li>noticias_1</li>
                    <li>noticias_2</li>
                    <li>noticias_3</li>
                </SubItem>
                </a>
            </Item>
            <Item>
                <a href="/">
                    Calendar
                    <div>&nbsp;</div>
                    <SubItem>
                    <li>noticias_1</li>
                    <li>noticias_2</li>
                    <li>noticias_3</li>
                </SubItem>
                </a>
            </Item>


    </Wrapper >
);

export default SideMenu;
