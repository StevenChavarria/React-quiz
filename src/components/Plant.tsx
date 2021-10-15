import React, { useState } from "react";
import './Plant.css';

interface PlantProps {
	id: number;
	title: string;
	description: string;
	imgURL: string;
	quantity: number;
	handleClick: (id: number, quantity: number) => void;
}

export const Plant: React.FC<PlantProps> = ({ id, title, description, imgURL, quantity, handleClick}) => {
	const [count, setCount] = useState<number>(quantity);

	return <div className="container" onClick={() => handleClick(id, quantity)}>
		<div className="card">
			<div className="card-header">
				<img src={imgURL} alt="animal" />
			</div>
			<div className="card-body">
				<h4>{title}</h4>
				<span><strong>Description: </strong>{description}</span>
				<span><strong>Quantity: </strong>{count}</span>
				<button onClick={()=> setCount(count+1)}>Add</button> <button onClick={()=>setCount(count-1)}>Remove</button>
			</div>
		</div>
	</div>
}
export default Plant;