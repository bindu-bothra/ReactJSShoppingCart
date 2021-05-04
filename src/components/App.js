import React from 'react'
import ProductList from '../containers/ProductList';
import FloatingCart from '../containers/FloatingCart';
import Sort from '../containers/Sort'
import './App.css'
import { connect } from 'react-redux'
import { filterItems,sortItems } from '../actions'
import { Navbar, NavItem, Nav, NavDropdown,MenuItem,Glyphicon } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Filtering from '../containers/Filtering';


const mapDispatchToProps = (dispatch) => {
  return {
    handleSelect:(id)=>{
        console.log(id)
          dispatch(filterItems(id))
    },handleSort:(sortOrder)=>{
      console.log(sortOrder)
      dispatch(sortItems(sortOrder))
    }
  }
}
export let App = ({handleSelect,handleSort}) => {

return(

 <Router> 
<div>
<Navbar collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
    <Link to="/">Infy Shopping</Link> 
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>

  <Navbar.Collapse>
    <Nav>
 
      {/* dropdown for sorting*/}
      <NavDropdown eventKey={4} title="Sort By Price" id="basic-nav-dropdown-sort" onSelect={e=>{
        handleSort(e)
      }}>
      <LinkContainer to='/sort'>
        <MenuItem eventKey={'desc'}>High To Low</MenuItem>
      </LinkContainer>
      <LinkContainer to='/sort'>
        <MenuItem eventKey={'asc'}>Low To High</MenuItem>
      </LinkContainer>
      </NavDropdown>

     {/* dropdown for filtering*/}
      <NavDropdown eventKey={3} title="Filter By Size" id="basic-nav-dropdown-filter" onSelect={e=>{
                        handleSelect(e)
                 }}> 
              
          {/* {
              filterData.map(element=>(<><LinkContainer to="/filter"><MenuItem eventKey={element}>{element}</MenuItem> </LinkContainer></>))
           } */}

        <LinkContainer to='/filter'>
        <MenuItem eventKey={'XS'} >XS</MenuItem>
        </LinkContainer>
        <LinkContainer to='/filter'>
        <MenuItem eventKey={'S'}>S</MenuItem>
        </LinkContainer>
        <LinkContainer to='/filter'>
        <MenuItem eventKey={'M'}>M</MenuItem>
        </LinkContainer>
        <LinkContainer to='/filter'>
        <MenuItem eventKey={'L'}>L</MenuItem>
        </LinkContainer>
        <LinkContainer to='/filter'>
        <MenuItem eventKey={'XL'}>XL</MenuItem>
        </LinkContainer>
        <LinkContainer to='/filter'>
        <MenuItem eventKey={'XXL'}>XXL</MenuItem>
        </LinkContainer>
      </NavDropdown>

    </Nav>
    <Nav pullRight>
  
    <LinkContainer to="/cart">

      <NavItem eventKey={1}>
      <Glyphicon glyph="shopping-cart" />  Cart
        </NavItem>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<div className={"display-container"}>
        <Route exact path = "/" component = {ProductList} /> 
         <Route path = "/filter" component = {Filtering} />  
         <Route path = "/sort" component = {Sort} />  
         <Route path = "/cart" component = {FloatingCart} /> 
         </div>
 </div>
</Router>  

)
}

// App = connect(null,
//   mapDispatchToProps
// )(App)
// export { App };
export default connect(null,
    mapDispatchToProps
  )(App)