import styled from "styled-components";
const BannerMain = styled.main`
    background-image: url("img/BannerMain.png");
    height: 100vh;
    background-size: cover;
    background-position: center;
    position: relative;
    color: white;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;

    @media (max-width: 1024px) {
        height: 80vh;
    }
    
    @media (max-width: 768px) {
        height: 60vh;
        padding-left: 3%;
        padding-right: 3%;
    }
    
    @media (max-width: 480px) {
        height: 40vh;
    }

`

const Banner = () => {
    return (
        <BannerMain/>
    )
}

export default Banner;