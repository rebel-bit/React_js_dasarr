import React from 'react'

const motores = [
    {
       nama: 'Kawasaki Ninja',
       qty: '10',
      harga: 13000
    },
    {
       nama: 'Nmax',
       qty: '12',
      harga: 12000
    },
    {
       nama: 'Supra x',
       qty: '13',
      harga: 13000
    },
     {
       nama: 'Vario',
       qty: '15',
      harga: 14000
    },
     {
       nama: 'Scopy',
       qty: '15',
      harga: 15000
    },
    {
       nama: 'aerox',
       qty: '15',
      harga: 16000
    },
    {
       nama: 'Mio ',
       qty: '15',
      harga: 17000
    },
    {
       nama: 'KLx',
       qty: '15',
      harga: 19000
    },
    {
       nama: 'Rxing',
       qty: '15',
      harga: 20000
    },
    {
       nama: 'Megapro',
       qty: '15',
      harga: 15400
    },



]

const total_bayar = motores.reduce((total_harga, motor) =>  total_harga+motor.harga, 0);

const Map = () => {
    return (
        <div>

        <table border="1">
            <tr>
                <th>no</th>
                <th>nama</th>
                <th>qty</th>
                <th>harga</th>
                <td>total harga</td>
            </tr>
            {motores.map((motor, index) =>(
              <tr>
                 <td>{ index + 1}</td>
                 <td>{ motor.nama}</td>
                 <td>{ motor.qty}</td>
                 <td>Rp{ motor.harga}</td>
                 <td>Rp{ motor.qty*motor.harga}</td>
              </tr>
            ))}
            <h2>Maping filter</h2>
             
                {motores.filter((motor) => motor.harga > 11000 ).map((motor, index) => (
                   <tr>
                 <td>{ index + 1}</td>
                 <td>{ motor.nama}</td>
                 <td>{ motor.qty}</td>
                 <td>Rp{ motor.harga}</td>
                 <td>Rp{ motor.qty*motor.harga}</td>
                </tr>
                ))}
                 <h3>Total bayar: {total_bayar}</h3>
            </table>
        </div>
    )
}

export default Map