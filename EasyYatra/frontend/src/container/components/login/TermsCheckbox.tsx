import React from 'react';
import { TermsCheckboxProps } from '../../../interfaces/login/LoginProps';

const TermsCheckbox: React.FC<TermsCheckboxProps> = ({ termsChecked, handleTermsChange }) => {
  return (
    <div className="text-xs text-gray-500 mt-4 text-center">
      <input
        type="checkbox"
        id="terms-Checkbox"
        checked={termsChecked}
        onChange={handleTermsChange}
      />
       I agree to abide by EasyYatra's <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
    </div>
  );
};

export default TermsCheckbox;
