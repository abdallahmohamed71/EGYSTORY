const cartcount = document.querySelector('.cart_num');
const cartcontainer=document.querySelector('.cart_cont');
const productscont= document.querySelector('.cart tbody');
const totalprice = document.querySelector('.Total_price');
const totalquantaty =document.querySelector('.aitems_num');
let cart =JSON.parse(localStorage.getItem('cart')) || [];


calcCartcount();
renderproduct();
addevents();
checkcartEmpty()
calctotalprice();
function renderproduct(){
    productscont.innerHTML='';
cart.forEach(product => {
  
    productscont.innerHTML +=`
    
    <tr class="cart_product col-12 " data-id='${product.id}'>
                    <td class="iconExetinmedya"> 
                    <span class="remove_product"><i class="fa-solid fa-x"></i></span>
                    </td>
                    
                    <td class=" col-sx-12 col-md-3 col-lg-3">
                        <div class="img_cart">
                            <img class="cart_product_img" width="100%" src="${product.themobile}" alt="">
                        </div>
                    </td>
                    <td class=" col-sx-12 col-md-3 col-lg-3">
                        <h5>${product.title}</h5>
                    </td>
                    <td class=" col-sx-6 col-md-3 col-lg-3">
                        <div class="cart_product_amount">
                            <span class="change_amount change_amount_dec">-</span>
                            <span class="quantity">${product.quantity}</span>
                            <span class="change_amount change_amount_inc">+</span>
                        </div>
                    </td>
                    <td class=" col-sx-6 col-md-3 col-lg-3">
                        <div class="">
                            <span class="">$ ${product.price}</span>
                            <span class="remove_product icon_remov"><i class="fa-solid fa-x"></i></span>
                        </div>
                    </td>
                    
                </tr>
                
    `
});
};

function addevents(){
const removeAllbtn = document.querySelector('.remove_all_product');
const removebtns =document.querySelectorAll('.remove_product');
const increasebtns =document.querySelectorAll('.change_amount_inc');
const dncreasebtns =document.querySelectorAll('.change_amount_dec');
increasebtns.forEach(btn => {
    btn.addEventListener('click',()=>{
        const parent = btn.closest('.cart_product');
          const id = parent.dataset.id;
          const productobj = cart.find(product =>{
            return product.id == id;
        })
        productobj.quantity++
        parent.querySelector('.quantity').textContent= productobj.quantity+0;
          handelCartcheck();
    })
    
});
dncreasebtns.forEach(btn => {
    btn.addEventListener('click',()=>{
        const parent = btn.closest('.cart_product');
          const id = parent.dataset.id;
          const productobj = cart.find(product =>{
            return product.id == id;
        })
       if(productobj.quantity > 1){
        productobj.quantity --;
       }
        parent.querySelector('.quantity').textContent= productobj.quantity -0 ;
          handelCartcheck();
          
    })
    
});

removeAllbtn.addEventListener('click',()=>{
    cart =[];
 handelCartcheck()
});
removebtns.forEach(btn =>{
    btn.addEventListener('click',()=>{
        const parent = btn.closest('.cart_product');
        const id =parent.getAttribute('data-id');
        
        cart = cart.filter(ele => {
            return ele.id != id ;
                } );
       
        handelCartcheck();
        parent.remove();
    })
});
}
function handelCartcheck(){
    savecartlocalsrg();
       checkcartEmpty();
       calcCartcount();
       calctotalprice();
}
function savecartlocalsrg(){
    localStorage.setItem('cart',JSON.stringify(cart));
    // localStorage.setItem('cart',JSON.stringify(cart))
}

function calcCartcount(){
    cartcount.textContent = cart.length;
}
function checkcartEmpty(){
      if(cart.length == 0){
        cartcontainer.innerHTML =`<h2 class="fw-bolder text-center ">Cart is Empty </h2>`
      }
}
function calctotalprice(){
    totalprice.textContent ='$'+ cart.reduce((acc,ele)=>{
       return  acc + (ele.quantity * ele.price)
    }, 0)

    totalquantaty.textContent = cart.reduce((acc,ele)=>{
        return  acc + (ele.quantity )
     }, 0)
}
 



const file = document.querySelector("#file");
const img_profile =  document.querySelector('.add_img');
let upload_img = "";  
renderimg();
function renderimg(){
    file.addEventListener('change',function (){
     const reader = new FileReader();
     reader.addEventListener('load',() =>{
        upload_img = reader.result;
        let imgbox =   document.querySelector("#imgbox");
        imgbox.style.backgroundImage = `url(${upload_img})`;
        img_profile.remove();
        file.style.visibility='hidden';
        
     });
     reader.readAsDataURL(this.files[0]);
    //  let add = [];
    //  add.push(file.value);
    display_imgacount();
})
}
function display_imgacount(){



    // localStorage.setItem('imgobj',imgobj.imgob);
    // let display_imgacount= document.querySelector('.img_profile').innerHTML +=`${localStorage.getItem('upload_img',file.value)}`;
}
// ..........................................menu
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

// .............display acount in cart.....................
savecartlocalsrglogin();

function savecartlocalsrglogin(){
    let mail= document.querySelector('#display_email').placeholder=`${localStorage.getItem('useremail','useremailvl')}`;
let pas= document.querySelector('#display_password').placeholder=`${localStorage.getItem('password','passwordvl')}`;
let username= document.querySelector('#display_username').placeholder=`${localStorage.getItem('username','usernamevl')}`;
// localStorage.clear();
let delacount =document.querySelector('.delet_account');
delacount.addEventListener('click',()=>{
    localStorage.removeItem('useremail','useremailvl');
    localStorage.removeItem('username','usernamevl');
    localStorage.removeItem('password','passwordvl');
    setTimeout(function(){
        window.location.assign("./login/signup.html")
        },1000);
})
let signout =document.querySelector('signout');
signout.addEventListener('click',()=>{
    window.location.assign("./index.html");
})
}


// edit acount
// function editacount(){
// let edit = document.querySelector("edit");

//     edit.addEventListener('click',()=>{
//         let edit_email =document.querySelector('#display_email').value =`${localStorage.setItem('useremail','useremailvl')}`;
//         let edit_password =document.querySelector('#display_password').value =`${localStorage.setItem('password','passwordvl')}`;

//     })
// }



// ...........................................













