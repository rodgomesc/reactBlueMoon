import React, { Fragment } from 'react';
import {
    Container,
    ToolbarContent,
    ToolbarFooter,
    Logo,
    Wrapper,
    ToggleButton
} from './styles';
import logo from '../../assets/logo.png';

const Toolbar = props => (
    <Fragment>
        <Container>
            <Wrapper>
                <ToolbarContent>
                    <ul>
                        <li>
                            <h3>Mussin Dolor</h3>
                            <a href="/oi">A</a>
                        </li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                </ToolbarContent>
                <Logo>{/* <img src={logo}></img> */}</Logo>
                <ToggleButton>
                    <h4>Menu</h4>
                    <button
                        className="fa fa-bars"
                        onClick={props.drawerClickHandlher}
                    />
                </ToggleButton>
            </Wrapper>
        </Container>

        <ToolbarFooter>
            <h4>
                <strong>Mussum Ipsum</strong> cacilds vidis litro abertis. Não
                sou faixa preta cumpadi, sou preto inteiris,
            </h4>
        </ToolbarFooter>
    </Fragment>
);

export default Toolbar;
