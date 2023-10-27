const ditlproducts = document.querySelector('.ditls_products');
let cart =JSON.parse(localStorage.getItem('cart')) || [];









showditlsproduct();
const imgDetls =document.querySelectorAll('.card_img_top ');
function rendershowproduct(){
    let ditlproducts = document.querySelector('.ditls_products');
    ditlproducts.innerHTML='';
cart.forEach(product => {
    ditlproducts.innerHTML =`
    <div class="col-12 ex_btn" onclick="Exbtn()"><i class="fa-solid fa-x"></i> </div>
    <div class="col-12  All_ditls">
    <div class="col-12 col-md-12 col-lg-6 img_product">
        <div class="lg_img">
            <img src="${product.themobile}" alt="">
        </div>
        <div class="sm_img">
            <span class="imgs"><img src="${product.images[0]}" alt=""></span>
            <span class="imgs"><img src="${product.images[1]}" alt=""></span>
            <span class="imgs"><img src="${product.images[2]}" alt=""></span>
            <span class="imgs"><img src="${product.images[3]}" alt=""></span>
        </div>
    </div>      
    <div class="col-12 col-md-12 col-lg-6 text_product">
        <a href="../index.html"><i class="fa-solid fa-chevron-left"></i> Go back</a>
        <h2>${product.title}</h2>
              <div class="sel_color">                               
                <select name="Select Color" id="pick-color">
                     <option value="select color" disabled selected>select color</option>
                     <option value="transparent">default</option>
                    <option value="red">Red</option>
                    <option value="Grean">Grean</option>
                    <option value="White">White</option>
                    <option value="Black">Black</option>
                </select>
              </div>
              <h2>Details:</h2>
              <p>
                8K SUPER STEADY VIDEO: Shoot videos that rival how epic your life is with 
                stunning 8K recording, the highest recording resolution available on a smartphone
                <br>
                ${product.description}
              </p>
              <h2 class="Total_price fs-3">$ ${product.price}</h2>
              <ul class="product-rate">
                <li class="stard">★</li>
                <li class="stard">★</li>
                <li class="stard">★</li>
                <li class="stard">★</li>
                <li class="stard">★</li>
            </ul>
            ${(cart.find(ele => ele.id == product.id) )?  
                `<h5 class="fw-bolder text-center">carted</h5>`
                :
             `<button herf="#" class=" btn_add_to_cart" data-target="${product.id}"><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>`}
    </div>
</div>
    `
});
};

    const imgD_etls =document.querySelectorAll('.card_img_top ');
    imgDetls.forEach(img => {
        img.addEventListener('click',() =>{
            
          document.querySelector(".ditls_products").style.display = "block";
            
            rendershowproduct();
          savecartlocalsrg();



        //   calcCartcount();
        })
        })


let ex_btn=document.querySelector('.ex_btn');
function Exbtn(){
    let exit = 0;

  if (exit == 0) {
    document.querySelector(".ditls_products").style.display = "none";
    exit = 1;
    savecartlocalsrg();
  }
}




function showditlsproduct(){
    const imgDetls =document.querySelectorAll('.card_img_top ');
    imgDetls.forEach(btn => {
        btn.addEventListener('click',() =>{
            rendershowproduct();
        //   savecartlocalsrg();
        //   calcCartcount();
        })
        })

}
