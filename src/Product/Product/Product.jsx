import './Product.css'
const Product = ({product, handelAddToCard}) => {
    // console.log(product);
    const {name, imgs, Stock, Price} = product;
    return (
        <div className='box'>
            <p>Name: {name}</p>
            <p>{Stock}</p>
            <img src={imgs} alt="" />
            <p>${Price}</p>
            <button onClick={() => handelAddToCard(product)} >Parches</button>
        </div>
    );
};

export default Product;