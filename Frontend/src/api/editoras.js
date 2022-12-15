import axios from "axios";
export default class AutoresApi {
  async buscarTodasAsEditoras() {
    const response = await axios.get("https://vitorematheuslivraria.herokuapp.com/autores");
    return response.data;
  }

  async buscarEditora(id) {
    const response = await axios.get(`https://vitorematheuslivraria.herokuapp.com/autores/${id}`);
    return response.data;
  }

  async adicionarEditora(editora) {
    const response = await axios.post(
      "https://vitorematheuslivraria.herokuapp.com/autores",
      editora
    );
    return response.data;
  }

  async excluirEditora(id) {
    const response = await axios.delete(`https://vitorematheuslivraria.herokuapp.com/autores/${id}`);
    return response.data;
  }

  async atualizarEditora(editora) {
    const response = await axios.put(
      `https://vitorematheuslivraria.herokuapp.com/autores/${editora.id}`,
      editora
    );
    return response.data;
  }
}