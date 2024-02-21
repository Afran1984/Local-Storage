import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product/Product";
import './Products.css'
import { addTols, getStorageString } from "../Storage/Storage";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    // Load card from Local Storage
    useEffect(() =>{
        console.log('this data', products.length);
        if(products.length > 0)
        {
            const storecard = getStorageString();
            console.log(storecard);
            const saveId = [];
            for(const id of storecard)
            {

            console.log(id);
            const bottoleProduct = products.find(bottoleProduct => bottoleProduct.id === id);
                if(bottoleProduct){
                    saveId.push(bottoleProduct);
                }
            }
            console.log('Save Card',saveId);
            setCard(saveId);
        }
    },[products])

    const handelAddToCard = product =>{
        // console.log(product);
        const newCard = [...card, product];
        setCard(newCard);
        addTols(product.id);
    }
    return (
        <div>
            <h4>{products.length}</h4>
            <div>
            <h2>Card:{card.length}</h2>
            </div>
            <div className="boxs margine">
                {
                    products.map(product => <Product key={products.id} 
                        handelAddToCard ={handelAddToCard}
                    product={product}>

                    </Product>)
                }
            </div>
        </div>
    );
};

export default Products;