// components/SocialButtons.js
import React from 'react';
import LargeButton from '../utils/buttons/LargeButton';
import { LoginButtonsProps } from '../../../interfaces/login/LoginProps';

const LoginButton: React.FC<LoginButtonsProps> = ({ termsChecked }) => {
  return (
  <div className="space-y-3 mb-4">
    <LargeButton
      id="phone-button"
      disabled={!termsChecked}
      onClick={() => console.log('Phone button clicked')}
    >
      Phone
    </LargeButton>
    <LargeButton
      id="google-button"
      disabled={!termsChecked}
      onClick={() => console.log('Google button clicked')}
    >
      Google
    </LargeButton>
  </div>
  );
};
export default LoginButton;