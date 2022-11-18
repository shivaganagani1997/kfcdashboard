const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//Show side bar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})
//Close side bar
closeBtn.addEventListener('click',() =>{
    sideMenu.style.display = 'none';
})
//change theme
themeToggler.addEventListener('click',() => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

})

//fill orders in table

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `<td>${order.productName}</td>
                       <td>${order.productNumber}</td>
                       <td>${order.paymentStatus}</td>
                       <td> ${order.shipping}</td>
                      `;
                        
        tr.innerHTML = trContent;
        document.querySelector('table tbody').appendChild(tr);


})