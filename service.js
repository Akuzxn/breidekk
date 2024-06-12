let results = document.getElementById("products");
let basket = JSON.parse(localStorage.getItem("data")) || [];
let shopItemsData = [
	{
		id: "service1",
		name: "Car wash",
		price: 60,
		img: "./img_NR/service1.png",
	},
	{
		id: "service2",
		name: "Tire change",
		price: 50,
		img: "./img_NR/service2.png",
	},
	{
		id: "service3",
		name: "Air change",
		price: 10,
		img: "./img_NR/service3.png",
	},
	{
		id: "service4",
		name: "polishing",
		price: 20,
		img: "./img_NR/service4.png",
	},
	
];

let generateItems = () => {
	return (results.innerHTML = shopItemsData
		.map((shopItem) => {
			let { id, img, name, price } = shopItem;
			return `
        <div id="${id}" class="vare">
        <img src=${img} alt="">
        <h2>${name}</h2>
        <p>$${price}</p>
        <a onclick="addToCart(${id})" class="btn">Add to cart</a>
        </div>`;
		})
		.join(""));
};
generateItems();

let addToCart = (id) => {
	let selectedItem = id;
	let search = basket.find((vare) => vare.id === selectedItem.id);

	if (search === undefined) {
		basket.push({
			id: selectedItem.id,
			item: 1,
		});
	} else {
		search.item += 1;
	}
	localStorage.setItem("data", JSON.stringify(basket));
};
