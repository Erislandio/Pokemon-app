import React, { Component } from 'react'
import Logo from '../img/svg/Logo';
import IconMenu from '../img/svg/IconMenu';
import SearchIcon from '../img/svg/SearchIcon'
import SideBar from './SideBar';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            sideBar: false
        }

        this.OpenSideBar = this.OpenSideBar.bind(this)

    }

    ChangeStateOpen() {
        this.setState({ open: !this.state.open })
    }

    OpenSideBar() {
        this.setState({ sideBar: !this.state.sideBar })
    }

    render() {
        return (
            <React.Fragment>
                <header className="header" id="app-poke">
                    <div className="content">
                        <div onClick={this.OpenSideBar.bind(this)}>
                            <IconMenu />
                        </div>
                        <Logo />
                        <div className="icon-search-btn" onClick={this.ChangeStateOpen.bind(this)}>
                            <SearchIcon />
                        </div>
                    </div>
                </header>
                <div className={(this.state.open ? 'open ' : ' ') + ' search'}>
                    <div className="content">
                        <input type="text" placeholder="bulbasaur..." autoFocus />
                    </div>
                </div>
                <SideBar open={this.state.sideBar} close={this.OpenSideBar}/>
            </React.Fragment>
        )
    }
}
