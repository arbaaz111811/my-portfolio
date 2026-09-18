import {useEffect,useState} from "react";
import Header from "../Header/Header";
const Products = ()=>{
    const [product,setProduct] = useState("");
    useEffect( ()=>{
        async function fetchData() {
            const data = await fetch('https://dummyjson.com/products')
            const dataJson = await data.json()
            // console.log(dataJson,"dataJson")
            setProduct(dataJson)

        }
        fetchData()
    },[])
    const productJson = product.products;
    // console.log(productJson,"productJson");
    return(
        <>
        {productJson && productJson.map((item)=>{
            console.log(item,"Item")
            return(
                <div key={item.id}>
                    {item.price}
                </div>
            )
        })}

         <Header arbaaz={""} numbers={""}/>
        </>
    )
}
export default Products;