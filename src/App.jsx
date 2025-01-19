import { useState } from 'react'
import styled from 'styled-components'
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from './components/Cabecera'
import Banner from './components/Banner'
import SectionFrontEnd from './components/SectionFront'
import SectionBackEnd from './components/SectionBack'
import SectionInnovation from './components/SectionInnovation'
import Footer from './components/Footer'

const FondoGradiente = styled.div`
    background: #262626;
    width: 100%;
    min-height: 100vh;
`
function App() {
  const [nuevosVideos, setNuevosVideos] = useState({
    frontend: [],
    backend: [],
    innovation: []
  });

  const handleSaveVideo = (newVideo) => {
    const categoria = newVideo.categoria;  
    console.log('Guardando video en categoría:', categoria);
    console.log('Datos del video:', newVideo);
    
    setNuevosVideos(prev => {
      const updatedVideos = {
        ...prev,
        [categoria]: [...(prev[categoria] || []), newVideo]
      };
      console.log('Estado actualizado:', updatedVideos);
      return updatedVideos;
    });
  };

  const handleUpdateCard = (updatedCard) => {
    setNuevosVideos(prev => {
      
      const newState = { ...prev };
      
      
      const categoryMap = {
        'frontend': 'frontend',
        'backend': 'backend',
        'innovacion': 'innovation'
      };
      
      
      const categoryKey = categoryMap[updatedCard.categoria];
      
      if (categoryKey) {
        
        Object.keys(newState).forEach(category => {
          newState[category] = newState[category].filter(video => video.id !== updatedCard.id);
        });
        
        
        if (!newState[categoryKey]) {
          newState[categoryKey] = [];
        }
        newState[categoryKey] = [...newState[categoryKey], updatedCard];
      }
      
      return newState;
    });
  };

  return (
    <>
     <FondoGradiente>
      <GlobalStyles/>
      <Cabecera handleSaveVideo={handleSaveVideo}/>
      <Banner/>
      <SectionFrontEnd nuevosVideos={nuevosVideos.frontend} onUpdateCard={handleUpdateCard}/>
      <SectionBackEnd nuevosVideos={nuevosVideos.backend} onUpdateCard={handleUpdateCard}/>
      <SectionInnovation nuevosVideos={nuevosVideos.innovation} onUpdateCard={handleUpdateCard}/>
      <Footer/>
     </FondoGradiente>
    </>
  )
}

export default App
