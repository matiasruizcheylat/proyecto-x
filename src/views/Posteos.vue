<template>
  <div class="container">
    <div v-if="!loading">
       <br />
    <h3>Datos del usuario:</h3>
      <div class="recuadro">
        <button class="btn btn-primary" @click="$router.push('/')">
          &#60;&#60; Volver
        </button>
        <hr />
        <div v-if="usuario != null && posteos != null">
          <p>
            Usuario:<b>{{ usuario.username }}</b>
          </p>
          <p>
            Nombre: <b>{{ usuario.name }}</b>
          </p>
          <p>
            Email: <b>{{ usuario.email }}</b>
          </p>
          <p>
            Localidad:<b>{{ usuario.address.city }}</b> | Calle:
            <b>{{ usuario.address.street }}</b> al:
            <b>{{ usuario.address.suite }}</b>
          </p>
          <p>
            Teléfono: <b>{{ usuario.phone }}</b>
          </p>
          <p>
            Website: <b>{{ usuario.website }}</b>
          </p>
          <br />
          <br />
          <button class="btn btn-primary" @click="ampliarPosts()">
            <span v-if="!extension">Ampliar Posts +</span><span v-else>Reducir Posts -</span>
          </button>
          <div v-if="extension">
            <h4>
              <b><u>Posteos de usuario</u></b>
            </h4>
            <table class="coments">
              <tr v-for="(item, index) in posteos" :key="index">
                <td>
                  <h4>
                    <b>{{ item.title }}</b>
                  </h4>
                  <p>{{ item.body }}</p>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div v-else>
          <p class="error">
            Hubo un error al cargar el Usuario., vuelva más tarde
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <BarraCargando v-if="loading" />  
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BarraCargando from '../components/BarraCargando'

export default {
  name: 'posteosTodo',
  components: { BarraCargando },
  data() {
    return {
      posteos: null,
      usuario: null,
      idUser: null,
      extension: true,
      loading: true,
    }
  },

  async created() {
    try {
      this.idUser = this.$route.params.id
      const responseUser = await axios.get(
        'https://jsonplaceholder.typicode.com/users/' + this.idUser,
      )
      const responsePosts = await axios.get(
        'https://jsonplaceholder.typicode.com/users/' + this.idUser + '/posts',
      )
      this.usuario = responseUser.data
      this.posteos = responsePosts.data
    } catch (e) {
      this.loading = false;
      return
    }
    this.loading = false;
  },
  methods: {
    ampliarPosts() {
      this.extension = !this.extension
    },
  },
}
</script>
<style>

.coments {
  text-align: left !important;
}
.coments td {
  border: 1px solid rgb(120, 120, 120);
  border-radius: 10px;
  padding-top: 40px;
  padding-left: 20px;
}
</style>
