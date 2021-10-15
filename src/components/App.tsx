import React from 'react';
import { Plants, PLANTS_DATA } from '../data';
import { Plant } from './Plant'

interface AppState {
	list: Plants[];
	id: number;
  quantity: number;
}


export class App extends React.Component<{}, AppState>{
  state:AppState = {
    list: PLANTS_DATA,
    id: 1,
    quantity: 1
	};

     handlePlant = (id:number, quantity:number) => this.setState({id:id, quantity:quantity});


  render() {
    return <>
      {PLANTS_DATA.map((plant) => <Plant handleClick={(id:number, quantity:number) => this.handlePlant(plant.id, plant.quantity)} key={plant.id} id={plant.id} title={plant.title} description={plant.description} imgURL={plant.imgURL} quantity={plant.quantity} />)}
    </>
  }
}

export default App;