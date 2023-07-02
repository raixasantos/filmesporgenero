import React from 'react';

const PaginaInicial = () => {
    const [genero, setGenero] = useState('');
    const [filmes, setFilmes] = useState([]);

    const handleGeneroChange = (event) => {
        setGenero(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        //listaFilmes 

        //const filmesFiltrados = listaFilmes.filter((filme) => filme.genero === genero);

        //setFilmes(filmesFiltrados);
    
    };

    return (
        <div className="container" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 70px"}}>
          <h2>Informe seu Gênero interesse</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Gênero:</label>
              <input className="form-control" type="text" value={genero} onChange={handleGeneroChange}/>
            </div>
            <div className="text-center"><button type="button" value="submit" class="btn btn-primary" onClick={(e) => {handleSubmit(e)}}>Buscar Filmes</button></div>
          </form>

          <h2>Filmes do Gênero: {genero}</h2>
          <table class="table table-striped">
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
      );
}

export default PaginaInicial;