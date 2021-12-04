import React from 'react'

export default class Sublifecycle extends React.Component {
    componentWillUnmount() {
        this.props.ubahmakanan("sate")
    }
    
    render() {
        return (
            <div>
                <h2>Compoonent sub life Scycle</h2>
            </div>
        )
    }
}