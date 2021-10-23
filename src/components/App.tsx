import React, { useState } from 'react';
import { PLANTS_DATA } from '../data';
import { Plant } from './Plant';

function App() {
  const [plants, setPlants] = useState(PLANTS_DATA);
  const [currentId, setCurrentId] = useState(0);

  const addPlant = () => {
    setPlants((previous: any) => {
      return previous.map((plant: any) => {
        if (plant.id === currentId) {
          return { ...plant, quantity: plant.quantity + 1 }
        }
        return plant;
      });
    });
  }

  const removePlant = () => {
    setPlants((previous: any) => {
      return previous.map((plant: any) => {
        if (plant.id === currentId) {
          return { ...plant, quantity: plant.quantity - 1 }
        }
        return plant;
      });
    });
  }

  const setPlant = (id: number) => {
    setCurrentId(id);
  }

  const quantityValidation = () => {
    let cont = 0;
    let flag = false;
    plants.map((plant) =>
      (plant.quantity > 0 ? flag = false : cont = cont + 1)
    )
    plants.length !== cont ? flag = true : flag = false
    return flag;
  }

  return (
    <div>
      {plants.length > 0 ?
        [(quantityValidation() ?
          plants.map((plant) =>
            <div key={plant.id} onClick={() => setPlant(plant.id!)}>
              <Plant id={plant.id} title={plant.title} description={plant.description} imgURL={plant.imgURL} quantity={plant.quantity} addPlant={addPlant} removePlant={removePlant} />
            </div>)
          : <PlantsAvalaibility key={plants.length} />)] : null}
    </div>
  );
}

const PlantsAvalaibility: React.FC = () => {
  
  return <div>
    <h1>No plants avalaible</h1>
  </div>
}
export default App;