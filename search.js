const product=[
    {
        id: 0,
        image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfex0Ev2Sw4WAuPMVQERxvn3pHFWqR8xIBacBek_o17uEEh9O0JDu6z2FRxwB3LvPHgF6FQ4mVlKpk5N4P2in8jANmYXcgRyfHzo6xGQ',
        title: 'Red Velvet Cake',
        price: '500 for one',
    },
]
const categories = [...new set(product.map((item)=> {return item}))]

document.getElementById('searchBar').addEventListener('keyup',(e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=>{
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});

const displayItem = (items)=> {
    document.getElementById('root').innerHTML=items.map((item)=>{
    var{image,title,price}= item;
    return(
        `<div class='box'>
           <div class='img-box'>
               <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                 <p>${title}</p>
                 <h2>$ ${price}.00</h2>
                 <button>Add to cart</button>
             </div>
        </div>`   
    )
}).join('')
};
displayItem(categories);