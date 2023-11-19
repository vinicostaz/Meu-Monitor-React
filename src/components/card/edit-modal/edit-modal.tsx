import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../../hooks/useFoodDataMutate";
import { useFoodDataPut } from '../../../hooks/useFoodDataPut';
import { FoodData } from "../../../interface/foodData";

import "./modal.css";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

interface EditModalProps {
  closeModal(): void;
  initialData: FoodData; // Pass the initial data for editing
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      ></input>
    </>
  );
};

export function EditModal({ closeModal, initialData }: EditModalProps) {
  const [title, setTitle] = useState(initialData.title);
  const [price, setPrice] = useState(initialData.price);
  const [image, setImage] = useState(initialData.image);
  const { mutate, isSuccess } = useFoodDataPut(); // Use the new hook

  useEffect(() => {
    setTitle(initialData.title);
    setPrice(initialData.price);
    setImage(initialData.image);
  }, [initialData]);

  const submit = () => {
    const updatedFoodData: FoodData = {
      id: initialData.id,
      title,
      price,
      image,
    };
    mutate(updatedFoodData);
  };

  const fechar = () => {
    closeModal();
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Editar item do cardápio</h2>
        <form className="input-container">
          <Input label="Nome: " value={title} updateValue={setTitle} />
          <Input label="Preço: " value={price} updateValue={setPrice} />
          <Input label="Imagem: " value={image} updateValue={setImage} />
        </form>
        <button id="editar" onClick={submit} className="btn-secondary">
          Editar
        </button>
        <button id="fechar" onClick={fechar} className="btn-secondary">
          Fechar
        </button>
      </div>
    </div>
  );
}