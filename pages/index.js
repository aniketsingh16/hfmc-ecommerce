import React from 'react'
import { Cart, HeroBanner, FooterBanner, Product } from '../components';
import { client } from '../lib/client';

const Home = ({ productsData, bannerData }) => {
  return (
    <>
    <HeroBanner heroBanner ={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
    <div className='products-heading'>
      <h2> Best Sellers </h2> 
      <p> Wholesale supplier of Medical Equipments. </p>  
    </div>

    <div className='products-container'>
      {productsData?.map((product) => <Product key={product._id}
      product = {product}/>)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}

export const getServerSideProps = async () => {
  const productsQuery = '*[_type == "products"]';
  const productsData = await client.fetch(productsQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { productsData, bannerData }
  }
}
export default Home