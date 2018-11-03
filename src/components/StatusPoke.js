import React, { Component } from 'react'

export default class StatusPoke extends Component {
    render() {
        console.log(this)

        const status = this.props.status.map(status => {
            return (
                <li key={status.stat.name}>
                    <h3 className={(status.stat.name) + ' status-name '}>
                        {
                            status.stat.name
                        }
                    </h3>
                    <span className="power">
                        {
                            status.base_stat
                        }
                    </span>
                </li>
            );
        })

        return (
            <React.Fragment>
                <div className="poke-status">
                    <ul className="status-poke-details">
                        {
                            status
                        }
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}
