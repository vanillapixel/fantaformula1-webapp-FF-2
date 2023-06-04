import "./card.scss";

const Card = ({ items }: any) => {
	return (
		<div className="card-container">
			{items.map((item: any, idx: number) => {
				const { value, label } = item;
				return (
					<div key={idx} className="card-item">
						<p className="value">{value}</p>
						<p className="label">{label}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Card;
