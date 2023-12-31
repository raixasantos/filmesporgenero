import { useState, useEffect } from 'react';
import axios from 'axios';
import { handleSetting } from '../servico/funcao';

const PaginaInicial = () => {
    const [genero, setGenero] = useState('');
    const [filmes, setFilmes] = useState([]);
    const [isDisabledCard, setDisabledCard] = useState(true);

    const handleGeneroChange = (event) => {
        setGenero(event.target.value);
    };

    
    useEffect(() => {
      if(genero !== ''){ handleSetting(setFilmes, genero);}
    });
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setDisabledCard(false);
    };

    return (
        <div className="container" >
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 70px"}}> 
            <h2>Informe seu Gênero de interesse</h2>
            <form>
              <div className="mb-3">
                <select className="form-select" aria-label="Default select example" onChange={(e) => {handleGeneroChange(e); setDisabledCard(true)}}>
                  <option value="">Gênero</option>
                  <option value="Drama">Drama</option>
                  <option value="Romance">Romance</option>
                  <option value="Policial">Policial</option>
                  <option value="Suspense">Suspense</option>
                  <option value="Faroeste">Faroeste</option>
                  <option value="Comedia">Comédia</option>
                  <option value="Terror">Terror</option>
                </select>
              </div>
              <div className="text-center"><button type="button" value="submit" className="btn btn-primary" onClick={(e) => {handleSubmit(e)}}>Buscar Filmes</button></div>
            </form>
          </div>
          {isDisabledCard === false && genero !== ''
          ?<div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 70px"}}> 
            <h2>Filmes do Gênero de interesse</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Título</th>
                  <th scope="col">Gênero</th>
                  <th scope="col">Canal</th>
                  <th scope="col">Data/Horário</th>
                </tr>
              </thead>
              <tbody>
                {filmes.map((filme, index) => (
                  <tr key={index}>
                    <td>{filme.titulo}</td>
                    <td>{filme.genero}</td>
                    <td>{filme.canal}</td>
                    <td>{filme.data_horario}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          :<div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 70px"}}> 
          <h2>Filmes do Gênero de interesse</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Título</th>
                <th scope="col">Gênero</th>
                <th scope="col">Canal</th>
                <th scope="col">Data/Horário</th>
              </tr>
            </thead>
          </table>
        </div>
          }
        </div>
      );
}

export default PaginaInicial;