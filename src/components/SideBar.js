import React, { Component } from 'react'
import Logo from '../img/svg/Logo';

export default class SideBar extends Component {
    constructor(props) {
        super(props)

    }

    CloseSideBar(){
        this.props.close();
    }

    render() {
        return (
            <React.Fragment>
                <div className={(this.props.open ? ' open ' : ' ') + ' sidebar '} id="side">
                    <div className="content">
                        <div className="logo-side">
                            <Logo />
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    Sobre
                            </li>
                                <li>
                                    Contato
                            </li>

                            </ul>
                        </nav>
                        <div className="social">
                            <ul>
                                <li>
                                    <img width="35px" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-512.png" />
                                </li>
                                <li>
                                    <img src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/youtube_online_social_media_tube-512.png" width="35px" />
                                </li>
                                <li>
                                    <img src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-512.png" width="35px" />
                                </li>
                                <li>
                                    <img width="35px" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-512.png" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={(this.props.open ? ' db ': ' dn ') + 'close-side'} onClick={this.CloseSideBar.bind(this)}></div>
            </React.Fragment>
        )
    }
}
