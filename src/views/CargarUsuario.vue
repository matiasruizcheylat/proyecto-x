<template>
  <div class="container">
    <h3>Cargar un usuario:</h3>
    <div class="recuadro centrado">
      <button class="btn btn-primary" @click="$router.push('/')">
        &#60;&#60; Volver
      </button>
      <hr />
 <p><b>Ver la consola Genio..</b></p>
<p v-if="errors.length">
    <b class="red">Corrija los siguientes campos:</b>
    <ul>
      <li class="red" v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
  </p>
      
      <input v-model="usuario.username"/>* Nombre de Usuario: <br /><br />
      <input v-model="usuario.email"/>* Email<br /><br />
      <input v-model="usuario.name" /> Nombre<br /><br />

      <button
        class="btn btn-danger"
        style="padding:10px; margin-right:10px;"
        @click="limpiar()"
      >
        Limpiar
      </button>
      <button
        class="btn btn-success"
        style="padding:10px;"
        @click="cargarUsuario()"
      >
        Cargar Usuario
      </button>
      

    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'CargarUsuario',
  data() {
    return {
       usuario: { name: '', username: '', email: '' },
       errors:[],
    }
  },
  methods: {
    async cargarUsuario() {
       
      this.errors=[];
      this.ponerTodoTrim();

      if (!this.usuario.username) {
        this.errors.push('El Nombre de usuario es requerido.');
      
      } else{

        if(this.usuario.username.includes(' ')){
           this.errors.push('El Nombre de usuario No admite espacios en blanco');
        }
        if(!this.rangoMinMax(6,50,this.usuario.username)){
          this.errors.push('El nombre de usuario debe tener entre 6 y 50 caracteres');
        }
        
      }

      if (!this.usuario.email) {
        this.errors.push('El Email es requerido.');
      }else{
        if (!this.emailValido(this.usuario.email)){
          this.errors.push('El Email No es válido');
        }
      }
      if(this.usuario.name){
        if(!this.rangoMinMax(0,50,this.usuario.name)){
          this.errors.push('El Nombre no debe superar los 50 caracteres');
        }
      }
      if(this.errors.length!=0){
        return;}

       let response=null;
       try {
         response = await axios.post(
          'https://jsonplaceholder.typicode.com/posts',
          this.usuario,
        )
        } catch (e) {
        return
       }
       console.log(response.data);
    },
    ponerTodoTrim(){
     for (let usua in this.usuario) {
        this.usuario[usua]=this.usuario[usua].trim();
        }

    },
    
    rangoMinMax(min,max, campo){
      return (campo.length >= min && campo.length <=max)
    },


    emailValido(email){
        
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(email)) {
     return true;
    }
      return false;
    

    },




    limpiar(){
       for (let usua in this.usuario) {
        this.usuario[usua]='';
        }

    },

  },
}
</script>
<style scoped>
.centrado {
  max-width: 700px;
  padding-left: 40px;
}
.red{
  color:red;
}
</style>
