<script>
import LivrosApi from "@/api/livros.js";
import AutoresApi from "@/api/autores.js";
import CategoriasApi from "@/api/categorias.js";
import EditorasApi from "@/api/editoras.js";
const livrosApi = new LivrosApi();
const autoresApi = new AutoresApi();
const categoriasApi = new CategoriasApi();
const editorasApi = new EditorasApi();
export default {
  data() {
    return {
      livro: {},
      livros: [],
      categoria: {},
      categorias: [],
      editora: {},
      editoras: [],
      autor: {},
      autores: [],
    };
  },
  async created() {
    this.livros = await livrosApi.buscarTodosOsLivros();
    this.autores = await autoresApi.buscarTodosOsAutores();
    this.categorias = await categoriasApi.buscarTodasAsCategorias();
    this.editoras = await editorasApi.buscarTodasAsEditoras();
  },
  methods: {
    async salvar() {
      if (this.livro.id) {
        await livrosApi.atualizarLivro(this.livro);
      } else {
        await livrosApi.adicionarLivro(this.livro);
      }
      this.livros = await livrosApi.buscarTodosOsLivros();
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
      this.editoras = await editorasApi.buscarTodasAsEditoras();
      this.autores = await autoresApi.buscarTodosOsAutores();
      this.livro = {};
    },
    async excluir(livro) {
      await livrosApi.excluirLivro(livro.id);
      this.livros = await livrosApi.buscarTodosOsLivros();
    },
    editar(livro) {
      Object.assign(this.livro, livro);
    },
  },
};
</script>
<template>
  <main class="princ">
    <div class="container">
      <div class="title">
        <h2>Gerenciamento de livros</h2>
      </div>
      <div class="form-input">
        <input
          class="input-liv"
          type="text"
          v-model="livro.nome"
          placeholder="Nome do Livro"
        />
        <input
        class="input-liv"
          type="text"
          v-model="livro.editora"
          placeholder="Nome da Editora"
        />
        <input
          class="input-liv"
          type="text"
          v-model="livro.autor"
          placeholder="Nome do(s) Autor(es)"
        />
        <select class="input-liv-cat" v-model="livro.categoria" @keyup.enter="salvar">
          <option
            v-for="categoria in categorias"
            :key="categoria.id"
            :value="categoria.categoria"
          >
            {{ categoria.categoria }}
          </option>
        </select>
        <button class="but-salvar" @click="salvar">Salvar</button>
      </div>
    </div>
    <div class="liv_list-items">
      <table>
        <thead class="liv_thead">
          <tr>
            <td>ID</td>
            <td>Nome</td>
            <td>Categoria</td>
            <td>Autor</td>
            <td>Editora</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.nome }}</td>
            <td>{{ livro.categoria }}</td>
            <td>{{ livro.autor }}</td>
            <td>{{ livro.editora }}</td>
            <td>
              <button class="but-apagar" @click="excluir(livro)">Apagar</button>
              <button class="but-apagar" @click="editar(livro)">Editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<style>
.princ {
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 100px;
  margin-left: 200px;
  margin-right: 200px;
  padding-bottom: 50px;
}
h2 {
  color: #019BCB;
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 35px;
  text-align: center;
  font-weight:  'EB Garamond';
  font-size: 2em;
}
.input-liv {
  margin: 15px;
  margin-left: 25%;
  width: 50%;
  border-radius: 5px;
  height: 40px;
  border-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-left: 10px;
  border-style: none;
  font-size: 1em;
}
.input-liv-cat {
  margin: 15px;
  margin-left: 25%;
  width: 50%;
  border-radius: 5px;
  height: 40px;
  border-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-left: 10px;
  border-style: none;
}
.but-salvar {
  margin: 15px;
  margin-left: 25%;
  width: 50%;
  border-radius: 5px;
  height: 40px;
  margin-bottom: 50px;
  background-color: rgb(32, 108, 221);
  border-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-left: 10px;
  border-style: none;
  font-family: 'EB Garamond';
  font-size: 1.5em;
}
.but-apagar {
  border-radius: 5px;
  background-color: rgb(235, 81, 81);
  border-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-style: none;
  font-family: 'Poppins', sans-serif;
}
.liv_list-items {
  color: #000000;
  padding: 15px;
  padding-bottom: 50px;
  width: 50%;
  margin-left: 25%;
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-size: 1em;
}
.liv_thead tr td {
  padding-right: 75px;
}
</style>