import { useState } from 'react';
import './App.css';
import { Card } from './components/card/card';
import { FoodData } from './interface/foodData';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/card/create-modal/create-modal';
import { useFoodDataDelete } from './hooks/useFoodDataDelete';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
      setIsModalOpen(prev => !prev);
  }

  const deleteFoodData = useFoodDataDelete();

  const handleDelete = async (id?: number) => {
    if (id) {
        await deleteFoodData.mutate(id);
    }
}

  return (
      <div className="container">
          <h1>Cardápio</h1>
          <div className="card-grid">
              {data?.map(foodData =>
                  <Card
                      key={foodData.title}
                      price={foodData.price}
                      title={foodData.title}
                      image={foodData.image}
                      onDelete={() => handleDelete(foodData.id)}
                  />
              )}
          </div>
          {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
          <button id ="botaoModal" onClick={handleOpenModal}>Novo</button>
      </div>
  );
}

export default App;