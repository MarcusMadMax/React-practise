import React from 'react'

const Product = (props) => {
    return (
        <div className="product">
            <h3>{props.product.name}</h3>
            <p>{props.product.price}</p>
            <p>{props.product.description}</p>
            <hr />
        </div>
    )
}

export default Product