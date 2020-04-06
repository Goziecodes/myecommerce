import React from 'react';
import CustomButon from '../custom-button/custom-button.component';
import './card-dropdown.style.scss';


const CartDropdown  = () =>(
    <div className="cart-dropdown">
        <div className="cart-items">
            <CustomButon>GO TO CHECKOUT</CustomButon>
        </div>
    </div>
);

export default CartDropdown;



