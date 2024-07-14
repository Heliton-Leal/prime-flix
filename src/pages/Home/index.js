import { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from "react-router-dom";
import './home.css';
// https://api.themoviedb.org/3/movie/now_playing?api_key=70ad69b0526aacbfb76afd9f9fc70f40

function Home(){
  const [filmes, setFilmes] = useState([]);

  useEffect(()=>{
    async function loadFilmes(){
      const resposnse = await api.get('movie/now_playing', {
        params: {
          api_key: '70ad69b0526aacbfb76afd9f9fc70f40',
          language: 'pt-BR',
          page: 1,
        }
      })
      setFilmes(resposnse.data.results.slice(0, 10));
    }
    loadFilmes()
  }, []);

  return(
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme)=> {
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  )
}

export default Home;