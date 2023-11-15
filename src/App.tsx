import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { FoodData } from './interface/foodData';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/card/create-modal/create-modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
      <div className="container">
        <h1>Cardápio</h1>
        <div className="card-grid">
          {data?.map(foodData =>
          <Card
           price={foodData.price} 
           title={foodData.title} 
           image={foodData.image}
           />
           )}
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>Novo</button>
      </div>
  )
}

export default App
