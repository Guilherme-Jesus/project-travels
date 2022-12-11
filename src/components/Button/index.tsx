import { Link } from "react-router-dom";
import "./styles.scss";

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

interface Props {
    children?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    buttonStyle?: typeof STYLES[number];
    buttonSize?: typeof SIZES[number];
    className?: string;
}

function Button({ children,
    type,
    onClick,
    buttonStyle,
    className,
    buttonSize }: Props) {

    const checkButtonStyle = STYLES.includes(buttonStyle ? buttonStyle : STYLES[0])

    const checkButtonSize = SIZES.includes(buttonSize ? buttonSize : SIZES[0])


    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};

export default Button