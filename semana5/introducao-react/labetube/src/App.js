import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const titulo = "Titulo do vídeo"

  function reproduzVideo(){
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div>
      <header>
          <div className="logo">
            <span></span>
            <h1>Labetube</h1>
          </div>
            
          <div className="pesquisa">
            <input type="text" name="busca" id="busca" placeholder="Buscar"/>
          </div>
      </header>

      <main>
        <nav className="menu-vertical">
            <ul>
              <li class="botoes-meunu-vertical"><span className="home"></span>Início</li>
              <li class="botoes-meunu-vertical"><span className="em-alta"></span>Em alta</li>
              <li class="botoes-meunu-vertical"><span className="inscricoes"></span>Inscrições</li>
              <hr/>
              <li class="botoes-meunu-vertical"><span className="originais"></span>Originais</li>
              <li class="botoes-meunu-vertical"><span className="historia"></span>Histórico</li>
            </ul>
        </nav>
        <section>
            <article onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <h4>{titulo}</h4>
            </article>

            <article onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=2 " alt="" />
            <h4>{titulo}</h4>
            </article>   

            <article onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=3 " alt="" />
            <h4>{titulo}</h4>
            </article>

            <article onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=4 " alt="" />
            <h4>{titulo}</h4>
            </article>

            <article onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=5 " alt="" />
            <h4>{titulo}</h4>
            </article>

            <article onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=6 " alt="" />
            <h4>{titulo}</h4>
            </article>

            <article onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=7 " alt="" />
            <h4>{titulo}</h4>
            </article>

            <article onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=8 " alt="" />
            <h4>{titulo}</h4>
            </article>
        </section>
      </main>

      <footer>
          <p>Isso não é uma imitação do Youtube</p>
      </footer>
    </div>
  );
}

export default App;
