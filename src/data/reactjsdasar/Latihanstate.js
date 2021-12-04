

import React from 'react'

export default class Stateprops extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            makanan : 'mobil1,mobil2,mobil3'
        }
    }

    gantiMakanan = (makanan_baru) => {
        this.setState({
            makanan: makanan_baru
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                <button onClick={() => this.gantiMakanan("mobil1,mobil2")}>Mobil</button>
            </div>
        )
    }
}