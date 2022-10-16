 

<template>
  <!--
      <div class="container">
 <Bar v-if="loaded" :id="barChart" />

   <div style="height: 400px; width: 900px; margin: auto;">
        <canvas id="barChart"></canvas>
    </div>
      -->

    <Bar
     :chart-data="chartData"
    /> 

  </template>

  <script>
  import { Bar } from 'vue-chartjs/legacy'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  //let datas= axios.get("api/coordinadores/barChart").then((response)=>{ this.datas= response.data.datas})

  export default {
    /*extends: Bar,*/
    //name: "datas",
    components: { Bar },

        data() {
          return {
            //datas:[],
            chartData: null
          }
        },
        async mounted() {
          
          await axios.get('/api/barchart')
                .then(response=>{

                    this.chartData = response.data
                    //console.log(response.data);
                })
                .catch(error=>{
                    alert(error);
                    console.log(error)
                })
    }
  
  /*

    mounted(){
			this.MostrarCuadro()
		},
		
		methods:{
			MostrarCuadro(){
				axios.get('/api/coordinadores/barChart')
				.then(response=>{
					this.datas = response.data
				})
				.catch(error=>{
					console.log(error)
				})
			},
  },*/
}
  </script>

