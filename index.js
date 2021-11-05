// SPARK 2.4
const optQueries24 = document.getElementById('optqueries24').getContext('2d');
const optQueries24Chart = new Chart(optQueries24, {
    type: 'bar',
    data: {
        labels: [
            "Q1",
            "Q2",
            "Q3",
            "Q4",
            "Q5",
            "Q6",
            "Q7",
            "Q8",
            "Q9",
            "Q10",
            "Q11",
            "Q12",
            "Q13",
            "Q14",
            "Q15",
            "Q16",
            "Q17",
            "Q18",
            "Q19",
            "Q20",
            "Q21",
            "Q22",
          ],
          datasets: [
            {
              label: "Unoptimized Parquet",
              data: [56.34,36.75,39,55,30,42,54.87,20.01,59.41,58.12,70.98,31.04,27.19,22.00,25.29,18.27,217.83,67.01,47.12,20.16,38.62,95.84,369.99],
              backgroundColor: 'blue',
            },
            {
              label: "Optimized Parquet",
              data: [59.02, 16.84,100.48,89.66,79.03,13.48,119.02,87.00,178.93,29.84,25.49,104.01,46.88, 75.90,77.33, 27.41, 69.02, 30.31,16.72, 115.17, 132.89, 16.00],
              backgroundColor: 'red',
            },
            {
              label: "Unoptimized Delta",
              data: [91.21,101.91,93.32,67.8,74.96,9.82,38.67,174.9,112.87,65.62,77.37,13.14,44.81,13.47,153.61,193.68,56.31,179.81,16.25,35.78, 129.43,15.32],
              backgroundColor: 'yellow',
            },
            {
              label: "Optimized Delta tables",
              data: [167.95, 61.22,301.57,243.44,121.70,71.85,290.72,129.12,461.61,129.93,34.87,66.19,70.47,126.97,129.33,40.01,24.05,123.97, 20.95,178.8, 0.99,34.14],
              backgroundColor: 'green',
            },
          ],
    },
});

const scalQueries24 = document.getElementById('scalabilities24').getContext('2d');
const scalQueries24Chart = new Chart(scalQueries24, {
    type: 'bar',
    data: {
        labels: [
            "Q1",
            "Q2",
            "Q3",
            "Q4",
            "Q5",
            "Q6",
            "Q7",
            "Q8",
            "Q9",
            "Q10",
            "Q11",
            "Q12",
            "Q13",
            "Q14",
            "Q15",
            "Q16",
            "Q17",
            "Q18",
            "Q19",
            "Q20",
            "Q21",
            "Q22",
          ],
          datasets: [
            {
              label: "2 workers - 8 cores",
              data: [254.41, 43.89, 306.43, 278.68, 170.04, 47.00, 100.06, 189.65, 346.77, 137.94, 89.79, 103.7, 219.08, 456.38, 148.35, 198.98, 94.86, 34.36, 196.62, 231.89, 26.71, 21.94],
              backgroundColor: 'blue',
            },
            {
              label: "4 workers - 16 cores",
              data: [59.02, 16.84,100.48,89.66,79.03,13.48,119.02,87.00,178.93,29.84,25.49,104.01,46.88, 75.90,77.33, 27.41, 69.02, 30.31,16.72, 115.17, 132.89, 16.00],
              backgroundColor: 'yellow',
            },
          ],
    },
});


// SPARK 3.1

const optQueries31 = document.getElementById('optqueries31').getContext('2d');
const optQueries31Chart = new Chart(optQueries31, {
    type: 'bar',
    data: {
        labels: [
            "Q1",
            "Q2",
            "Q3",
            "Q4",
            "Q5",
            "Q6",
            "Q7",
            "Q8",
            "Q9",
            "Q10",
            "Q11",
            "Q12",
            "Q13",
            "Q14",
            "Q15",
            "Q16",
            "Q17",
            "Q18",
            "Q19",
            "Q20",
            "Q21",
            "Q22",
          ],
          datasets: [
            {
              label: "Unoptimized Parquet",
              data: [48.43,37.42,35.95,26,52,45.88, 14.73,37.23,49.59, 69.74,24.83,17.18,15.02,25.98,15.10,84.07,34.88,60.00,55.05,11.33,358.98,305.13],
              backgroundColor: 'blue',
            },
            {
              label: "Optimized Parquet",
              data: [73.40,15.82,50.90,83.76,37.04,9.00,39.34,79.69, 180.77,10.43,12.34,30.29,30.99,42.77,58.03,48.28,63.24, 27.70,9.53,40.91,139.07,19.33],
              backgroundColor: 'red',
            },
            {
              label: "Unoptimized Delta",
              data: [89.31,50.09,63.53,55.83,87.52,24.02,61.63,77.07,111.30,40.51, 41.06,16.62,43.35,31.16,174.72,29.17,59.19,305.6,4.84,56.30,208.22,104.1],
              backgroundColor: 'yellow',
            },
            {
              label: "Optimized Delta",
              data: [152.75,22.94,115.99,145.62,108.36,24.12,153.42,109.42,276.27,56.43,33.94,48.53,69.66,81.03,100.95,61.07,24.17,77.54,4.32,127.44,188.20,99.01],
              backgroundColor: 'green',
            },
          ],
    },
});

// SCALABILTY
const scalQueries31 = document.getElementById('scalabilities31').getContext('2d');
const scalQueries31Chart = new Chart(scalQueries31, {
    type: 'bar',
    data: {
        labels: [
            "Q1",
            "Q2",
            "Q3",
            "Q4",
            "Q5",
            "Q6",
            "Q7",
            "Q8",
            "Q9",
            "Q10",
            "Q11",
            "Q12",
            "Q13",
            "Q14",
            "Q15",
            "Q16",
            "Q17",
            "Q18",
            "Q19",
            "Q20",
            "Q21",
            "Q22",
          ],
          datasets: [
            {
              label: "2 workers - 8 cores",
              data: [167.44, 23.00,121.34,261.90,116.23,43.10,132.16,130.20,278.35,75.63, 43.32,130.29,68.23,90.33,93.01,43.85,121.11,59.76,34.11,139.00, 245.33,37.04],
              backgroundColor: 'blue',
            },
            {
              label: "4 workers - 16 cores",
              data: [73.40,15.82,50.90,83.76,37.04,9.00,39.34,79.69, 180.77,10.43,12.34,30.29,30.99,42.77,58.03,48.28,63.24, 27.70,9.53,40.91,139.07,19.33],
              backgroundColor: 'yellow',
            },
          ],
    },
});




// PHOTON

const optQueriesPhoton = document.getElementById('optqueriesphoton').getContext('2d');
const optQueriesPhotonChart = new Chart(optQueriesPhoton, {
    type: 'bar',
    data: {
        labels: [
            "Q1",
            "Q2",
            "Q3",
            "Q4",
            "Q5",
            "Q6",
            "Q7",
            "Q8",
            "Q9",
            "Q10",
            "Q11",
            "Q12",
            "Q13",
            "Q14",
            "Q15",
            "Q16",
            "Q17",
            "Q18",
            "Q19",
            "Q20",
            "Q21",
            "Q22",
          ],
          datasets: [
            {
              label: "Unoptimized Paquet",
              data: [50.09, 34.20,28.86,25.31,51.23,13.41,39.30,53.50,76.14,27.74,25.89,17.21,26.86,17.34,84.99,18.98,58.72,58.73,56.86,11.02,35.24,102.34,94.24],
              backgroundColor: 'blue',
            },
            {
              label: "Optimized Parquet",
              data: [90.7, 15.9,64.8,81.9,69.2,13.7,79.4,82.8,102.9,35.0,30.7,64.1,53.6,43.6,46.3,44.5,59.2,25.3,10.3,73, 110,76, 103.48],
              backgroundColor: 'red',
            },
            {
              label: "Unoptimized Delta",
              data: [98.56,23.00,25.11,33.03,34.50,38.04,29.93,32.90,47.09,22.59,23.16,27.39,51.53,70.0,64.1,78.35,16.95,26.52, 84.64,65.83, 159.64,95.13],
              backgroundColor: 'yellow',
            },
            {
              label: "Delta tables",
              data: [166.8,10.74,79.95,105.86,39.91,21.13,69.91,49.02,116.33,35.29,23.16,27.39,51.53,70.00,64.10,78.35,16.95,26.52,2.56,57.82,178.53,84.03],
              backgroundColor: 'green',
            },
          ],
    },
});



// SCALABILITY

const scalQueriesPhoton = document.getElementById('scalabilitiesphoton').getContext('2d');
const scalQueriesPhotonChart = new Chart(scalQueriesPhoton, {
    type: 'line',
    data: {
        labels: [
            "Q1",
            "Q2",
            "Q3",
            "Q4",
            "Q5",
            "Q6",
            "Q7",
            "Q8",
            "Q9",
            "Q10",
            "Q11",
            "Q12",
            "Q13",
            "Q14",
            "Q15",
            "Q16",
            "Q17",
            "Q18",
            "Q19",
            "Q20",
            "Q21",
            "Q22",
          ],
          datasets: [
            {
              label: "2 workers - 8 cores",
              data: [179.29,24.96,126.00,138.45,112.24, 26.25, 133.44, 175.34, 62.86, 37.98, 130.76, 70.51, 85.48, 87.14, 68.73, 103.30,45.27, 15.704, 208.93, 129.45 ,194.23,100.84],
              backgroundColor: 'blue',
            },
            {
              label: "4 workers - 16 cores",
              data: [90.7, 15.9,64.8,81.9,69.2,13.7,79.4,82.8,102.9,35.0,30.7,64.1,53.6,43.6,46.3,44.5,59.2,25.3,10.3,73, 110,76, 103.48],
              backgroundColor: 'yellow',
            },
          ],
    },
});

