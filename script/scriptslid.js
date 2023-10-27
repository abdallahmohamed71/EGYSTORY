let currentindex=1;
let slides =[
    {
     
        imgsrc:"./img/slid1.jpg",
    },
    {
        
        imgsrc:"./img/slid2.jpg",
    },
    {
        imgsrc:"./img/slid3.jpg",
    },
    {
        imgsrc:"./img/slid4.jpg",
    },


];
function renderslide(){
    let spandiv='';
    slides.forEach((element,index) => {
        spandiv += ` <span class="displey_current" onclick="nixetslid(${index})"><i class="fa-solid fa-circle fa-2xs"></i></span>`
    });
    let carsoul=document.querySelector("#carsoul");
    carsoul.innerHTML='';
    let slide=` 
    <img id="mainimg" src="${slides[currentindex].imgsrc}" alt="">
    <div class="col-12" id="navigation">
    </div>
    <div class="col-12" id="pagination">
       ${spandiv}
    </div>`;
    carsoul.innerHTML=slide;
};

renderslide();
function nixetslid(index){
let img= document.querySelector('#mainimg');
img.setAttribute("src",slides[index].imgsrc);
   

};
let cuindex=0;
let feadback =[
  {
    imgsrcFead:"./img/clint1.jpg" ,
    username:"Sam",
    paragraph:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptas labore ,inventore ex provident numquam magnam accusantium tempora repellat, laudantium voluptatem blanditiis soluta neque. Nisi mollitia amet quam ad natus",
  },
  {
    imgsrcFead:"./img/clint2.jpg",
    username:"Ema",
    paragraph:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptas labore ,inventore ex provident numquam magnam accusantium tempora repellat, laudantium voluptatem blanditiis soluta neque. Nisi mollitia amet quam ad natus",
  },
  {
    imgsrcFead:"./img/clint3.jpeg",
    username:"Nani",
    paragraph:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptas labore ,inventore ex provident numquam magnam accusantium tempora repellat, laudantium voluptatem blanditiis soluta neque. Nisi mollitia amet quam ad natus",
  },
];
renderslideFeadback ();
function renderslideFeadback (){
 let feadbackdiv= document.querySelector('.info_testimonial');
 
 feadbackdiv.innerHTML='';
//  feadbackdiv.forEach(ele => {
  
//  });
let fead=`
<div class="img_testimonial">
                            
 <img src="${feadback[cuindex].imgsrcFead}" width="100%" alt="">
</div>
<div class="text_testimonial" >
<div>
<h3>${feadback[cuindex].username}</h3>
</div>
<p>${feadback[cuindex].paragraph}</p>
</div>
`;
feadbackdiv.innerHTML = fead;


};

let nextslid= document.querySelector('.nslid');
function nslide(){
if(cuindex < feadback.length-1){
  cuindex++;

}else{
  cuindex=0;
}
renderslideFeadback ();

}
function pslide(){
  if(cuindex >0){
    cuindex--;
  
  }else{
      cuindex = feadback.length-1;
  }
  renderslideFeadback ();
}











// .........................slidenu
let sideMenuIndex = 0;
function openx() {
  if (sideMenuIndex == 0) {
    document.getElementById("nav").style.display = "flex";
    sideMenuIndex = 1;
  } else {
    document.getElementById("nav").style.display = "none";
    sideMenuIndex = 0;
  }
}
// ...................
let cattegory = 0;
    let licat_1 =document.querySelector("#_1");
    licat_1.addEventListener('click',()=>{
          if (cattegory == 0) {
    document.querySelector(".container_proucts").style.display = "block";
    document.querySelector(".categories").style.display = "none";
    document.querySelector("#carsoul").style.display = "none";
    document.querySelector(".Best_Seller").style.display = "none";
    cattegory = 1;
  } else {
    document.querySelector(".container_proucts").style.display = "none";
    // document.querySelector("#carsoul").style.display = "flex";
    // document.querySelector(".Best_Seller").style.display = "block";

    cattegory = 0;
  }
    })
    // ...................

let licat_2 =document.querySelector("#_2");
licat_2.addEventListener('click',()=>{
      if (cattegory == 0) {
document.querySelector(".container_proucts").style.display = "block";
document.querySelector(".categories").style.display = "none";
document.querySelector("#carsoul").style.display = "none";
document.querySelector(".Best_Seller").style.display = "none";
cattegory = 1;
} else {
document.querySelector(".container_proucts").style.display = "none";
// 

cattegory = 0;
}
})
// ...................

    let licat_3 =document.querySelector("#_3");
    licat_3.addEventListener('click',()=>{
          if (cattegory == 0) {
    document.querySelector(".container_proucts").style.display = "block";
    document.querySelector(".categories").style.display = "none";
    document.querySelector("#carsoul").style.display = "none";
    document.querySelector(".Best_Seller").style.display = "none";
    cattegory = 1;
  } else {
    document.querySelector(".container_proucts").style.display = "none";


    cattegory = 0;
  }
    })
    // ...................

let licat_4 =document.querySelector("#_4");
licat_4.addEventListener('click',()=>{
      if (cattegory == 0) {
document.querySelector(".container_proucts").style.display = "block";
document.querySelector(".categories").style.display = "none";
document.querySelector("#carsoul").style.display = "none";
document.querySelector(".Best_Seller").style.display = "none";
cattegory = 1;
} else {
document.querySelector(".container_proucts").style.display = "none";


cattegory = 0;
}
})
// ...................

    let licat_5 =document.querySelector("#_5");
    licat_5.addEventListener('click',()=>{
          if (cattegory == 0) {
    document.querySelector(".container_proucts").style.display = "block";
    document.querySelector(".categories").style.display = "none";
    document.querySelector("#carsoul").style.display = "none";
    document.querySelector(".Best_Seller").style.display = "none";
    cattegory = 1;
  } else {
    document.querySelector(".container_proucts").style.display = "none";


    cattegory = 0;
  }
    })
    // ...................

let licat_6 =document.querySelector("#_6");
licat_6.addEventListener('click',()=>{
      if (cattegory == 0) {
document.querySelector(".container_proucts").style.display = "block";
document.querySelector(".categories").style.display = "none";
document.querySelector("#carsoul").style.display = "none";
document.querySelector(".Best_Seller").style.display = "none";
cattegory = 1;
} else {
document.querySelector(".container_proucts").style.display = "none";

cattegory = 0;
}
})
    // ...................

    let licat_7 =document.querySelector("#_7");
    licat_6.addEventListener('click',()=>{
          if (cattegory == 0) {
    document.querySelector(".container_proucts").style.display = "block";
    document.querySelector(".categories").style.display = "none";
    document.querySelector("#carsoul").style.display = "none";
    document.querySelector(".Best_Seller").style.display = "none";
    cattegory = 1;
    } else {
    document.querySelector(".container_proucts").style.display = "none";
    
    cattegory = 0;
    }
    })
        // ...................

let licat_8 =document.querySelector("#_8");
licat_6.addEventListener('click',()=>{
      if (cattegory == 0) {
document.querySelector(".container_proucts").style.display = "block";
document.querySelector(".categories").style.display = "none";
document.querySelector("#carsoul").style.display = "none";
document.querySelector(".Best_Seller").style.display = "none";
cattegory = 1;
} else {
document.querySelector(".container_proucts").style.display = "none";

cattegory = 0;
}
})
    // ...................

    let licat_9 =document.querySelector("#_9");
    licat_6.addEventListener('click',()=>{
          if (cattegory == 0) {
    document.querySelector(".container_proucts").style.display = "block";
    document.querySelector(".categories").style.display = "none";
    document.querySelector("#carsoul").style.display = "none";
    document.querySelector(".Best_Seller").style.display = "none";
    cattegory = 1;
    } else {
    document.querySelector(".container_proucts").style.display = "none";
    
    cattegory = 0;
    }
    })
    // ....................








