
const img1 = document.getElementById('img1')
const img1pv = document.getElementById('img1pv')

function imageOne(){
    img1.style.display = 'block'
    img1pv.style.display = 'none'
}

function imageOnePV(){
    img1pv.style.display = 'block'
    img1.style.display = 'none'
}

const img3 = document.getElementById('img3')
const img3apv = document.getElementById('img3apv')
const img3bpv = document.getElementById('img3bpv')
const img3cpv = document.getElementById('img3cpv')
const img3dpv = document.getElementById('img3dpv')
const img3epv = document.getElementById('img3epv')

function image3(){
    img3.style.display = 'block'
    img3apv.style.display = 'none'
    img3bpv.style.display = 'none'
    img3cpv.style.display = 'none'
    img3dpv.style.display = 'none'
    img3epv.style.display = 'none'
}

function image3PV(){
    img3apv.style.display = 'block'
    img3bpv.style.display = 'block'
    img3cpv.style.display = 'block'
    img3dpv.style.display = 'block'
    img3epv.style.display = 'block'
    img3.style.display = 'none'
}

const img4 = document.getElementById('img4')
const img4apv = document.getElementById('img4apv')
const img4bpv = document.getElementById('img4bpv')

function image4(){
    img4.style.display = 'block'
    img4apv.style.display = 'none'
    img4bpv.style.display = 'none'
}

function image4PV(){
    img4.style.display = 'none'
    img4apv.style.display = 'block'
    img4bpv.style.display = 'block'
}

const img5a = document.getElementById('img5a')
const img5b = document.getElementById('img5b')
const img5c = document.getElementById('img5c')
const img5apv = document.getElementById('img5apv')
const img5bpv = document.getElementById('img5bpv')
const img5cpv = document.getElementById('img5cpv')

function image5(){
    img5a.style.display = 'block'
    img5b.style.display = 'block'
    img5c.style.display = 'block'
    img5apv.style.display = 'none'
    img5bpv.style.display = 'none'
    img5cpv.style.display = 'none'
}

function image5PV(){
    img5apv.style.display = 'block'
    img5bpv.style.display = 'block'
    img5cpv.style.display = 'block'
    img5a.style.display = 'none'
    img5b.style.display = 'none'
    img5c.style.display = 'none'
}

const img6 = document.getElementById('img6')
const img6pv = document.getElementById('img6pv')

function image6(){
    img6.style.display = 'block'
    img6pv.style.display = 'none'
}

function image6PV(){
    img6pv.style.display = 'block'
    img6.style.display = 'none'
}

const img7 = document.getElementById('img7')
const img7pv = document.getElementById('img7pv')

function image7(){
    img7.style.display = 'block'
    img7pv.style.display = 'none'
}

function image7PV(){
    img7pv.style.display = 'block'
    img7.style.display = 'none'
}

document.querySelectorAll('#oversee .container .imgEdit img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.img-popup').style.display = 'block'
        document.querySelector('.img-popup img').src = image.getAttribute('src')
    }
})

document.querySelector('.img-popup span').onclick = () =>{
    document.querySelector('.img-popup').style.display = 'none'
}