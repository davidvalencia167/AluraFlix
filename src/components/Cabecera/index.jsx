import styled from "styled-components"
import Botones from "../Botones"

const HeaderEstilizado = styled.header`
    padding: 25px 0;
    display: flex;
    justify-content: space-between;
    img{
        width: 168px;
        padding: 10px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 15px 0;
        
        img {
            width: 140px;
            padding: 5px;
            margin-bottom: 10px;
        }
    }

    @media (max-width: 480px) {
        padding: 10px 0;
        
        img {
            width: 120px;
        }
    }

`

const Cabecera = ({ handleSaveVideo }) => {
    return <HeaderEstilizado>
        <img src="img/LogoMain.png" alt="Logo AluraFlix"/>
        <Botones handleSaveVideo={handleSaveVideo}/>
    </HeaderEstilizado>
}

export default Cabecera