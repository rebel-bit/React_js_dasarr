import React from 'react'
import {Form,Button,Row,Col} from 'react-bootstrap'
const Formulir = ({nama, deskripsi, harga, handleChange, handleSubmit}) => {
return (
<div className="mt-5">
   <Row>
      <Col>
      <h4>Tambahkan data</h4>
      <hr/>
      </Col>
   </Row>
   <Row>
      <Col>
      <Form onSubmit={handleSubmit}> 
         <Form.Group className="mb-3" controlId="nama">
            <Form.Label>Nama buku</Form.Label>
            <Form.Control type="text" name="nama" 
            value={nama}
            onChange={(event) => handleChange(event) } required/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="deskripsi">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control type="text" name="deskripsi" 
            as="textarea"
            value={deskripsi}
            onChange={(event) => handleChange(event) } required/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="harga">
             <Form.Label>Harga buku</Form.Label>
            <Form.Control 
            type="number" 
            name="harga"
            value={harga}
            onChange={(event) => handleChange(event) } required/>
         </Form.Group>

         <Button variant="primary" type="submit">
           Submit
         </Button>
      </Form>
      </Col>
   </Row>
</div>
)
}
export default Formulir