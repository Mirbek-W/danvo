var iop2123 = document.querySelector(":root");


var iop313= document.getElementById("im");



function iop211(){
    iop2123.style.setProperty('--color1', '#000000');
    iop2123.style.setProperty('--color2', '#FFFFFF');
    document.getElementById("im").src = "img/1.png";
  }

function iop212(){
    iop2123.style.setProperty('--color1', '#FFFFFF');
    iop2123.style.setProperty('--color2', '#000000');
    document.getElementById("im").src = "img/4.png";
  }

let iop89=1

function iop21(){
  
  if(iop89===1){

    iop211(); 
    iop89=2;
    
  }
  
  else if(iop89===2) {
    iop212()
    iop89=1
    console.log(iop89);

  }
  console.log(iop89);
}
console.log(iop89);


// let btnTF = document.getElementById('btnTF');
//   let iop89 = true;
// btnTF.addEventListener('click',()=>{
//     if(iop89) {
//         iop211();
//         iop89 = !iop89;
//         console.log(iop89);
//     } else {
//         iop212();
//         iop89 = true;
//         console.log(iop89);
//     }
// })




