<template>
  <header>
    <div class="logo-web">
      <img src="@/assets/img/BookShelf.png" /> 
    </div>
    <div class="menu-central">
      <span> <RouterLink to="/livros">Livros</RouterLink> </span>
      <span> <RouterLink to="/categorias">Categorias</RouterLink> </span>
      <span> <RouterLink to="/autores">Autores</RouterLink> </span>
      <span> <RouterLink to="/editoras">Editoras</RouterLink> </span>
    </div>
    <div class="menu-direito">
    </div>
    <img class="img-usuario" src="@/assets/img/TheRoko.png" />
  </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

header a {
  padding: 0px 20px;
  font-size: larger;
}

header {
  margin: 0;
  background-color: #019BCB;
  height: 15%;
  font-size: 1rem;
  padding-left: 2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/*---------------------------------*/

.menu-central {
  padding-left: 75px;
  padding-right: 70px;
}

.menu-central span {
  text-decoration: none;
  font-family: 'EB Garamond';
  font-size: 1.5em;
}
  
a {
  color: inherit;
  text-decoration: none;
}

/*---------------------------------*/

.img-usuario {
  margin-right: 10%;
  padding-bottom: 7.5px;
  height: 140px;
  width: auto;
}

</style>
