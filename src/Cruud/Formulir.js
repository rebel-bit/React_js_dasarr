import React from 'react'
import {Form,Button,Row,Col} from 'react-bootstrap'
const Formulir = ({nama, deskripsi, harga, qty, handleChange, handleSubmit, id}) => {
return (
<div className="mt-5">
   <Row>
      <Col>
      <div className="shadow-lg p-3 mb-5 bg-black rounded">
      <h4 id="l">{id ? "edit data": "TambahData"}</h4>
      </div>
      <hr id="l"/>
      </Col>
   </Row>
   <Row>
      <Col>
      <Form onSubmit={handleSubmit}> 
         <Form.Group className="mb-3" controlId="nama">
            <Form.Label id="l">nama motor</Form.Label>
            <Form.Control type="text" name="nama" 
            value={nama}
            onChange={(event) => handleChange(event) } required/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="deskripsi">
            <Form.Label id="l">Deskripsi</Form.Label>
            <Form.Control type="text" name="deskripsi" 
            as="textarea"
            value={deskripsi}
            onChange={(event) => handleChange(event) } required/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="harga">
             <Form.Label id="l">harga</Form.Label>
            <Form.Control 
            type="number" 
            name="harga"
            value={harga}
            onChange={(event) => handleChange(event) } required/>
         </Form.Group>

         <Form.Group className="mb-3" controlId="qty">
             <Form.Label id="l">qty</Form.Label>
            <Form.Control 
            type="number" 
            name="qty"
            value={qty}
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