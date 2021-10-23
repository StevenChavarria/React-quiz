import React from "react";
import './Plant.css';
import { Plants } from '../data';

interface PlantProps extends Plants {
	addPlant?: () => void;
	removePlant?: () => void;
}

export const Plant: React.FC<PlantProps> = ({ title, description, quantity, imgURL, addPlant, removePlant}) => {
	return <div className="container">
		<div className="card">
			<div className="card-header">
				<img src={imgURL} alt="Plant" />
			</div>
			{quantity > 0 ?  
				    <div className="card-body">
				 	 <h4>{title}</h4>
					 <span><strong>Description: </strong>{description}</span>
					 <span><strong>Quantity: </strong>{quantity}</span>
					 <button onClick={addPlant}>Add</button>
					 <button onClick={removePlant}>Remove</button> 
					 </div>
			: <h3>Plant is not available</h3>}
		</div>
	</div>
}