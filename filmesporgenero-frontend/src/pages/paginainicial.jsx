import React, { useState } from 'react';
import axios from 'axios';

const PaginaInicial = () => {
    const [genero, setGenero] = useState('');
    const [filmes, setFilmes] = useState([]);
    const [isDisabledCard, setDisabledCard] = useState(true);

    const handleGeneroChange = (event) => {
        setGenero(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setDisabledCard(false);

        try {
          const response = await axios.get('http://localhost:3000/fpg/filmes/gen='+ genero);
          setFilmes(response.data);
        } catch (error) {
          console.error('Erro ao buscar filmes:', error);
        }
    };

    return (
        <div className="container" >
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 70px"}}> 
            <h2>Informe seu Gênero de interesse</h2>
            <form>
              <div className="mb-3">
                <label className="form-label">Gênero:</label>
                <input className="form-control" type="text" value={genero} onChange={(e) => {handleGeneroChange(e); setDisabledCard(true)}}/>
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