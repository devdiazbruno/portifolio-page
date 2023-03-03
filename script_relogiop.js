function relogio(){
    var hora = document.querySelector('div.hora')
    var min = document.querySelector('div.min')
    var seg = document.querySelector('div.seg')

    var nh = document.querySelector('div.nh')


    var data = new Date()
    var rhora = data.getHours()
    var rmin = data.getMinutes()
    var rseg = data.getSeconds()


    
    hora.innerHTML=`${rhora} hr`
    min.innerHTML= `${rmin} min`
    seg.innerHTML=`${rseg} seg`

    

}

setInterval(relogio,1000) //nome da função e tempo em segundos