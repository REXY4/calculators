<!DOCTYPE html>
<html>
<head>
    <title>Duration Login Per User</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        .container{
            margin : 50px auto;
        }
        .container-card{
            width : 50%;
            height :50%;
        }
    </style>    
</head>
<body>
<div class="container">
    <div>
        <h1>Grafik Kunjungan</h1>
    </div>
    <div class="container-card">
    <canvas id="myChart"></canvas>
    </div>
</div>
    <script>
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    @foreach ($users as $user)
                        "{{ $user->email }}",
                    @endforeach
                ],
                datasets: [{
                    label: 'Duration Login Per User',
                    data: [
                    @foreach ($durations as $duration)
                        '{{ $duration }}',
                    @endforeach
                    ],

                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value, index, values) {
                                var hours = Math.floor(value / 3600);
                                var minutes = Math.floor((value % 3600) / 60);
                                var seconds = value % 60;
                                return hours + " jam " + minutes + " menit " + seconds + " detik";
                            }
                        }
                    }
                },
                tooltips: {
                    callbacks: {
                        label: function(context) {
                            var value = context.yLabel;
                            var hours = Math.floor(value / 3600);
                            var minutes = Math.floor((value % 3600) / 60);
                            var seconds = value % 60;
                            return "Duration: " + hours + " jam " + minutes + " menit " + seconds + " detik";
                        }
                    }
                }
            }
        });
    </script>
</body>
</html>
