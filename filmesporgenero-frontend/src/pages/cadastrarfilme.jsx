import React, { useState } from 'react';
import axios from 'axios';

const CadastrarFilme = () => {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [canal, setCanal] = useState('');
  const [dataHorario, setDataHorario] = useState('');

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  };

  const handleCanalChange = (event) => {
    setCanal(event.target.value);
  };

  const handleDataHorarioChange = (event) => {
    setDataHorario(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("começo");
    const payload = {
      "type": "Filme",
      "isPattern": "false",
      "id": titulo+genero+canal+dataHorario,
      "attributes": [
                {
                    "name": "titulo",
                    "type": "String",
                    "value": titulo
                },
                {
                    "name": "genero",
                    "type": "String",
                    "value": genero
                },
                {
                    "name": "canal",
                    "type": "String",
                    "value": canal
                },
                {
                    "name": "data_horario",
                    "type": "DateTime",
                    "value": dataHorario
                }
      ]
    }

    try {
      console.log("resposta:", payload);
      const response = await axios.post('http://172.17.0.1:3000/v1/contextEntities', payload);
      console.log("enviado");
    } catch (error) {
      console.error('Erro:', error);
    }
    };

  return (
    <div className="container" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 70px"}}>
      <h2>Cadastrar Filme</h2>
      <form >
        <div className="mb-3">
          <label className="form-label">Título:</label>
          <input className="form-control" type="text" value={titulo} onChange={handleTituloChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Gênero:</label>
          <input className="form-control" type="text" value={genero} onChange={handleGeneroChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Canal:</label>
          <input className="form-control" type="text" value={canal} onChange={handleCanalChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Data/Horário:</label>
          <input className="form-control" type="datetime-local" value={dataHorario} onChange={handleDataHorarioChange} />
        </div>
        <div className="text-center"><button type="button" value="submit" className="btn btn-success" onClick={(e) => {handleSubmit(e)}}>Cadastrar Filme</button></div>
      </form>
    </div>
  );
};

export default CadastrarFilme;
