<script>
import EditorasApi from "@/api/editoras.js";
const editorasApi = new EditorasApi();
export default {
  data() {
    return {
      editora: {},
      editoras: [],
    };
  },
  async created() {
    this.editoras = await editorasApi.buscarTodasAsEditoras();
  },
  methods: {
    async salvar() {
      if (this.editora.id) {
        await editorasApi.atualizarEditora(this.editora);
      } else {
        await editorasApi.adicionarEditora(this.editora);
      }
      this.editoras = await editorasApi.buscarTodasAsEditoras();
      this.editora = {};
    },
    async excluir(editora) {
      await editorasApi.excluirEditora(editora.id);
      this.editoras = await editorasApi.buscarTodasAsEditoras();
    },
    editar(editora) {
      Object.assign(this.editora, editora);
    },
  },
};
</script>
<template>
  <div class="edi_princ">
    <div class="container">
      <div class="title">
        <h2>Gerenciamento de editoras</h2>
      </div> 
      <div class="form-input">
        <input
          class="edi_form-input"
          type="text"
          v-model="editora.nome"
          @keyup.enter="salvar"
          placeholder="Cadastre uma Editora"
        />
        <button class="but-salvar" @click="salvar">Salvar</button>
      </div>
    </div>
    <div class="edi_list-items">
      <table>
        <thead class="edi_thead">
          <tr>
            <td>ID</td>
            <td>editora</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="editora in editoras" :key="editora.id">
            <td>{{ editora.id }}</td>
            <td>{{ editora.nome }}</td>
            <td>
              <button class="but-apagar" @click="excluir(editora)">Apagar</button>
              <button class="but-apagar" @click="editar(editora)">Editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>
.edi_princ {
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
  font-size: 1.5em;
  color: white;
}
.edi_list-items {
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
.edi_form-input {
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
.edi_thead tr td {
  padding-right: 250px;
}
</style>