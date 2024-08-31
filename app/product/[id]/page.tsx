import React from 'react'

const ProductPage = ({params: {id}}: {params: {id: number}}) => {
return (
    <div>{id}</div>
)
}
export default ProductPage