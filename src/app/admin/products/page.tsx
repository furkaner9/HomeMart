import ProductCard from '@/components/product/ProductCard'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Products = ({ product }: { product: { id: string; images: string[]; title: string; category: string; price: number; inventory: number } }) => {
  return (
<div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/products/${product.id}`}></Link>
          <Image
            src={product.images[0] || "/images/products/placeholder.png"}
            alt={product.title}
            layout="fill"
            className="object-cover"
          />
          
        </div>
    
  )
}

export default Products ;
