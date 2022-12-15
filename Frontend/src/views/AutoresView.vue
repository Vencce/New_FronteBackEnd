<script>
import AutoresApi from "@/api/autores.js";
const autoresApi = new AutoresApi();
export default {
  data() {
    return {
      autor: {},
      autores: [],
    };
  },
  async created() {
    this.autores = await autoresApi.buscarTodosOsAutores();
  },
  methods: {
    async salvar() {
      if (this.autor.id) {
        await autoresApi.atualizarAutor(this.autor);
      } else {
        await autoresApi.adicionarAutor(this.autor);
      }
      this.autores = await autoresApi.buscarTodosOsAutores();
      this.autor = {};
    },
    async excluir(autor) {
      await autoresApi.excluirAutor(autor.id);
      this.autores = await autoresApi.buscarTodosOsAutores();
    },
    editar(autor) {
      Object.assign(this.autor, autor);
    },
  },
};
</script>
<template>
  <div class="aut_princ">
    <div class="container">
      <div class="title">
        <h2>Gerenciamento de autores</h2>
      </div>
      <div class="form-input">
        <input
          class="aut_form-input"
          type="text"
          v-model="autor.nome"
          @keyup.enter="salvar"
          placeholder="Cadastre um(a) Autor(a)"
        />
        <button class="but-salvar" @click="salvar">Salvar</button>
      </div>
    </div>
  
    <div class="aut_list-items">
      <table>
        <thead class="aut_thead">
          <tr>
            <td>ID</td>
            <td>Autor</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="autor in autores" :key="autor.id">
            <td>{{ autor.id }}</td>
            <td>{{ autor.nome }}</td>
            <td>
              <button class="but-apagar" @click="excluir(autor)">Apagar</button>
              <button class="but-apagar" @click="editar(autor)">Editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.aut_princ {
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 100px;
  margin-left: 200px;
  margin-right: 200px;
  padding-bottom: 50px;
}
.title {
  color: #019BCB;
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 35px;
  text-align: center;
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
}
.but-apagar {
  border-radius: 5px;
  background-color: rgb(235, 81, 81);
  border-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-style: none;
  font-family: 'EB Garamond';
}
.aut_list-items {
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
.aut_form-input {
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
.aut_thead tr td {
  padding-right: 250px;
}
</style>