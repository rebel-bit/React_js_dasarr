import React from 'react'; 
import { Table, Row, Col } from 'react-bootstrap' 
 
const Tabel = ({bukus, editData, hapusData}) => { 
    return ( 
        <div> 
            <Row> 
                <Col> 
                    <h4 id="l">List Data</h4> 
                    <hr /> 
                </Col> 
            </Row> 
            <Row> 
                <Col> 
                    <Table striped bordered hover variant="dark"> 
                        <thead className="text-center"> 
                            <tr> 
                                <th id="l">No</th> 
                                <th id="l">Nama</th> 
                                <th id="l">Deskripsi</th> 
                                <th id="l">Harga</th> 
                                <th id="l">qty</th>
                                <th id="l">Aksi</th> 
                            </tr> 
                        </thead> 
                        <tbody> 
                        {bukus.map((buku, index) => {
                            return(
                            <tr key={index}> 
                                <td id="l">{index + 1}</td> 
                                <td id="l">{buku.nama}</td> 
                                <td id="l">{buku.deskripsi}</td> 
                                <td id="l">{buku.harga}</td> 
                                <td id="l">{buku.qty}</td> 
                                <td id="l">
                                <button  Style="widt:100px" className="btn btn-warning" onClick={() => editData(buku.id) }> edit Data</button>||
                                <button  Style="widt:100px" className="btn btn-warning" onClick={() => hapusData(buku.id) }>Hapus Data</button>
    
                                </td> 
                             </tr> 
                           );
                        })}
                        </tbody> 
                    </Table> 
                </Col> 
            </Row> 
        </div> 
    ) 
} 
 
export default Tabel