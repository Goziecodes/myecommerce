import React from 'react';
import {connect} from 'react-redux';
import CustomButon from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import './card-dropdown.style.scss';


const CartDropdown  = ({cartItems}) =>(
    <div className="cart-dropdown">
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
            <CustomButon>GO TO CHECKOUT</CustomButon>
    </div>
);

// const mapStateToProps = ({cart: {cartItems}}) => ({
//     cartItems
// })
const mapStateToProps = (state) => ({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);



