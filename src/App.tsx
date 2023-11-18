import { useState } from 'react';
import './App.css';
import { Card } from './components/card/card';
import { FoodData } from './interface/foodData';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/card/create-modal/create-modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
      setIsModalOpen(prev => !prev);
  }

  const handleBuy = (foodTitle: string) => {
      // Lógica de compra ou ação desejada ao clicar no botão "Comprar"
      console.log(`Item "${foodTitle}" comprado.`);
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
                      onBuyClick={() => handleBuy(foodData.title)}
                  />
              )}
          </div>
          {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
          <button id ="botaoModal" onClick={handleOpenModal}>Novo</button>
      </div>
  );
}

export default App;