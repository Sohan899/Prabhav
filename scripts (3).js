// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    // Sample Data for Charts
    const covidData = {
        dates: ['2020-01-22', '2020-02-01', '2020-03-01', '2020-04-01', '2020-05-01'],
        confirmedCases: [500, 1500, 4500, 1500, 500],
        deaths: [50, 150, 300, 150, 50],
        activeCases: 2500,
        recoveredCases: 4500,
        totalDeaths: 650,
        vaccinated: 5000,
        unvaccinated: 2500
    };

    // Line Chart for Confirmed Cases and Deaths
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: covidData.dates,
            datasets: [{
                label: 'Confirmed Cases',
                data: covidData.confirmedCases,
                backgroundColor: 'rgba(0, 255, 255, 0.2)',  // Neon cyan
                borderColor: 'rgba(0, 255, 255, 1)',        // Neon cyan
                borderWidth: 2,
                fill: true
            }, {
                label: 'Deaths',
                data: covidData.deaths,
                backgroundColor: 'rgba(255, 0, 255, 0.2)',  // Neon magenta
                borderColor: 'rgba(255, 0, 255, 1)',        // Neon magenta
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                        }
                    }
                }
            },
            interaction: {
                mode: 'index',
                intersect: false
            },
            elements: {
                line: {
                    tension: 0.1
                },
                point: {
                    radius: 5,
                    hoverRadius: 7
                }
            }
        }
    });

    // Pie Chart for Active vs Recovered Cases
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Active Cases', 'Recovered Cases'],
            datasets: [{
                data: [covidData.activeCases, covidData.recoveredCases],
                backgroundColor: ['rgba(0, 255, 255, 0.7)', 'rgba(255, 255, 0, 0.7)'], // Neon colors
                borderColor: ['rgba(0, 255, 255, 1)', 'rgba(255, 255, 0, 1)'], // Neon colors
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.label}: ${tooltipItem.raw}`;
                        }
                    }
                }
            }
        }
    });

    // Bar Graph for Confirmed Cases and Deaths
    const barCtx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: covidData.dates,
            datasets: [{
                label: 'Confirmed Cases',
                data: covidData.confirmedCases,
                backgroundColor: 'rgba(0, 255, 0, 0.7)', // Neon green
                borderColor: 'rgba(0, 255, 0, 1)',       // Neon green
                borderWidth: 1
            }, {
                label: 'Deaths',
                data: covidData.deaths,
                backgroundColor: 'rgba(255, 69, 0, 0.7)', // Neon red
                borderColor: 'rgba(255, 69, 0, 1)',       // Neon red
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                        }
                    }
                }
            },
            elements: {
                bar: {
                    borderRadius: 5,
                    borderSkipped: 'bottom'
                }
            }
        }
    });

    // Doughnut Chart for Vaccination Progress
    const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
    const doughnutChart = new Chart(doughnutCtx, {
        type: 'doughnut',
        data: {
            labels: ['Vaccinated', 'Unvaccinated'],
            datasets: [{
                data: [covidData.vaccinated, covidData.unvaccinated],
                backgroundColor: ['rgba(0, 255, 255, 0.7)', 'rgba(255, 105, 180, 0.7)'], // Neon colors
                borderColor: ['rgba(0, 255, 255, 1)', 'rgba(255, 105, 180, 1)'], // Neon colors
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.label}: ${tooltipItem.raw}`;
                        }
                    }
                }
            }
        }
    });
});
