import React, { Component, Fragment } from 'react';
import ParticleContainer from '../ParticleContainer';
//import FontAwesomeIcon from '@fortawesome/react-fontawesome'
//import faBars from '@fortawesome/fontawesome-free-solid/faBars'

import { HeaderContainer, Input } from './styles';

import Item from './Item';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu_class: ''
        };
    }



    render = () => {
        return (
            <Fragment>
                <ParticleContainer />
                <HeaderContainer>
                    <div>
                        <a href="#" className="fa fa-twitter" />
                        <a href="#" className="fa fa-whatsapp" />
                        <a href="#" className="fa fa-facebook-f" />
                    </div>
                    <div>
                        <Item text="Home" />
                        <Item text="Home" />

                        <Item text="Blog" />
                        <Input placeholder="&#xf002;  search..." />
                        {/* <FontAwesomeIcon icon={faBars} className='top-menu-icon' onClick={this.setToggleHeaderClass}/> */}
                    </div>
                </HeaderContainer>
            </Fragment>
        );
    };
}

export default Header;
