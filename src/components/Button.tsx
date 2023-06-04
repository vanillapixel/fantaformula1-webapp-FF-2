import "./button.scss";

const Button = ({ onClick, disabled, children }: any) => {
	return (
		<button onClick={onClick} disabled={disabled} className="button cta-button">
			{children}
		</button>
	);
};

export default Button;
