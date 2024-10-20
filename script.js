//box
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkBoxes)

checkBoxes()

function checkBoxes(){
    const triggerBottom=window.innerHeight/5*4

    boxes.forEach(box=>{
        const boxTop =box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }

    })
}

//animasi judul nama hero
//Gusion
const name1 = document.querySelectorAll('.nama2')

window.addEventListener('scroll',checkName)

checkName()

function checkName(){
    const triggerBottom=window.innerHeight/5*4

    name1.forEach(name=>{
        const nameTop =name.getBoundingClientRect().top
        if(nameTop < triggerBottom){
            name.classList.add('show')
        }else{
            name.classList.remove('show')
        }

    })
}


//Ling
const name2 = document.querySelectorAll('.nama3')

window.addEventListener('scroll',checkName2)

checkName2()

function checkName2(){
    const triggerBottom=window.innerHeight/5*4

    name2.forEach(name2=>{
        const nameTop =name2.getBoundingClientRect().top
        if(nameTop < triggerBottom){
            name2.classList.add('show')
        }else{
            name2.classList.remove('show')
        }

    })
}

//Hayabusa
const name3 = document.querySelectorAll('.nama4')

window.addEventListener('scroll',checkName3)

checkName3()

function checkName3(){
    const triggerBottom=window.innerHeight/5*4

    name3.forEach(name3=>{
        const nameTop =name3.getBoundingClientRect().top
        if(nameTop < triggerBottom){
            name3.classList.add('show')
        }else{
            name3.classList.remove('show')
        }

    })
}

//Lancelot
const name4 = document.querySelectorAll('.nama5')

window.addEventListener('scroll',checkName4)

checkName4()

function checkName4(){
    const triggerBottom=window.innerHeight/5*4

    name4.forEach(name4=>{
        const nameTop =name4.getBoundingClientRect().top
        if(nameTop < triggerBottom){
            name4.classList.add('show')
        }else{
            name4.classList.remove('show')
        }

    })
}

//sound effect hero

//Aamon
var Playing = false;

    function toggleSound1() {
        const image = document.getElementById('gambar');
        const sound = document.getElementById('sound1')

        if (!Playing) {
            image.src = 'btnon.png'; // Ganti gambar
            sound.play();
            image.classList.add('active');
        } else {
            image.src = 'btnoff.png'; // Kembali ke gambar semula
            sound.pause();
            sound.currentTime = 0;
            image.classList.remove('active');
        }

        Playing = !Playing;
    }

//Gusion
var Playing = false;

    function toggleSound2() {
        const image = document.getElementById('gambar2');
        const sound = document.getElementById('sound2')

        if (!Playing) {
            image.src = 'btnon.png'; // Ganti gambar
            sound.play();
            image.classList.add('active');
        } else {
            image.src = 'btnoff.png'; // Kembali ke gambar semula
            sound.pause();
            sound.currentTime = 0;
            image.classList.remove('active');
        }

        Playing = !Playing;
    }

//Ling
var Playing = false;

    function toggleSound3() {
        const image = document.getElementById('gambar3');
        const sound = document.getElementById('sound3')

        if (!Playing) {
            image.src = 'btnon.png'; // Ganti gambar
            sound.play();
            image.classList.add('active');
        } else {
            image.src = 'btnoff.png'; // Kembali ke gambar semula
            sound.pause();
            sound.currentTime = 0;
            image.classList.remove('active');
        }

        Playing = !Playing;
    }

//Hayabusa
var Playing = false;

    function toggleSound4() {
        const image = document.getElementById('gambar4');
        const sound = document.getElementById('sound4')

        if (!Playing) {
            image.src = 'btnon.png'; // Ganti gambar
            sound.play();
            image.classList.add('active');
        } else {
            image.src = 'btnoff.png'; // Kembali ke gambar semula
            sound.pause();
            sound.currentTime = 0;
            image.classList.remove('active');
        }

        Playing = !Playing;
    }

//Lancelot
var Playing = false;

    function toggleSound5() {
        const image = document.getElementById('gambar5');
        const sound = document.getElementById('sound5')

        if (!Playing) {
            image.src = 'btnon.png'; // Ganti gambar
            sound.play();
            image.classList.add('active');
        } else {
            image.src = 'btnoff.png'; // Kembali ke gambar semula
            sound.pause();
            sound.currentTime = 0;
            image.classList.remove('active');
        }

        Playing = !Playing;
    }