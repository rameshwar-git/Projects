import React, {useState} from 'react';
import LoginButtons from '../../container/components/login/LoginButton';  
import TermsCheckbox from '../../container/components/login/TermsCheckbox';
import backgroundImage from '../../res/images/red-light-round-podium-black-background-mock-up.jpg';
const SignUpPage: React.FC = () => {
  const [termsChecked, setTermsChecked] = useState<boolean>(true);

  const handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermsChecked(event.target.checked);
  };
  return (
    <div
    className="m-4 border-2 border-black min-h-screen grid grid-cols-1 md:grid-cols-1 bg-gray-50 rounded-[5vw] shadow-lg">
      {/* Left Column: Sign Up Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">EasyYatra</h1>
          
          {/* Social Buttons */}
          <LoginButtons termsChecked={termsChecked} />
          <TermsCheckbox termsChecked={termsChecked} handleTermsChange={handleTermsChange} />

        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
