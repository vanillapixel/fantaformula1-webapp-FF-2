import "./card.scss";

const Card = ({ items }) => {
	return (
		<div className="card-container">
			{items.map((item) => {
				const { value, label } = item;
				return (
					<div className="card-item">
						<p className="value">{value}</p>
						<p className="label">{label}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Card;
