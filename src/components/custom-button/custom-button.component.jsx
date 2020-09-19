import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const customButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default customButton;
