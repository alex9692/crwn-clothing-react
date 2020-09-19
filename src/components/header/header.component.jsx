import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart-selector";
import { selectCurrentUser } from "../../redux/user/user-selector";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinkContainer,
  OptionDivContainer,
} from "./header.styles";

const header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLinkContainer to="/shop">SHOP</OptionLinkContainer>
        <OptionLinkContainer to="/contact">CONTACT</OptionLinkContainer>
        {currentUser ? (
          <OptionDivContainer onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionDivContainer>
        ) : (
          <OptionLinkContainer to="/authenticate">SIGN IN</OptionLinkContainer>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden ? <CartDropdown /> : null}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(header);
