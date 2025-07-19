
export interface LoginButtonsProps {
  termsChecked: boolean;
};

export interface TermsCheckboxProps {
  termsChecked: boolean;
  handleTermsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}