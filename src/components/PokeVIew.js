import React, { Component } from 'react'
import StatusPoke from './StatusPoke';

export default class PokeView extends Component {
    render() {
        console.log(this)

        const hab = this.props.poke[0].habilidades.map(hab => {
            return (
                <li key={hab.ability.name}>{
                    hab.ability.name
                }</li>
            )
        })

        return (
            <div className="poke-view" id="poke-view">
                <div className="content">
                    <div className="poke-image">
                        <img width="240px" src={this.props.poke[0].img.front_default} />
                    </div>
                    <div className="name">
                        <h2>
                            name
                        </h2>
                        <h4 className="name-poke">{this.props.poke[0].name}</h4>
                    </div>
                    <div className="list-hab">
                        <h2 className="hab-title">skills</h2>
                        <ul>
                            {
                                hab
                            }
                        </ul>
                    </div>
                    <div className="status">
                        <h2 className="hab-title status">
                            Status
                        </h2>
                        <StatusPoke status={this.props.poke[0].status}/>
                    </div>
                </div>
            </div>
        )
    }
}
