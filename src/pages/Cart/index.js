import React, { useState } from "react";
import { Container, ProductTable, Total } from './styles';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { connect } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';



function Cart({cart, dispatch}){

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
               <tr key={product.id}>
               <td>
                 <img src={product.image}
                 alt={product.title}/>
               </td>
               <td>
              <strong>{product.title}</strong>
              <strong>{product.priceFormatted}</strong>
               </td>
               <td>
                 <div>
                 <button type="button" >
                   <MdRemoveCircleOutline size={20} color="#7159c1"  />
                 </button>
                 <input type="number" readOnly value="" />
                 <button type="button">
                   <MdAddCircleOutline size={20} color="#7159c1"/>
                 </button>
                 </div>
               </td>

               <td>
               <strong>{product.subtotal}</strong>
                 </td>
                 <td>
                 <button type="button" >
                   <MdDelete size={20} color="#7159c1" onClick={()=> dispatch(CartActions.removeFromCart(product.id)) } />
                 </button>
               </td>
             </tr>

          ))}

        </tbody>

      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>Total</span>
          <strong></strong>

        </Total>
      </footer>
    </Container>
  );

}

const mapStateToProps = state => ({
  cart: state.cart,
 })


export default connect(mapStateToProps)(Cart)
