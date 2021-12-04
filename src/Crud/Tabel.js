import React from 'react'; 
import { Table, Row, Col } from 'react-bootstrap' 
 
const Tabel = ({bukus}) => { 
    return ( 
        <div> 
            <Row> 
                <Col> 
                    <h4>List Data</h4> 
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
                                <th id="l">Aksi</th> 
                            </tr> 
                        </thead> 
                        <tbody> 
                        {bukus.map((buku, index) => {
                            return(
                            <tr> 
                                <td id="l">{index + 1}</td> 
                                <td id="l">{buku.nama}</td> 
                                <td id="l">{buku.deskripsi}</td> 
                                <td id="l">{buku.harga}</td> 
                                <td id="l"></td> 
                            </tr> 
                           )
                        })}
                        </tbody> 
                    </Table> 
                </Col> 
            </Row> 
        </div> 
    ) 
} 
 
export default Tabel