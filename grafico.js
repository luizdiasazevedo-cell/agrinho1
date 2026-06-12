// ================================
// CONFIGURAÇÃO GLOBAL
// ================================

Chart.defaults.font.family = 'Arial';
Chart.defaults.color = '#333';


// ================================
// GRÁFICO POSITIVO
// ================================

const ctx = document.getElementById('graficoAgro');

new Chart(ctx, {

    type: 'bar',

    data: {

        labels: [
            'Produção',
            'Água',
            'Energia',
            'Preservação'
        ],

        datasets: [{

            label: 'Nível Sustentável (%)',

            data: [85, 70, 65, 90],

            backgroundColor: [
                'rgba(67,160,71,0.85)',
                'rgba(38,166,154,0.85)',
                'rgba(102,187,106,0.85)',
                'rgba(46,125,50,0.85)'
            ],

            borderColor: [
                '#43a047',
                '#26a69a',
                '#66bb6a',
                '#2e7d32'
            ],

            borderWidth: 2,

            borderRadius: 15,

            hoverBackgroundColor: [
                '#66bb6a',
                '#4db6ac',
                '#81c784',
                '#388e3c'
            ]
        }]
    },

    options: {

        responsive: true,

        animation: {
            duration: 2000,
            easing: 'easeOutBounce'
        },

        plugins: {

            legend: {
                display: false
            },

            title: {
                display: true,
                text: '🌱 Indicadores Positivos',
                color: '#1b5e20',

                font: {
                    size: 22,
                    weight: 'bold'
                }
            },

            tooltip: {

                backgroundColor: '#1b5e20',

                titleColor: '#ffffff',

                bodyColor: '#f8f7f7',

                padding: 12,

                cornerRadius: 10,

                callbacks: {
                    label: function(context) {
                        return context.raw + '% sustentável';
                    }
                }
            }
        },

        scales: {

            y: {

                beginAtZero: true,
                max: 100,

                ticks: {
                    color: '#555',
                    font: {
                        size: 14
                    }
                },

                grid: {
                    color: '#412272'
                }
            },

            x: {

                ticks: {
                    color: '#333',
                    font: {
                        weight: 'bold'
                    }
                },

                grid: {
                    display: false
                }
            }
        }
    }
});


// ================================
// GRÁFICO NEGATIVO
// ================================

const impacto = document.getElementById('graficoImpactos');

new Chart(impacto, {

    type: 'doughnut',

    data: {

        labels: [
            'Desmatamento',
            'Poluição',
            'Queimadas',
            'Agrotóxicos'
        ],

        datasets: [{

            data: [35, 25, 20, 20],

            backgroundColor: [
                '#e53935',
                '#1e88e5',
                '#fb8c00',
                '#8e24aa'
            ],

            borderColor: '#fffefe',

            borderWidth: 5,

            hoverOffset: 20
        }]
    },

    options: {

        responsive: true,

        animation: {
            animateRotate: true,
            duration: 2200
        },

        cutout: '58%',

        plugins: {

            legend: {

                position: 'bottom',

                labels: {

                    padding: 20,

                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            },

            title: {

                display: true,

                text: '⚠ Impactos Ambientais',

                color: '#c62828',

                font: {
                    size: 22,
                    weight: 'bold'
                }
            },

            tooltip: {

                backgroundColor: '#222',

                titleColor: '#fff',

                bodyColor: '#fff',

                padding: 12,

                cornerRadius: 10,

                callbacks: {
                    label: function(context) {
                        return context.raw + '% de impacto';
                    }
                }
            }
        }
    }
});