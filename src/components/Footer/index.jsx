import styled from "styled-components"


const FooterAlura = styled.footer`
    width: auto;
    margin-top: 50px;
    height: 110px;
    border-top: 3px solid rgba(34,113,209,1);
    background-color: rgba(0,0,0,0.9);
    display: flex;
    justify-content: center;
    align-items: center;

      @media (max-width: 768px) {
        height: 90px;
        margin-top: 30px;
        
        img {
            width: 140px;
        }
    }
    
    @media (max-width: 480px) {
        height: 80px;
        margin-top: 20px;
        
        img {
            width: 120px;
        }
    }
`


const Footer = () => {
    return (
       <FooterAlura>
           <img src="img/LogoMain.png" alt="Logo AluraFlix"/>
       </FooterAlura>     
    )
}

export default Footer