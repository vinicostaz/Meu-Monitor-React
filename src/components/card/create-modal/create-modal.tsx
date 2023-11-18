import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../../hooks/useFoodDataMutate";
import { FoodData } from "../../../interface/foodData";

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void;
}

const Input = ({ label, value, updateValue} : InputProps) => {
    return (
        <>
        <label>{label}</label>
        <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({closeModal}: ModalProps) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess} = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image
        }
        mutate(foodData)
    }
    const fechar = () => {
        closeModal();
    }

    useEffect(() => {
        if(!isSuccess) return
        closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="Nome: " value={title} updateValue={setTitle}/>
                    <Input label="Preço: " value={price} updateValue={setPrice}/>
                    <Input label="Imagem: " value={image} updateValue={setImage}/>7
                </form>
                <button id="postar" onClick={submit} className="btn-secondary">Postar</button>
                <button id="fechar"onClick={fechar} className="btn-secondary">Fechar</button>
            </div>
        </div>
    )
}