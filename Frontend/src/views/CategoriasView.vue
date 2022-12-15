<script>
import CategoriasApi from "@/api/categorias.js";
const categoriasApi = new CategoriasApi();
export default {
  data() {
    return{
      categoria: {},
      categorias: [],
    };  
  },
  async created(){
    this.categorias = await categoriasApi.buscarTodasAsCategorias();
  }, 
  methods: {
    async salvar() {
      if (this.categoria.id){
        await categoriasApi.atualizarCategoria(this.categoria);
      } else {
        await categoriasApi.adicionarCategoria(this.categoria);
      }
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
      this.categoria = {};
    },
    async excluir(categoria){
      await categoriasApi.excluirCategoria(categoria.id);
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
    },
    editar(categoria) {
      Object.assign(this.categoria, categoria);
    },
  },
};
</script>
<template>
  <div class="cat_princ">
    <div class="container">
      <div class="title">
        <h2>Gerenciamento de categorias</h2>
      </div> 
      <div class="form-input">
        <input
          class="cat_form-input"
          type="text"
          v-model="categoria.categoria"
          @keyup.enter="salvar"
          placeholder="Cadastre uma categoria"
        />
        <button class="but-salvar" @click="salvar">Salvar</button>
      </div>
    </div>
    <div class="cat_list-items">
      <table>
        <thead class="cat_thead">
          <tr>
            <td>ID</td>
            <td>categoria</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="categoria in categorias" :key="categoria.id">
            <td>{{ categoria.id }}</td>
            <td>{{ categoria.categoria }}</td>
            <td>
              <button class="but-apagar" @click="excluir(categoria)">Apagar</button>
              <button class="but-apagar" @click="editar(categoria)">Editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.cat_princ {
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
.but-apagar {
  border-radius: 5px;
  background-color: rgb(235, 81, 81);
  border-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-style: none;
  font-family: 'EB Garamond';
}
.cat_list-items {
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
.cat_form-input {
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
.cat_thead tr td {
  padding-right: 250px;
}
</style>