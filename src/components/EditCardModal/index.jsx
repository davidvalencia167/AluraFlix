import { useState } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 700px;
  padding: 30px;
  background-color: rgba(3, 18, 47, 1); 
  border: 3px solid rgba(34, 113, 209, 1); 
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    width: 95%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 95%;
    height: 100%;
  }

  @media (max-width: 480px) {
    width: 95%;
    height: 100%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  font-size: 60px;
  font-family: "Roboto", sans-serif;
  color: rgba(34, 113, 209, 1);
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 6px;
  }

  @media (max-width: 1024px) {
    gap: 12px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  color: white;
  font-family: "Roboto", sans-serif;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 3px solid rgba(34, 113, 209, 1); 
  border-radius: 5px;
  background-color: #00263e;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: rgba(34, 209, 255, 1);
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 5px;
    font-size: 10px;
  }

  @media (max-width: 1024px) {
    padding: 8px;
    font-size: 13px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 10px;
  border: 3px solid rgba(34, 113, 209, 1); 
  border-radius: 5px;
  background-color: #00263e;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: rgba(34, 209, 255, 1);
  }

  @media (max-width: 768px) {
    height: 70px;
    padding: 8px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    height: 40px;
    padding: 5px;
    font-size: 10px;
  }

  @media (max-width: 1024px) {
    height: 70px;
    padding: 8px;
    font-size: 13px;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 3px solid rgba(34, 113, 209, 1); 
  border-radius: 5px;
  background-color: #00263e;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: rgba(34, 209, 255, 1);
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 5px;
    font-size: 11px;
  }

  @media (max-width: 1024px) {
    padding: 8px;
    font-size: 13px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    flex-direction: column;
    gap: 9px;
  }

  @media (max-width: 1024px) {
    margin-top: 15px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:nth-child(1) {
    background-color: rgba(34, 209, 255, 1);
    color: #000;

    &:hover {
      background-color: rgba(34, 200, 240, 1);
    }
  }

  &:nth-child(2) {
    background-color: #ffffff;
    color: #000;

    &:hover {
      background-color: #f1f1f1;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 7px;
    font-size: 11px;
  }

  @media (max-width: 1024px) {
    padding: 10px;
    font-size: 13px;
  }
`;

const Modal = ({onClose, card, onUpdateCard}) => {
  const [formData, setFormData] = useState({
    titulo: card?.titulo || "",
    categoria: card?.categoria || "frontend",
    imagen: card?.imagen || "",
    video: card?.video || "",
    descripcion: card?.descripcion || ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.titulo || !formData.imagen || !formData.video || !formData.descripcion || !formData.categoria) {
      alert('Por favor complete todos los campos');
      return;
    }

    const updatedCard = {
      ...card,
      ...formData,
      categoria: formData.categoria.toLowerCase()
    };

    onUpdateCard(updatedCard);
    onClose();
  };

  const handleClear = () => {
    setFormData({
      titulo: card?.titulo || "",
      categoria: card?.categoria || "frontend",
      imagen: card?.imagen || "",
      video: card?.video || "",
      descripcion: card?.descripcion || ""
    });
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>EDITAR CARD:</ModalTitle>
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <Label>Título</Label>
          <Input 
            type="text" 
            name="titulo"
            value={formData.titulo}
            onChange={handleInputChange}
            placeholder="¿Qué es JavaScript?" 
          />

          <Label>Categoría</Label>
          <Select
            name="categoria"
            value={formData.categoria}
            onChange={handleInputChange}
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="innovacion">Innovacion y Gestion</option>
          </Select>

          <Label>Imagen</Label>
          <Input 
            type="text" 
            name="imagen"
            value={formData.imagen}
            onChange={handleInputChange}
            placeholder="URL de la imagen" 
          />

          <Label>Video</Label>
          <Input 
            type="text" 
            name="video"
            value={formData.video}
            onChange={handleInputChange}
            placeholder="URL del video" 
          />

          <Label>Descripción</Label>
          <Textarea 
            name="descripcion"
            value={formData.descripcion}
            onChange={handleInputChange}
            placeholder="Descripción del video"
          ></Textarea>

          <ButtonContainer>
            <Button type="submit">GUARDAR</Button>
            <Button type="button" onClick={handleClear}>LIMPIAR</Button>
          </ButtonContainer>
        </Form>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;