import React from 'react'

const makanans = [
    {
       nama: 'soto',
      harga: 11000
    },
    {
       nama: 'Bakso',
      harga: 12000
    },
    {
       nama: 'Mie ayam',
      harga: 13000
    },
     {
       nama: 'Nasi goreng',
      harga: 14000
    }

]

const total_bayar = makanans.reduce((total_harga, makanan) =>  total_harga+makanan.harga, 0);

const Map = () => {
    return (
        <div>

        <ul>
            {makanans.map((makanan, index) =>(
                <li>{index +1}. {makanan.nama} - {makanan.harga}</li>  
            ))}
        </ul>
            <h2>Maping filter</h2>
             <ul>
                {makanans.filter((makanan) => makanan.harga > 11000 ).map((makanan, index) => (
                    <p>{ index + 1} {makanan.nama} = Rp  {makanan.harga}</p>
                ))}
            </ul>
            <h3>Total bayar: {total_bayar}</h3> 
        </div>
    )
}

export default Map