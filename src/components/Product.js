import React from 'react'
import './App.css';
import {FormGroup,ControlLabel,FormControl,Form,Col,Button,Row } from 'react-bootstrap'
let Product =({data,onClickBuy})=>{
let size={value:""}
let quantity={value:1}
        return (
            <div className={"display"}>
            
                
            <Form horizantal="true" id="BuyForm" onSubmit={e=>{
                e.preventDefault()
                onClickBuy(data.id,size.value,data.price,quantity.value,data.isFreeShipping)
                quantity.value=1
            }} >

                <h3>{data.title}</h3><div>&nbsp;</div>
               <FormGroup>
               <Row>
                {data.description?<div><Col componentClass={ControlLabel} xs={4} sm={4}>Description: </Col>
                {data.description}</div> :<div>&nbsp;</div>}
                </Row>
               </FormGroup>

               <FormGroup>
               <Row>
                {data.style?<div><Col componentClass={ControlLabel} xs={4} sm={4}>Style: </Col>
                {data.style}</div> :<div>&nbsp;</div>}
                </Row>
               </FormGroup>

               <FormGroup>
               <Row>
                <Col componentClass={ControlLabel} xs={4} sm={4}>No. of installments: </Col>
                {data.installments} 
               </Row>
               </FormGroup>

                <FormGroup>
                    <Row>
                    <Col componentClass={ControlLabel} xs={4} sm={4}>Quantity: </Col>
                    <Col xs={4} sm={4}><FormControl type="number" id="quantity" name="quantity" defaultValue={1} min={1} inputRef={node=>{quantity = node}}></FormControl></Col>
                    </Row>
                </FormGroup>

                <FormGroup>
                <Row>
                    <Col componentClass={ControlLabel} xs={4} sm={4}>Size: </Col>
                    <Col xs={4} sm={4}><FormControl componentClass="select" id="size" name="size" value={size.value} placeholder="select the size"  inputRef={node => {
                        size = node
                        }} > 
                        {data.availableSizes.map(size => 
                        <option key={size} value={size}>{size}</option>)
                        }</FormControl>
                    </Col>
                    </Row>
                </FormGroup>

                
               
                <FormGroup>
                <Row>
                    <Col xs={4} sm={4}>
                    <Button  type="submit" name="price" value={data.price}>Buy For {data.currencyFormat}{data.price}</Button >
                      </Col>
                      </Row>
                </FormGroup>
                {/* <div>{data.installments}</div>
                <div>{data.isFreeShipping}</div> */}
                <FormGroup>
               <Row>
                {data.isFreeShipping?<Col componentClass={ControlLabel} xs={8} sm={8} style={{color:"blue"}}>&#10004;Free Shipping Available </Col>
                 :<Col  componentClass={ControlLabel}  xs={8} sm={8}>Shipping Charges $1 </Col>}
                </Row>
               </FormGroup>
          </Form>
          
             </div> 
                 
        );
}



export default Product