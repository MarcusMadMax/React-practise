import React from 'react'

let wordString = document.querySelectorAll('h3')
for (var i = 0; i < wordString.length; i++) {
    console.log(wordString.charAt(i));
}

const Product = (props) => {
    return (
        <div className='product'>
            <h3>{props.product.name}</h3>
            <p>${props.product.price}</p>
            <p>{props.product.description}</p>
            <hr />
        </div>
    )
}

export default Product