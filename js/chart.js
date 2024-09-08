import Chart from 'chart.js/auto'

// (async function() {
//   const data = [
//     { year: 2010, count: 10 },
//     { year: 2011, count: 20 },
//     { year: 2012, count: 15 },
//     { year: 2013, count: 25 },
//     { year: 2014, count: 22 },
//     { year: 2015, count: 30 },
//     { year: 2016, count: 28 },
//   ];

//   new Chart(
//     document.getElementById('acquisitions'),
//     {
//       type: 'bar',
//       data: {
//         labels: data.map(row => row.year),
//         datasets: [
//           {
//             label: 'Acquisitions by year',
//             data: data.map(row => row.count)
//           }
//         ]
//       }
//     }
//   );
// })();


// const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [{
//       label: 'Temperature',
//       data: [12, 14, 16, 18, 20, 22, 24],
//       fill: false,
//       borderColor: 'rgb(75, 192, 192)',
//       tension: 0.1
//     }]
//   };
  
  
//   const config = {
//     type: 'line',
//     data: data,
//     options: {}
//   };
  
  
//   const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//   );





  const data = {
    labels: ['Rent', 'Food', 'Transportation', 'Entertainment'],
    datasets: [{
      label: 'Expenses',
      data: [800, 500, 200, 300],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)'
      ],
      hoverOffset: 4
    }]
  };
  
  
  const config = {
    type: 'doughnut',
    data: data,
    options: {}
  };
  
  
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );