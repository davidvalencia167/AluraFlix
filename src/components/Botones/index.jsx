import { useState } from "react";
import { styled } from "styled-components"
import FormNewVideo from "../NewVideoForm";

const ContainerEstilizado = styled.div`
    display: flex;
    width: 385px;
    height: 54px;
    gap: 25px;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 385px;
        justify-content: center;
        gap: 15px;
    }
    
    @media (max-width: 480px) {
        flex-direction: column;
        height: auto;
        align-items: center;
        gap: 10px;
    }

`;

const Button = styled.button`
    border: 2px solid purple;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #333;
    }
`;

const HomeButton = styled(Button)`
    width: 140px;
    height: 54px;
    background-color: rgba(0,0,0,0.9);
    color: blue;
    border: 2px solid blue;
    font-size: 20px;
    font-weight: 900;
    border-radius: 10px;

    &::after {
        content: "Home";
    }

    @media (max-width: 768px) {
        width: 120px;
        height: 45px;
        font-size: 16px;
    }
    
    @media (max-width: 480px) {
        width: 100%;
        max-width: 200px;
    }
`;

const NewVideoButton = styled(Button)`
    width: 140px;
    height: 54px;
    background-color: #262626; 
    color: white;
    font-weight: 900;
    font-size: 20px;
    border: 2px solid white;
    border-radius: 15px;

    &::after {
        content: "Nuevo Video";
    }

    @media (max-width: 768px) {
        width: 120px;
        height: 45px;
        font-size: 16px;
    }
    
    @media (max-width: 480px) {
        width: 100%;
        max-width: 200px;
    }
`;

const Botones = ({ handleSaveVideo }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return(
        <>
            <ContainerEstilizado>
                <HomeButton></HomeButton>
                <NewVideoButton onClick={handleOpenModal}></NewVideoButton>
            </ContainerEstilizado>
            
            {isModalOpen && (
                <FormNewVideo 
                    onClose={handleCloseModal}
                    onSaveVideo={handleSaveVideo}
                />
            )}
        </>
    );
};

export default Botones;