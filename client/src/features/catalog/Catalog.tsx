
import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductAsync, fetchProductsAsync, productSelectors } from "./catalogSlice";

export default function Catalog() {
    const products = useAppSelector(productSelectors.selectAll);
    const {productsLoaded,status} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    const [loading, setLoading] =  useState(true);

  useEffect(() => {
    if(!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded,dispatch])


  if(status.includes('pending')) return <LoadingComponent message='Loading products...'/>
  
    return (
        <>
            <ProductList products={products}/>

        </>
    )
}