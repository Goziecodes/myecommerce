import React from 'react' ;
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {signOutStart} from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {HeaderContainer,LogoContainer,OptionLink,OptionsContainer} from './header.styles';


const Header = ({currentUser, hidden, signOutStart}) => (
    

    <HeaderContainer >
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>

        <OptionsContainer>
        
            <OptionLink className="option" to='/shop'>
                Shop
            </OptionLink>

            <OptionLink className="option" to='/contact'>
                Contact 
            </OptionLink>

            <CartIcon />
        
            {
               
                currentUser ?
                <OptionLink as='div' className='option' onClick={signOutStart}>SIGN OUT</OptionLink>
                // <OptionLink as='div' className='option' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                :
            <OptionLink className="option" to='/signin'>
                SIGN IN
            </OptionLink>
            }

        </OptionsContainer>
        
            {
                hidden ? null :  <CartDropdown /> 
            }

    </HeaderContainer>
) 



// const mapStateToProps = (state) => ({
//     currentUser: state.user.currentUser
// });

// advanced destructuring, to destructure nested elements
// const mapStateToProps = ({user: {currentUser}, cart: {hidden}  }) =>({
//     currentUser,
//     hidden
// })

// i used reselects createstructredSelector to pass in multiple selectors, instead of passing state each time, the createstructed reselect passes in the top level redux state for us 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default Header;