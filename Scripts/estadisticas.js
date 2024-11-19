//Grafico de las edades
var dom = document.getElementById('graficoedades');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        {
            name: 'Datos',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 4048, name: 'Hombres' },
                { value: 3000, name: 'Mujeres' }
            ]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);

//Grafico de los libros mas pedidos
var dom2 = document.getElementById('graficopedidos');
var myChart2 = echarts.init(dom2, null, {
    renderer: 'canvas',
    useDirtyRect: false
});

var option2;

option2 = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'center',
        right: 10
    },
    series: [
        {
            name: 'Datos',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['30%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 12, name: 'Poesia' },
                { value: 38, name: 'Ciencia ficcion' },
                { value: 13, name: 'Terror' },
                { value: 46, name: 'Clasica' },
                { value: 53, name: 'Literatura infantil' },
                { value: 13, name: 'Rock' },
                { value: 43, name: 'Comedia' }
            ]
        }
    ]
};

if (option2 && typeof option2 === 'object') {
    myChart2.setOption(option2);
}

window.addEventListener('resize', myChart2.resize);

//Grafico de los libros mas gustados
var dom3 = document.getElementById('graficogustadoslibros');
var myChart3 = echarts.init(dom3, null, {
    renderer: 'canvas',
    useDirtyRect: false
});

var option3;

option3 = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'center',
        right: 10
    },
    series: [
        {
            name: 'Datos',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['30%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 12, name: 'Poesia' },
                { value: 38, name: 'Ciencia ficcion' },
                { value: 13, name: 'Terror' },
                { value: 46, name: 'Clasica' },
                { value: 23, name: 'Literatura infantil' },
                { value: 13, name: 'Rock' },
                { value: 28, name: 'Aventura' },
                { value: 17, name: 'Poesia' },
                { value: 43, name: 'Comedia' }
            ]
        }
    ]
};

if (option3 && typeof option3 === 'object') {
    myChart3.setOption(option3);
}

window.addEventListener('resize', myChart3.resize);

$(document).ready(function () {
    for (let i = 0; i < 50; i++) {
        let edad = `
                <tr>
                    <td>${i}</td>
                    <td>${i+18} años</td>
                    <td>${i*198} usuarios</td>
                </tr>
            `;
        $("#tablaedades").append(edad)
    }
    for (let i = 0; i < 50; i++) {
        let pedido = `
                <tr>
                    <td>${i}</td>
                    <td>El principito</td>
                    <td>Literatura infantil</td>
                    <td>Chalino Sánchez</td>
                    <td>${i*197}</td>
                </tr>
            `;
        $("#tablapedidos").append(pedido)
    }
    for (let i = 0; i < 50; i++) {
        let gustadolibro = `
                <tr>
                    <td>${i}</td>
                    <td>Harrypoter y la cosa esa que hace piu</td>
                    <td>Literatura infantil</td>
                    <td>Chalino Sánchez</td>
                    <td>${i*197}</td>
                </tr>
            `;
        $("#tablagustadoslibros").append(gustadolibro)
    }
    for (let i = 0; i < 50; i++) {
        let gustadoautor = `
                <tr>
                    <td>${i}</td>
                    <td>Chalino Sánchez</td>
                    <td>${i*197}</td>
                </tr>
            `;
        $("#tablagustadosautores").append(gustadoautor)
    }
})