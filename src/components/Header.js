import React, { Component } from 'react'
import Logo from '../img/svg/Logo';
import IconMenu from '../img/svg/IconMenu';
import SearchIcon from '../img/svg/SearchIcon'

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }

    }

    ChangeStateOpen(){
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <React.Fragment>
                <header className="header" id="app-poke">
                    <div className="content">
                        <IconMenu />
                        <Logo />
                        <div className="icon-search-btn" onClick={this.ChangeStateOpen.bind(this)}>
                            <SearchIcon />
                        </div>
                    </div>
                </header>
                <div className={(this.state.open ? 'open ' : ' ' ) + ' search'}>
                    <div className="content">
                        <input type="text" placeholder="bulbasaur..." autofocus/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
