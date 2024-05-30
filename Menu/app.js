const menu = [
    {
        id: 1,
        title: "toast & eggs",
        category: "breakfast",
        price: 10.99,
        img: "./images/menu-photo.jpeg",
        desc: `A fine gourmet style toast using one of our local farmers freshest ingredients. A brigth way to start your day!`,
    },
    {
        id: 2,
        title: "pancakes with toppings",
        category: "breakfast",
        price: 15.99,
        img: "./images/menu-pancake.jpeg",
        desc: `Here we have some of the fluffiest pancakes you will ever eat! It even comes with a wide array of assorted toppings to suit everyones needs.`,
    },
    {
        id: 3,
        title: "sausage biscuits & cheese",
        category: "breakfast",
        price: 9.99,
        img: "./images/menu-biscuit.jpeg",
        desc: `this is a personal favorite of mine. It is simple and easy to make... the Sausage Biscuit!! It is undeniably delicious and we hope you enjoy it!`, 
    },
    {
        id: 4,
        title: "spaghetti",
        category: "lunch",
        price: 18.99,
        img: "./images/menu-spaghetti.jpg",
        desc: `some of the best italian dining you will ever experience!`,
    },
    {
        id: 5,
        title: "steak",
        category: "lunch",
        price: 22.99,
        img: "./images/menu-steak.jpeg",
        desc: `some of the best steak  you will ever taste!`,
    },
    {
        id: 6,
        title: "chicken tenders & fries",
        category: "lunch",
        price: 18.99,
        img: "./images/menu-chicken.jpeg",
        desc: `You can't go wrong trying our famous chicken tenders and fries!! It's finger lickin' good!`,
    },
    {
        id: 7,
        title: "vanilla shake",
        category: "deserts",
        price: 8.99,
        img: "./images/menu-shakes.jpeg",
        desc: `What better way to top of your meal than with our signature shakes!`,
    },
    {
        id: 8,
        title: "new york cheesecake",
        category: "deserts",
        price: 12.99,
        img: "./images/menu-cheesecake.jpeg",
        desc: `What better way to top of your meal than with our signature shakes!`,
    }
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

//display all items when page loads
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        // console.log(item);
        return `<article class = "menu-item">
        <img src = ${item.img} alt=${item.title} class="photo" />
        <div class = "item-info>
        <header>
        <h4>${item.title}</h4>
        <h4 class = "price">$${item.price}</h4>
        </header>
        <p class = "item-text">
        ${item.desc}
        </p>
        </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
    const categories = menu.reduce(
        function (values, item){
            if (!values.includes(item.category)){
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories
    .map(function(category){
        return `<button type = "button" class = "filter-btn" data-id = ${category}>
        ${category}
        </button>`;
    })
    .join("");


    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn){
        btn.addEventListener("click", function(e){
            //console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                //console.log(menuItem.category);
                if (menuItem.category === category){
                    return menuItem;
                }
            });
            if (category === "all"){
                displayMenuItems(menu);
            } else{
                displayMenuItems(menuCategory);
            }
        });
    });
}