let data = [];

fetch('/productos')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }
    return response.json();
  })
  .then(data => {
	data.map((producto)=> data.push(producto))
    console.log(data);
	
  })
  .catch(error => {
    console.error('Error al obtener los productos:', error);
  });
  export default data;
// export const data = [
	
// ];


// {
// 	id: 1,
// 	img:'../img/acer.png',
// 	nameProduct: 'Computadora Acer',
// 	price: 31999,
// 	quantity: 1,
// },
// {
// 	id: 2,
// 	img:'../img/asusgamer.png',
// 	nameProduct: 'Computadora Asus Gamer',
// 	price: 20399,
// 	quantity: 1,
// },
// {
// 	id: 3,
// 	img:'../img/extreme.png',
// 	nameProduct: 'Xtreme PC Gaming',
// 	price: 8999,
// 	quantity: 1,
// },
// {
// 	id: 4,
// 	img:'../img/extremerosa.png',
// 	nameProduct: 'Xtreme PC Gaming Rosa',
// 	price: 5499,
// 	quantity: 1,
// },
// {
// 	id: 5,
// 	img:'../img/gamergrizzly.png',
// 	nameProduct: 'Computadora Gamer Grizzly',
// 	price: 11999,
// 	quantity: 1,
// },
// {
// 	id: 6,
// 	img:'../img/gamerxtreme.png',
// 	nameProduct: 'Xtreme Gaming 23.8 Pulgadas',
// 	price: 14899,
// 	quantity: 1,
// },
// {
// 	id: 7,
// 	img:'../img/gigabyte.png',
// 	nameProduct: 'Laptop Gigabyte',
// 	price: 32935,
// 	quantity: 1,
// },
// {
// 	id: 8,
// 	img:'../img/grizzly.png',
// 	nameProduct: 'Torre Gamer Grizzly',
// 	price: 13199,
// 	quantity: 1,
// },
// {
// 	id: 9,
// 	img:'../img/honor.png',
// 	nameProduct: 'Tablet Honor',
// 	price: 5199,
// 	quantity: 1,
// },
// {
// 	id: 10,
// 	img:'../img/huawei.png',
// 	nameProduct: 'Tablet Huawei MatePad',
// 	price: 4399,
// 	quantity: 1,
// },
// {
// 	id: 11,
// 	img:'../img/hyundai.png',
// 	nameProduct: 'Tablet Hyundai Hytab',
// 	price: 2499,
// 	quantity: 1,
// },
// {
// 	id: 12,
// 	img:'../img/ipad.png',
// 	nameProduct: 'iPad A9 9.7 IOS 10 Plata',
// 	price: 5999,
// 	quantity: 1,
// },
// {
// 	id: 13,
// 	img:'../img/iphone16.png',
// 	nameProduct: 'Aple iPhone 11 6.1 pulgadas',
// 	price: 7489,
// 	quantity: 1,
// },
// {
// 	id: 14,
// 	img:'../img/minnie.png',
// 	nameProduct: 'Tablet Multilaser Minnie',
// 	price: 1999,
// 	quantity: 1,
// },
// {
// 	id: 15,
// 	img:'../img/motog.png',
// 	nameProduct: 'Motorola Moto G42',
// 	price: 3199,
// 	quantity: 1,
// },
// {
// 	id: 16,
// 	img:'../img/pcextreme.png',
// 	nameProduct: 'Computadora Xtreme Gamer PC',
// 	price: 8199,
// 	quantity: 1,
// },
// {
// 	id: 17,
// 	img:'../img/redmi10.png',
// 	nameProduct: 'Xiaomi Redmi 10 6.5 pulgadas',
// 	price: 3299,
// 	quantity: 1,
// },
// {
// 	id: 18,
// 	img:'../img/samsung.png',
// 	nameProduct: 'Samsung Galaxy A54 5G',
// 	price: 7224,
// 	quantity: 1,
// },
// {
// 	id: 19,
// 	img:'../img/tabletsamsung.png',
// 	nameProduct: 'Tablet Samsung Galaxy Tab',
// 	price: 2999,
// 	quantity: 1,
// },
// {
// 	id: 20,
// 	img:'../img/victus.png',
// 	nameProduct: 'Laptop HP Victus',
// 	price: 19673,
// 	quantity: 1,
// },
// {
// 	id: 21,
// 	img:'../img/vorago.png',
// 	nameProduct: 'Tablet Vorag 7 Pulgadas',
// 	price: 1599,
// 	quantity: 1,
// },
// Aquí pueden agregar más o modificar los productos existentes