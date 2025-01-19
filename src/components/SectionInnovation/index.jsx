import { useState } from 'react';
import { styled } from "styled-components";
import Modal from '../EditCardModal';

const SectionInnovation = styled.section`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-top: 40px;

    @media (max-width: 768px) {
        padding: 10px;
        padding-top: 30px;
    }
    
    @media (max-width: 480px) {
        padding: 5px;
        padding-top: 20px;
    }
`

const SectionContainer = styled.div`
    width: 410px;
    height: 70px;
    border-radius: 15px;
    background-color: rgba(255, 186, 5, 1);
`

const SectionText = styled.h1`
    font-size: 32px;
    color: rgba(245, 245, 245, 1);
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 800;
    line-height: 37px;

    &::after {
        content: "Innovacion y Gestion";
    }
`

const CardsContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
        justify-content: center;
    }
    
    @media (max-width: 768px) {
        gap: 10px;
    }
    
    @media (max-width: 480px) {
        gap: 8px;
    }

`

const CardInnovation = styled.div`
    width: 460px;
    height: 220px;
    background-color: rgba(0, 0, 0, 0.9);
    border: 5px solid rgba(255, 186, 5, 1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    margin-top: 10px;
    position: relative;
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
        transition: transform 0.2s ease-in-out;
    }

    @media (max-width: 1024px) {
        min-width: 300px;
    }

    @media (max-width: 768px) {
        width: 100%;
        max-width: 460px;
        height: 240px;
    }

    @media (max-width: 480px) {
        width: 440px;
    }

`;

const CardTitle = styled.h2`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    margin: 0;
    font-size: 18px;
    text-align: center;
    font-family: "Roboto", sans-serif;
`;

const ButtonContainer = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    max-width: 400px;
    background-color: #000;
    border: 2px solid #ffba05;
    border-radius: 20px;
    padding: 10px;
    gap: 20px;
`;

const DeleteText = styled.a`
    cursor: pointer;
    display: flex;
    color: rgba(255,255,255,1);
    width: 64px;
    height: 19px;
    font-family: "Roboto", sans-serif;
    font-weight: 800;
    font-size: 16px;
    line-height: 18px;

    &::after {
        content: "Borrar";
    }
`

const EditText = styled.a`
    cursor: pointer;
    display: flex;
    color: rgba(255,255,255,1);
    width: 64px;
    height: 19px;
    font-family: "Roboto", sans-serif;
    font-weight: 800;
    font-size: 16px;
    line-height: 18px;
    text-align: end;

    &::after {
        content: "Editar";
    }
`

const SectionInnovationEnd = ({ nuevosVideos = [], onUpdateCard }) => {
    const [cards, setCards] = useState([
        { id: 1, image: "img/aluraInnovation.jfif" },
        { id: 2, image: "img/aluraInnovation2.jfif" },
        { id: 3, image: "img/aluraInnovation3.jfif" }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCard, setEditingCard] = useState(null);

    const handleEdit = (card) => {
        const cardToEdit = {
            ...card,
            titulo: card.titulo || "",
            video: card.video || "",
            imagen: card.image || card.imagen || "",
            categoria: "innovacion"
        };
        setEditingCard(cardToEdit);
        setIsModalOpen(true);
    };

    const handleUpdateVideo = (updatedCard) => {
        onUpdateCard(updatedCard);
        setIsModalOpen(false);
        setEditingCard(null);
    };

    const handleDelete = (cardId) => {
        setCards(cards.filter(card => card.id !== cardId));
    };

    const CardWithButtons = ({ card, isCustom = false }) => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '460px' }}>
            <div style={{ position: 'relative', width: '100%' }}>
                <CardInnovation 
                    image={isCustom ? card.imagen : card.image}
                    onClick={() => card.video && window.open(card.video, '_blank')}
                >
                    {card.titulo && <CardTitle>{card.titulo}</CardTitle>}
                </CardInnovation>
            </div>
            <ButtonContainer>
                <DeleteText onClick={() => handleDelete(card.id)} />
                <EditText onClick={() => handleEdit(card)}/>
            </ButtonContainer>
        </div>
    );

    return (
        <SectionInnovation>
            <SectionContainer>
               <SectionText></SectionText>
            </SectionContainer>
            <CardsContainer>
                {cards.map((card) => (
                    <CardWithButtons key={card.id} card={card} />
                ))}

                {nuevosVideos && nuevosVideos.map((video) => (
                    <CardWithButtons key={video.id} card={video} isCustom={true} />
                ))}
            </CardsContainer>

            {isModalOpen && (
                <Modal 
                    onClose={() => setIsModalOpen(false)}
                    card={editingCard}
                    onUpdateCard={handleUpdateVideo}
                />
            )}
        </SectionInnovation>
    )
}

export default SectionInnovationEnd;