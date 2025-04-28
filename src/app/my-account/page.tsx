import ProductCard from '@/components/product/ProductCard'
import React from 'react'

const MyaccountProducts
 = () => {
  return (
    <div>
      <h1>My Account Products</h1>
      <p>Here you can manage your products.</p>
  <ProductCard product={{
    id: "1",
    title: "merj-hebe",
    description: "A sample product description",
    price: 100,
    category: "Sample Category",
    images: ["image1.jpg", "image2.jpg"],
    inventory: 50,
    createdAt: new Date().toISOString()
  }} />
    </div>
  )
}

export default MyaccountProducts

