import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header 
        logo="LabedIn"
      />

      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQExCRhwKbJi-A/profile-displayphoto-shrink_100_100/0?e=1597881600&v=beta&t=nHSmFZBiQDV4gS5V4Vihg850F0UHVe2kn5ZRT601NG8" 
          nome="Dienay Lima" 
          descricao="Oi, eu sou o Dienay. Sou estudante do curso de Full stack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          etiqueta="E-mail: "
          dados="dienaylima@gmail.com"
        />  
        <CardPequeno
          etiqueta="Endereço: "
          dados="Rua de casa"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Dunder Seven" 
          descricao="Front-end Developer freelancer" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Formação acadêmica</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQGXX-pQE9ZghQ/company-logo_200_200/0?e=1600300800&v=beta&t=xdcq8CsWYilEDr43DnqUSOouL8uwxSiIIAedK8izuUE" 
          nome="Labenu" 
          descricao="Web Full Stack Development" 
        />
        
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
