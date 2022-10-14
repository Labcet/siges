

<template>
  <!--
      <div class="container">
 <Bar v-if="loaded" :id="barChart" />

   <div style="height: 400px; width: 900px; margin: auto;">
        <canvas id="barChart"></canvas>
    </div>
      -->

    <Bar
     :chart-options="chartOptions"
      :chart-data="barChart"
    /> 

  </template>

  <script>
  import { Bar } from 'vue-chartjs/legacy'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  let datas= axios.get("api/coordinadores/barChart").then((response)=>{ this.datas= response.data.datas})

  export default {
    /*extends: Bar,*/
    name: "datas",
    components: { Bar },

        data() {
          return {
            datas:[],
            barChart: {
              labels: ['January', 'February', 'March','April','May','June','July','August','Setember','Octuber','November','December'],
              datasets: [
              { 
                label: ' Cantidad Expedientes Atendidos',
                data: datas,
                bgColors: ['#ea80fc','#e040fb','#d500f9','#aa00ff','#f06292','#ec407a','#d81b60','#1de9b6','#00bfa5','#e65100','#e040fb','#e040fb']
              } 
            ],
              
            },
            chartOptions: {
              responsive: true
            }
          }
        },
        mounted() {
      this.renderChart(this.barChart, this.chartOptions02)
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

