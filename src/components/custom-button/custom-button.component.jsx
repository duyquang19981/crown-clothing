import React from 'react';

import { CustombuttonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <CustombuttonContainer {...props}>{children}</CustombuttonContainer>
);

export default CustomButton;
