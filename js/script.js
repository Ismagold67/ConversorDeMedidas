var res = document.querySelector('div#mask')
var data = document.querySelector('input#NUM')
var Comp = document.querySelector('input#Comp')
var Mass = document.querySelector('input#Mass')
var Tempe = document.querySelector('input#Temp')
var img = document.getElementById('fot')

Tempe.addEventListener('mouseenter', Converter)
Tempe.addEventListener('mouseleave', Sair)
Comp.addEventListener('mouseenter', Converter1)
Comp.addEventListener('mouseleave', Sair1)
Mass.addEventListener('mouseenter', Converter2)
Mass.addEventListener('mouseleave', Sair2)

function Converter() {
    Tempe.style.background = '#E00013'
}
function Converter1() {
    Comp.style.background = '#023535'
}
function Converter2() {
    Mass.style.background = '#DBCA0B'
}
function Sair() {
    Tempe.style.background = 'white'
}
function Sair1() {
    Comp.style.background = 'white'
}
function Sair2() {
    Mass.style.background = 'white'
}

function convert() {
   //.replace(',','.')
    //res.innerHTML = ''
    var temp = Number(data.value)
    document.body.style.backgroundImage = "url(temper3.png)"
    res.style.color = "black"
    if(data.value.length > 0) {
        var fahren = ((temp * 1.8) + 32).toLocaleString('pt-BR').replace('.', ',')
        var kelvin = (temp + 273.15).toLocaleString('pt-BR').replace('.', ',')
        res.innerHTML = `<strong>O número ${temp} foi representado em Celsius(°C) e será convertido entre as demais temperaturas:</strong><br>`
  
       res.innerHTML += `<strong><p>${kelvin}°K (Kelvin)</p>`
       res.innerHTML += `<p><strong>${fahren}°F (Fahrenheit)</p></strong>`

    }
}

function comp() {
    let comps = ["quilometros (km)", "hectometros (Hm)", "decâmetros (Dam)", "decímetros(dm)", "centímentros(cm)", "milímetros(mm)"]
    var temp = Number(data.value)
    document.body.style.backgroundImage = "url(temper4.png)"
    res.style.color = "black"
    if(data.value.length > 0) {
        res.innerHTML = `<strong>O número ${temp} foi representado em metros(m) e será convertido entre as demais medidas:</strong>`
        res.innerHTML += `<p><strong>${(temp / 1000).toLocaleString('pt-BR').replace('.',',')} ${comps[0]}</p>
                            <p>${(temp/ 100).toLocaleString('pt-BR').replace('.',',')} ${comps[1]}</p>
                             <p>${(temp / 10).toLocaleString('pt-BR').replace('.',',')} ${comps[2]}</P>
                             <p>${(temp * 10).toLocaleString('pt-BR').replace('.',',')} ${comps[3]}</p>
                             <p>${(temp * 100).toLocaleString('pt-BR').replace('.',',')} ${comps[4]}</P>
                             <p>${(temp * 1000).toLocaleString('pt-BR').replace('.',',')} ${comps[5]}</strong></p>`

    }
}

function mass() {
    let comps = ["quilograma (kg)", "hectograma (hg)", "decagrama (dag)", "decigrama(dg)", "centigrama(cg)", "miligrama(mg)"]
    var temp = Number(data.value)
    document.body.style.backgroundImage = "url(cloc2.png)"
    res.style.color = "black"
    if(data.value.length > 0) {
        res.innerHTML = `<strong>O número ${temp} foi representado em grama(g) e será convertido entre as demais medidas:</strong>`
        res.innerHTML += `<p><strong>${(temp / 1000).toLocaleString('pt-BR').replace('.',',')} ${comps[0]}</p>
                            <p>${(temp/ 100).toLocaleString('pt-BR').replace('.',',')} ${comps[1]}</p>
                             <p>${(temp / 10).toLocaleString('pt-BR').replace('.',',')} ${comps[2]}</P>
                             <p>${(temp * 10).toLocaleString('pt-BR').replace('.',',')} ${comps[3]}</p>
                             <p>${(temp * 100).toLocaleString('pt-BR').replace('.',',')} ${comps[4]}</P>
                             <p>${(temp * 1000).toLocaleString('pt-BR').replace('.',',')} ${comps[5]}</strong></p>`

    }
}