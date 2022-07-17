<template>
  <div class="container">
    <br />
    <h3>Respuestas de ejercicios:</h3>

    <div class="recuadro" >
      <span v-for="i in 4" :key="i" >
        <span v-if="refData == i">
          <button class="btn btn-info" style="margin-left:20px; padding-bottom:10px;"  @click="cambiarRtas(i)">Clase {{i}}</button>
        </span>
        <span v-else>
           <button class="btn btn-primary" style="margin-left:20px"  @click="cambiarRtas(i)">Clase {{i}}</button>
      </span> 
      </span>
      <br/><br/>
      <div v-if="data != null">
        <div v-for="(item, index) in data" :key="index">
          <pre>
        <h5><b><u>{{item.pregunta}}</u></b></h5>
           {{ item.respuesta }}
        
        </pre>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import jsonRta1 from '../files/respuestas1.json'
import jsonRta2 from '../files/respuestas2.json'
import jsonRta3 from '../files/respuestas3.json'
import jsonRta4 from '../files/respuestas4.json'
export default {
  name: 'respuestas',
  data() {
    return {
      data: null,
      refData:1,
    }
  },
  async created() {
    try {
      this.data = await jsonRta1
    } catch (e) {
      return null
    }
  },
  methods:{

    async cambiarRtas(rta){

      try {
        switch (rta) {
        case 1:
          this.data = await jsonRta1
          this.refData=1
        break;
        case 2:
          this.data = await jsonRta2
          this.refData=2
        break;
        case 3:
          this.data = await jsonRta3
          this.refData=3
        break;
        case 4:
          this.data = await jsonRta4
          this.refData=4
        break;
      }
      
    } catch (e) {
      return null
    }
    }

  }
}
</script>
<style scoped>
pre {
  display: block;
  width: 100%;
  border: none;
  font-size: 16px;
  text-align: left;

  white-space: pre-wrap; /* Since CSS 2.1 */
}

.selected{
  background-color:rgb(16, 16, 78);
}
</style>
