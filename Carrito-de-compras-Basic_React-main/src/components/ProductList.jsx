import { useEffect, useState } from 'react';
// import { data } from '../data';
import '/src/index.css'

export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const [data,setData] = useState([]);
	const onAddProduct = (product) => {
		if (allProducts.find(item => item.id_producto === product.id_producto)) {
			const products = allProducts.map(item =>
				item.id_producto === product.id_producto
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.precio_producto * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.precio_producto * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	useEffect(
		() => {
			fetch('http://localhost:3001/productos')
				.then(response => {
					if (!response.ok) {
						throw new Error('Error al obtener los productos');
					}
					return response.json();
				})
				.then(data => {
					setData(data)
					console.log(data);

				})
				.catch(error => {
					console.error('Error al obtener los productos:', error);
				});
		},[]
	)

	return (
		<div className='container-items'>
			<div className="capa"></div>
			{console.log(data)}
			{data.map(product => {
				if (product.stock_producto !== 0) {
					return(
						<div className='item' key={product.id_producto}>
						<figure>
							<img src={`./img/${product.imagen_prodcuto}.png`} alt={product.nombre_producto} />
						</figure>
						<div className='info-product'>
							<h2>{product.nombre_producto}</h2>
							<p className='price'>${product.precio_producto}</p>
							<p className='stock'>Disponibles:{product.stock_producto}</p>
							
							<button className='boton' onClick={() => onAddProduct(product)}>
								Añadir al carrito
							</button>
						</div>
					</div>
					)
				}
				return null
				
			})}
		</div>
	);
};
