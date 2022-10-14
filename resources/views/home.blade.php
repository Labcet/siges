<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title> graficos</title>

	    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js" integrity="sha512-ElRFoEQdI5Ht6kZvyzXhYG9NqjtkmlkfYk0wr6wHxU9JEHakS7UJZNeml5ALk+8IKlU6jDgMabC3vkumRokgJA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>
    <div style="height: 400px; width: 900px; margin: auto;">
            <canvas id="barChart"></canvas>
    </div>
        <script>
            $(function(){
                var datas = <?php echo json_encode($datas); ?>;
                var barCanvas = $("#barChart");
                var barChart = new Chart(barCanvas, {
                    type: 'bar',
                    data:{
                        labels: ['Ene','Feb','Mzo','Abr','May','Jun','Jul','Agt','Set','Oct','Nov','Dic'],
                        datasets:[
                        {
                            label: ' Cantidad Expedientes Atendidos',
                            data: datas,
                            backgroundColor: ['red','orange','yellow','blue','indigo','grey','purple','gold','silver','brown','dar-blue']
                         }
                       ]
                    },
                    options:{
                        scales:{
                            yAxes: [{
                                tick:{
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                })
            })
        </script>


        <div class="col-12">
         <button type="submit" class="btn btn-primary"> <a  href ="http://127.0.0.1:8000/Dashboard ">Dashboard</a></button>
        </div>

</body>

</html>