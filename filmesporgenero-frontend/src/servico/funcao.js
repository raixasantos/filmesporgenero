import axios from 'axios';

export const handleSetting = async (setFilmes, genero) => {
    const response = await axios.get('http://localhost:3000/fpg/filmes/gen='+ genero);
    setFilmes(response.data);
  }