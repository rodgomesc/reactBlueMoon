import React, { Fragment } from 'react';
import Toolbar from '../../components/Toolbar';
import Header from '../../components/Header';
import GlobalStyle from '../../styles/global';
import SideDrawer from '../../components/SideDrawer';
import SideNav from '../../components/SideNav';
import Carousel from 'nuka-carousel';


export default class Home extends React.Component {
    state = {
        SideDrawerOpen: false
    };

    drawerToggleClickHandlher = () => {
        this.setState(prevState => {
            return { SideDrawerOpen: !prevState.SideDrawerOpen };
        });
    };
    render() {
        return (
            <Fragment>
                <GlobalStyle />
                <Header />
                <Toolbar drawerClickHandlher={this.drawerToggleClickHandlher} />
                <SideDrawer activated={this.state.SideDrawerOpen} />
                <div
                    style={{
                        display: 'flex',
                        height: '300px',

                        margin: '15px 13% 0 13% ',
                    }}
                >
                    <SideNav />
                    <Carousel style={{ background: '#0fff', minWidth: '0' }}>
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />

                    </Carousel>

                </div>
            </Fragment>
        );
    }
}
