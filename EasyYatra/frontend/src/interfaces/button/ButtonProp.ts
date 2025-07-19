
export interface ButtonProp {
    id?: string;
    className?: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
    style?: React.CSSProperties;
    title?: string;
};