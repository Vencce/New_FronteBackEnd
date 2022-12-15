import axios from "axios";
export default class LivrosApi {
  async buscarTodosOsLivros() {
    const response = await axios.get("https://vitorematheuslivraria.herokuapp.com/livros");
    return response.data;
  }

  async buscarLivros(id) {
    const response = await axios.get(`https://vitorematheuslivraria.herokuapp.com/livros/${id}`);
    return response.data;
  }

  async adicionarLivro(livro) {
    const response = await axios.post("https://vitorematheuslivraria.herokuapp.com/livros", livro);
    return response.data;
  }

  async excluirLivro(id) {
    const response = await axios.delete(`https://vitorematheuslivraria.herokuapp.com/livros/${id}`);
    return response.data;
  }

  async atualizarLivro(livro) {
    const response = await axios.put(
      `https://vitorematheuslivraria.herokuapp.com/livros/${livro.id}`,
      livro
    );
    return response.data;
  }
}