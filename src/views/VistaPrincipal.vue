<template>
  <div class="container">
    <br />
    <h3>Listado de usuarios</h3>

    <div v-if="!loading">
      <div class="recuadro" v-if="usuarios != null">
         <button class="btn btn-success" @click="$router.push('/cargarUsuario')">
      Cargar Usuario Nuevo +
      </button><hr/>
        <table class="table">
          <tr>
            <th scope="col">Usuario</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>

          <tr v-for="(item, index) in usuarios" :key="index">
            <td>{{ item.username }}</td>
            <td>{{ item.email }}</td>
            <td>
              <button
                class="btn btn-primary"
                @click="$router.push('/posteos/' + item.id)"
              >
                Ver Post / Detalle
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div v-else class="recuadro">
        <p class="error">
          Hubo un error al cargar los usuarios., vuelva más tarde
        </p>
      </div>
      <hr />
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
  name: 'vistaPrincipal',
  components: { BarraCargando },
  data() {
    return {
      usuarios: null,
      loading: true,
    }
  },

  async created() {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      )
      this.usuarios = response.data
    } catch (e) {
      this.loading = false
      return
    }
    this.loading = false
    console.log(this.usuarios)
  },
}
</script>
<style scoped>

</style>
