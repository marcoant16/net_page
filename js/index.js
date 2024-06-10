// button header
const butHam = document.querySelector('.butHam');
const barraOne = document.querySelector('.barraOne');
const barraTwo = document.querySelector('.barraTwo');
const barraThree = document.querySelector('.barraThree');
const headerCell = document.querySelector('#head_cell');
let cont_control = true

butHam.addEventListener('click',()=>{
   /* barraTwo.classList.toggle('barraNull');
    barraOne.classList.toggle('barmoveOne');
    barraThree.classList.toggle('barmoveTwo');
    headerCell.classList.toggle('headcdis');*/

    if(cont_control){
        barraOne.classList.add('barmoveOne');
        barraThree.classList.add('barmoveTwo');
        barraTwo.classList.add('barraNull');
        headerCell.style.display = 'flex';
        document.body.classList.add('noScroll')

        cont_control = false
    }else{
        barraOne.classList.remove('barmoveOne');
        barraThree.classList.remove('barmoveTwo');
        barraTwo.classList.remove('barraNull');
        headerCell.style.display = 'none';
        document.body.classList.remove('noScroll')

        cont_control = true
    }
});


//slider
let contSlider = 1

document.getElementById('radio1').checked = true

setInterval(()=>{
    nextImg()
},6000)

function nextImg(){
    contSlider++

    if(contSlider > 4){
        contSlider = 1
    }    

    document.getElementById(`radio${contSlider}`).checked = true
 
}

 //form
 let form = document.getElementsByTagName('form')[0];
 let res_nega_name = document.querySelector('#neganame');
 let res_nega_mail = document.querySelector('#negaemail');
 let res_nega_num = document.querySelector('#negaphone');

 const reg_name = /(^[a-zA-Zçóòõôãáàâúùéèêíìûúù]+)(\s+)?([a-zA-Zçóòõôãáàâúùéèêíìûúù]+)?(\s+)?([a-zA-Zçóòõôãáàâúùéèêíìûúù]+)?(\s+)?([a-zA-Zçóòõôãáàâúùéèêíìûúù]+)?(\s+)?([a-zA-Zçóòõôãáàâúùéèêíìûúù]+)?(\s+)?([a-zA-Zçóòõôãáàâúùéèêíìûúù]+)?(\s+)?([a-zA-Zçóòõôãáàâúùéèêíìûúù]+)?(\s+)?([a-zA-Zçóòõôãáàâúùéèêíìûúù]+)?$/;
 const reg_mail = /(^[a-zA-Zçóòõôãáàâúùéèêíìûúù0-9]{1})([a-zA-Zçóòõôãáàâúùéèêíìûúù0-9\.\-_]+)(@)([a-zA-Zçóòõôãáàâúùéèêíìûúù0-9\-]{2,})(\.)([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/;
 const reg_num = /(^[0-9]{6,})$/;

 form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let name_input = document.querySelector('#textInputOne').value;
    let email_input = document.querySelector('#emailInputOne').value;
    let number_input = document.querySelector('#telInputOne').value;
    
    let te_name = reg_name.test(name_input);
    let te_mail = reg_mail.test(email_input);
    let te_number = reg_num.test(number_input);

    console.log(name_input,email_input,number_input)

   if(te_name == true && te_mail == true && te_number == true){
        window.location = 'https://en.touhouwiki.net/wiki/Touhou_Wiki';
    }else{

        if(te_name == false){
            res_nega_name.innerHTML = 'Wrong name formatting, type again';
        }

        if(te_mail == false){
            res_nega_mail.innerHTML = 'Wrong email formatting, type again';
        }

        if(te_number == false){
            res_nega_num.innerHTML = 'Wrong phone number formatting, type again';
        }
      
    }
 })



