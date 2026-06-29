let header_navbar = document.querySelector(".header_nav_bar0");
let menu_icon = document.querySelector(".header_nav_bar_icon");
let menu_flag = 0;



// top & footer navbar click active -----------------------------------------------------------------------------------------
let home = document.getElementById("home");
let menu_top = document.getElementById("menu0");
let sale = document.getElementById("sale");
let news = document.getElementById("news");
let contact = document.getElementById("contact");

let home_footer = document.getElementById("home_footer");
let menu_footer = document.getElementById("menu_footer");
let sale_footer = document.getElementById("sale_footer");
let news_footer = document.getElementById("news_footer");
let contact_footer = document.getElementById("contact_footer");

let header_content = document.querySelector(".header_content");
let menu_section = document.getElementById("main_top");
let saleoff_section = document.querySelector(".saleoff");
let search_section = document.querySelector(".search");
let footer_section = document.querySelector(".footer");

home.addEventListener("click", function() {
    var y = header_content.offsetTop - 100;
    window.scrollTo({top: y, behavior: 'smooth'})
})
home_footer.addEventListener("click", function() {
    var y = header_content.offsetTop - 100;
    window.scrollTo({top: y, behavior: 'smooth'})
})

menu_top.addEventListener("click", function() {
    var y = menu_section.offsetTop - 100;
    window.scrollTo({top: y, behavior: 'smooth'})
})
menu_footer.addEventListener("click", function() {
    var y = menu_section.offsetTop - 100;
    window.scrollTo({top: y, behavior: 'smooth'})
})

sale.addEventListener("click", function() {
    var y = saleoff_section.offsetTop - 100;
    window.scrollTo({top: y, behavior: 'smooth'})
})
sale_footer.addEventListener("click", function() {
    var y = saleoff_section.offsetTop - 100;
    window.scrollTo({top: y, behavior: 'smooth'})
})

news.addEventListener("click", function() {
    var y = search_section.offsetTop - 100;
    window.scrollTo({top: y, behavior: 'smooth'})
})
news_footer.addEventListener("click", function() {
    var y = search_section.offsetTop - 100;
    window.scrollTo({top: y, behavior: 'smooth'})
})

contact.addEventListener("click", function() {
    var y = footer_section.offsetTop
    window.scrollTo({top: y, behavior: 'smooth'})
})
contact_footer.addEventListener("click", function() {
    var y = footer_section.offsetTop
    window.scrollTo({top: y, behavior: 'smooth'})
})

// top navbar items active class -----------------------------------------------------
window.addEventListener("scroll", function() {
    let y = window.pageYOffset;

    if(y < menu_section.offsetTop) {
        home.classList.add("nav_bar_itams_active");
    }
    else{
        home.classList.remove("nav_bar_itams_active");
    }

    if(y > menu_section.offsetTop && y < (saleoff_section.offsetTop - 100)) {
        // console.log(y)
        menu_top.classList.add("nav_bar_itams_active");
    }
    else {
        menu_top.classList.remove("nav_bar_itams_active");
    }

    if(y > (saleoff_section.offsetTop - 100) && y < (search_section.offsetTop - 200)) {
        sale.classList.add("nav_bar_itams_active");
    }
    else {
        sale.classList.remove("nav_bar_itams_active");
    }

    if(y > (search_section.offsetTop - 200)) {
        news.classList.add("nav_bar_itams_active");
    }
    else {
        news.classList.remove("nav_bar_itams_active");
    }
})


// add - mines burger count header_content --------------------------------------------------------------------------------------------
let add = document.getElementById("add");
let mines = document.getElementById("mines");
let count = document.getElementById("count");
let add1 = document.getElementById("add1");
let mines1 = document.getElementById("mines1");
let count1 = document.getElementById("count1");

add.addEventListener("click", function() {
    let n = count.innerHTML;
    n++;
    count.innerHTML = n;
})
add1.addEventListener("click", function() {
    let n = count1.innerHTML;
    n++;
    count1.innerHTML = n;
})

mines.addEventListener("click", function() {
    let n = count.innerHTML;
    if(n > 0) {
        n--;
        count.innerHTML = n;
    }
})
mines1.addEventListener("click", function() {
    let n = count1.innerHTML;
    if(n > 0) {
        n--;
        count1.innerHTML = n;
    }
})

// menu open_close ----------------------------------------------------------------------------------------------------
let arrow = document.querySelector(".arrow")
menu_icon.addEventListener("click", function() {
    if(menu_flag == 0) {
        header_navbar.style.left = "0";
        header_navbar.classList.add("header_nav_bar_active");
        menu_flag = 1;
        arrow.style.display = "block"
    }else {

        if(window.innerWidth >  576)
            header_navbar.style.left = "-60%";
        else if(window.innerWidth > 410 && window.innerWidth < 576)
            header_navbar.style.left = "-60%";
        else
            header_navbar.style.left = "-60%";

        header_navbar.classList.remove("header_nav_bar_active");
        menu_flag = 0;
        arrow.style.display = "none"
    }
})

// close menu when resize window
window.addEventListener("resize", function() {
    if(menu_flag == 1) {
        if(window.innerWidth > 576)
            header_navbar.style.left = "-60%";
        else if(window.innerWidth > 410 && window.innerWidth < 576)
            header_navbar.style.left = "-60%";
        else
            header_navbar.style.left = "-60%";

        header_navbar.classList.remove("header_nav_bar_active");
        menu_flag = 0;
    }else {
        header_navbar.style.left = "-60%";
    }

    if (window.innerWidth > 768) {
        for(var i=0; i<5; i++)
            navbar_items[i].style.display = "block";
    }
})

// change menu size on click arrow 
let navbar_items = document.querySelectorAll(".nav_bar_items span");
let menu_arrow = document.querySelector(".arrow");
let menu_arrow_flag = 0;

menu_arrow.addEventListener("click", function() {
    if(menu_arrow_flag == 0) {
        menu_arrow.style.transform = "rotate(-42deg)";

        if(window.innerWidth > 576)
            header_navbar.style.width = "14%";
        else
            header_navbar.style.width = "20%";

        for(var i=0; i<5; i++)
            navbar_items[i].style.display = "none";
        
        menu_arrow_flag = 1;
    }
    else {
        menu_arrow.style.transform = "rotate(135deg)";

        if(window.innerWidth > 576)
            header_navbar.style.width = "35%";
        else if(window.innerWidth > 410 && window.innerWidth < 576)
            header_navbar.style.width = "45%";
        else 
            header_navbar.style.width = "50%";

        for(var i=0; i<5; i++)
            navbar_items[i].style.display = "block";

        menu_arrow_flag = 0;
    }
})


// product menu change by click : slider
let all_product = document.querySelector(".all_product")
let all_product_items = document.querySelectorAll(".all_product_items");
let menu_items = document.querySelectorAll(".menu_items");


for(let i=0; i<5; i++) {
    menu_items[i].dataset.index = i;
}
// let previus = menu_items[0].dataset.index;

menu_items.forEach( num => {
    num.addEventListener("click", function () {
        goto_product(+num.dataset.index, num.dataset.index);
        // previus = num.dataset.index;
    })
})

function goto_product(s, i) {
    for(let c= 0; c<5; c++) {
        menu_items[c].classList.remove("menu_items_active");
    }

    if(window.innerWidth > 768) {
        if(i>0)
            all_product.style.height = "21rem";
        else
            all_product.style.height = "auto";
    }
    else if (window.innerWidth < 768 && window.innerWidth > 576) {
        if(i==3) 
            all_product.style.height = "21rem";
        else if(i>0)
            all_product.style.height = "42rem";
        else 
            all_product.style.height = "auto";
    }
    else {
        if(i==3) 
            all_product.style.height = "52rem";
        else if(i>0)
            all_product.style.height = "79rem";
        else 
            all_product.style.height = "auto";
    }

    

    menu_items[i].classList.add("menu_items_active")
    all_product.style.transform = `translateX(${-s * 100}%)`;
}



