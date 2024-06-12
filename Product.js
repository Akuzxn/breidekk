let results = document.getElementById("products");
let basket = JSON.parse(localStorage.getItem("data")) || [];
let shopItemsData = [
	{
		id: "black_hoodie1",
		name: "Supreme tires",
		price: 20,
		img: "./img_NR/Tire4.png",
	},
	{
		id: "white_hoodie",
		name: "Cool tires",
		price: 20,
		img: "./img_NR/Tire3.png",
	},
	{
		id: "gray_hoodie",
		name: "Sick Tires",
		price: 20,
		img: "./img_NR/Tire1.png",
	},
	{
		id: "cream_hoodie",
		name: "Awesome tires",
		price: 20,
		img: "./img_NR/Tire2.png",
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
