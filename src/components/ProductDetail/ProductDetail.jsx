import React from 'react'
import ColllectionCard from '../UI/ColllectionCard'
import Activity from './Activity'
import Description from './Description'
import Detailtext from './Detailtext'
import Product from './Product'
import Image1 from "../../assets/nft/nft1.jpg";
import Image2 from "../../assets/nft/nft2.jpg";
import Image3 from "../../assets/nft/nft3.jpg";
import Image4 from "../../assets/nft/nft4.jpg";
import Image5 from "../../assets/nft/nft5.jpg";
import Image6 from "../../assets/nft/nft6.jpg";
import Image7 from "../../assets/nft/nft7.jpg";
import Image8 from "../../assets/nft/nft8.png";
import Image9 from "../../assets/nft/nft9.jpg";
import Image10 from "../../assets/nft/nft10.png";
import Image11 from "../../assets/nft/nft11.jpg";
import Image12 from "../../assets/nft/nft12.jpg";
// import Detailtext from './DetailText/DetailText'


const coll = [
  {
    name: "Milady ",
    image: Image1,
    num: 2.3,
    price: 23233,
  },
  {
    name: "Milady ",
    image: Image2,
    num: 2.3,
    price: 23233,
  },
  {
    name: "Milady ",
    image: Image3,
    num: 2.3,
    price: 23233,
  },
  {
    name: "Milady ",
    image: Image4,
    num: 2.3,
    price: 23233,
  },
  // {
  //   name: "18932",
  //   image: Image5,
  //   num: 2.3,
  //   price: 23233,
  // },
  // {
  //   name: "18932",
  //   image: Image6,
  //   num: 2.3,
  //   price: 23233,
  // },
  // {
  //   name: "18932",
  //   image: Image7,
  //   num: 2.3,
  //   price: 23233,
  // },
  // {
  //   name: "18932",
  //   image: Image8,
  //   num: 2.3,
  //   price: 23233,
  // },
  // {
  //   name: "18932",
  //   image: Image9,
  //   num: 2.3,
  //   price: 23233,
  // },
  // {
  //   name: "18932",
  //   image: Image10,
  //   num: 2.3,
  //   price: 23233,
  // },
]

const ProductDetail = () => {
  return (
    <div className='px-10 w-full'>
        <div className='flex gap-5'> 
        <Product />        
        <Detailtext />
        </div>
        
        <Activity />
        <div className='border-solid border-[#eee] border-[1px] rounded-[14px] mt-20 '>
          <p className='font-poppins text-3xl p-12 font-bold'>More On Collection</p>
        <div className='grid grid-cols-4 gap-20 bg-blue-50 mb-10 w-full overflow-x-scroll'>
        {
          coll.map((lec) => <ColllectionCard {...lec}/>)
        }
        </div>
        </div>
    </div>
  ) 
}

export default ProductDetail