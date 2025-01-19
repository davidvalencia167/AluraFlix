import { useState } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
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
`

const ModalVideoContainer = styled.div`
    width: 900px;
    padding: 30px;
    background-color: #262626;
    border-radius: 10px;

    @media (max-width: 1024px) {
    width: 90%;
    padding: 20px;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 10px;
  }
`

const ModalHeader = styled.div`
    display: block;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

`

const ModalTitle = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-size: 60px;
    line-height: 70px;
    text-align: center;
    color: rgba(245,245,245,1);

    &::after {
        content: "NUEVO VIDEO";
    }

    @media (max-width: 1024px) {
        font-size: 24px;
    }

    @media (max-width: 768px) {
        font-size: 24px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
    }
`

const ModalDescription = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: rgba(245,245,245,1);

    &::after {
        content: "COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO";
    }

    @media (max-width: 768px) {
        font-size: 12px;
        line-height: 16px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        line-height: 16px;
    }

    @media (max-width: 1024px) {
        font-size: 12px;
        line-height: 16px;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 768px) {
        gap: 8px;
    }

    @media (max-width: 480px) {
        gap: 8px;
    }

    @media (max-width: 1024px) {
        gap: 8px;
    }
`

const Label =  styled.label`
    font-size: 20px;
    color: rgba(255,255,255,1);
    font-family: "Roboto", sans-serif;

    @media (max-width: 480px) {
        font-size: 11px;
    }
`

const Input = styled.input`
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      background-color: rgba(25,25,25,1);
      color: white;
      border: none;
      font-family: "Roboto", sans-serif;
      font-size: 20px;

      @media (max-width: 768px) {
        padding: 6px;
        font-size: 11px;
  }

  @media (max-width: 480px) {
        padding: 5px;
        font-size: 11px;
  }

  @media (max-width: 1024px) {
        padding: 6px;
        font-size: 11px;
  }
`

const TextArea = styled.textarea`
    width: 100%;
    height: 80px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: rgba(25,25,25,1);
    border-radius: 5px;
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 14px;

    @media (max-width: 768px) {
    height: 60px;
    padding: 5px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    height: 60px;
    padding: 5px;
    font-size: 12px;
  }

  @media (max-width: 1024px) {
    height: 60px;
    padding: 5px;
    font-size: 12px;
  }
`

const Select = styled.select`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(25,25,25,1);
    color: white;
    border: none;
    font-family: "Roboto", sans-serif;
    font-size: 14px;

    @media (max-width: 768px) {
    padding: 6px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 12px;
  }

  @media (max-width: 1024px) {
    padding: 6px;
    font-size: 12px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

    @media (max-width: 768px) {
        margin-top: 12px;
        gap: 10px;
    }

    @media (max-width: 480px) {
        margin-top: 12px;
        flex-direction: column;
        gap: 10px;
    }

    @media (max-width: 1024px) {
        margin-top: 7px;
        gap: 10px;
    }
`

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
    
  &:nth-child(1) {
    background-color: #262626;
    color: white;
    border: 3px solid rgba(34,113,209,1);
  }

  &:nth-child(2) {
    background-color: #262626;
    color: white;
    border: 3px solid white;
  }

@media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    font-size: 12px;
  }

@media (max-width: 480px) {
    width: 100%;
    padding: 10px;
    font-size: 12px;
  }

@media (max-width: 1024px) {
    width: 100%;
    padding: 10px;
    font-size: 12px;
  }
`

const FormNewVideo = ({onClose, onSaveVideo}) => {


    const [formData, setFormData] = useState({
        titulo: '',
        categoria: 'frontend',
        imagen: '',
        video: '',
        descripcion: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.titulo || !formData.imagen || !formData.video || !formData.descripcion) {
            alert('Por favor complete todos los campos');
            return;
        }

        const newVideo = {
            ...formData,
            id: new Date().getTime(),
            categoria: formData.categoria.toLowerCase()
        };

        console.log('Enviando video:', newVideo);
        onSaveVideo(newVideo);
        onClose();
        handleClear();
    };

    const handleClear = () => {
        setFormData({
            titulo: '',
            categoria: 'frontend',
            imagen: '',
            video: '',
            descripcion: ''
        });
    };

    return (
        <PageContainer>
            <ModalVideoContainer>
                <ModalHeader>
                    <ModalTitle></ModalTitle>
                    <ModalDescription></ModalDescription>
                </ModalHeader>
                <Form onSubmit={handleSubmit}>
                    <Label>Titulo</Label>
                    <Input 
                        type="text"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleInputChange}
                        placeholder="ingrese el titulo" 
                    />

                    <Label>Categoria</Label>
                    <Select
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleInputChange}
                    >
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="innovation">Innovacion y Gestion</option>
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
                        placeholder="ingrese el enlace del video" 
                    />

                    <Label>Descripción</Label>
                    <TextArea 
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleInputChange}
                        placeholder="¿De qué se trata este vídeo?"
                    ></TextArea>

                    <ButtonContainer>
                        <Button type="submit">GUARDAR</Button>
                        <Button type="button" onClick={handleClear}>LIMPIAR</Button>
                    </ButtonContainer>
                </Form>
            </ModalVideoContainer>
        </PageContainer>
    )
}

export default FormNewVideo