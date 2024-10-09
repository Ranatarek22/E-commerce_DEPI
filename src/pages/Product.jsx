import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../frontend_assets/assets';
import RelatedProducts from '../component/RelatedProducts';

const Product = () => {
  const {products, addToCart} = useContext(ShopContext); 
  const {productId} = useParams();
  const [productData, setProductData] = useState();
  const [image, setImage] = useState();
  const [size, setSize] = useState();

  const getProductData = async ()=>{
    const myProduct = products.filter((item)=>{
      return item._id === productId ? item: '';
    })
    setProductData(myProduct);
    setImage(myProduct[0].image[0])
    console.log(myProduct);
  }

  useEffect(()=>{
    getProductData();
  },[productId, products])


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in-out duration-500'>
      <div className='flex flex-col gap-12 sm:flex-row w-11/12 '>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col justify-between overflow-x-scroll sm:overflow-y-scroll sm:justify-normal sm-w[18%] w-[20%]'>
          {productData[0].image.map((myImage, index) => {
          return (
            <img onClick={()=>setImage(productData[0].image[index])} className=' w-full cursor-pointer flex ' key={index} src={myImage} alt='' />
          );
          })} 
          </div>
          <div className='w-full  sm:w-[80%]'>
            <img className='h-auto w-full' src={image} alt='' />
          </div>
        </div>
        <div className='flex-1'>
          <h1 className='font-medium text-2xl '>{productData[0].name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img className='w-4' src={assets.star_icon} alt='' />
            <img className='w-4' src={assets.star_icon} alt='' />
            <img className='w-4' src={assets.star_icon} alt='' />
            <img className='w-4' src={assets.star_icon} alt='' />
            <img className='w-4' src={assets.star_dull_icon} alt='' />
            <h1 className='pl-4'>(122)</h1>
          </div>
          <p className='font-bold text-3xl mt-5'>${productData[0].price}</p>
          <p className='text-2xl mt-5 text-gray-700'>{productData[0].description}</p>
          <div className='flex flex-col gap-4 mt-5'>
            <p className='font-bold text-xl'>Select Size</p>
            <div className='flex gap-2'>
              {
                productData[0].sizes.map((item, index)=>(
                  <button onClick={()=>setSize(item)} className={`border py-2 px-4 ${size === item? 'bg-gray-300': ''}`} key={index}>{item}</button>
                ))
              }
            </div>
          </div>
          <button onClick={()=>addToCart(productData[0]._id, size)} className='mt-5 bg-black text-white px-8 py-3 hover:bg-gray-800 text-sm'>ADD TO CART</button>
          <hr className='mt-4 mb-4'/>
              <div className='text-sm text-gray-600'>
                <p>100% Original Product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
              </div>
        </div>
      </div>
      <h1 className='mt-16 flex justify-center font-light text-3xl'>RELATED PRODUCTS</h1>
      <RelatedProducts category={productData[0].category} subCategory={productData[0].subCategory}/>
    </div>
  ): <div className='opacity-0'></div>
}

export default Product