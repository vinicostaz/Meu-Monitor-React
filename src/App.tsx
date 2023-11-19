import { useState } from 'react';
import './App.css';
import { Card } from './components/card/card';
import { FoodData } from './interface/foodData';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/card/create-modal/create-modal';
import { EditModal } from './components/card/edit-modal/edit-modal';
import { useFoodDataDelete } from './hooks/useFoodDataDelete';

function App() {
  const { data } = useFoodData();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedFoodData, setSelectedFoodData] = useState<FoodData | null>(null);

  const handleOpenCreateModal = () => {
        setIsCreateModalOpen(true);
  };

  const handleOpenEditModal = (foodData: FoodData) => {
    setSelectedFoodData(foodData);
    setIsEditModalOpen(true);
  };

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
        {data?.map((foodData) => (
          <Card
            key={foodData.title}
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
            onDelete={() => handleDelete(foodData.id)}
            onEdit={() => handleOpenEditModal(foodData)} // Add this line
          />
        ))}
      </div>
      {isCreateModalOpen && <CreateModal closeModal={() => setIsCreateModalOpen(false)} />}
      {isEditModalOpen && (
        <EditModal
          closeModal={() => setIsEditModalOpen(false)}
          initialData={selectedFoodData as FoodData}
        />
      )}
      <button id="botaoModal" onClick={handleOpenCreateModal}>
        Novo
      </button>
    </div>
  );
}

export default App;