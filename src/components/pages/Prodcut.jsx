import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrums from '../BreadCrums/BreadCrums';
import ProdcutDisplay from '../ProdcutDisplay/ProdcutDisplay';
import DescriptionBox from '../Description.box/DescriptionBox';
import RelatedProdcuts from '../RelatedProdcuts/RelatedProdcuts';

const Prodcut = () => {
  const {all_prodcut} = useContext(ShopContext);
  const {prdocutId} = useParams();
  const prodcut =all_prodcut.find((e)=> e.id === Number(prdocutId))
  return (
    <div>
      <BreadCrums prodcut={prodcut}/>
      <ProdcutDisplay prodcut={prodcut}/>
      <DescriptionBox/>
      <RelatedProdcuts/>
    </div>
  )
}

export default Prodcut