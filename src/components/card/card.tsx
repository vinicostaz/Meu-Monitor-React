import './card.css';

interface CardProps {
    price: number,
    title: string,
    image: string,
    onDelete?: () => void
}

export function Card({ price, image, title, onDelete }: CardProps) {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p><b>Valor:</b> {price}</p>
            <div>
            <button id="edit" onClick={() => alert('Botão de editar clicado')}title="Editar Item">Editar</button>
            <button id="delete" onClick={onDelete} title="Deletar Item">
                Deletar
            </button>
            </div>
        </div>
    )
};