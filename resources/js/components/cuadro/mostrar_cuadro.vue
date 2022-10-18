 

<template>

    <Bar :chart-data="chartData"/> 

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
            chartData: {}
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
    },
		
		methods:{
			/*MostrarCuadro(){
				axios.get('/api/coordinadores/barChart')
				.then(response=>{
					this.datas = response.data
				})
				.catch(error=>{
					console.log(error)
				})
			},*/
  }
}
  </script>

