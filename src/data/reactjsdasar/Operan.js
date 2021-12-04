import React from 'react'

export default class Operan extends React.Component {
    render() {
        return (
            <div>
                <h2>Operan State yang menjdi props : {this.props.makanan}</h2>  
            </div>
        )
    }
}