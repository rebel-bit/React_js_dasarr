import React from 'react'
import NavbarComponent from './NavbarComponent'
import Tabel from './Tabel'
import Formulir from './Formulir'

export default class Crud extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            bukus : [],
            nama : "",
            deskripsi: "",
            harga: "",
            qty: "",
            id : "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        this.setState({
            bukus: [
                ...this.state.bukus,
                {
                    id: this.state.bukus.length+1,
                    nama: this.state.nama,
                    deskripsi: this.state.deskripsi,
                    harga: this.state.harga,
                    qty: this.state.qty
                }
            ]
        })
    };
    
   render() {
       //(this.state.bukus);
       return(
           <div>
               <NavbarComponent/>
               <div className="container mt-4">
               <div className="shadow-lg p-3 mb-5 bg-black rounded">
               <Tabel bukus={this.state.bukus}/>
               </div>
               <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
               </div>
           </div>
          
       )
   }
}
