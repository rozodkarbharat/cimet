import axios from "axios";

const { createContext, useState, useEffect } = require("react");



export const ProductContext = createContext()

export const ProductContextProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    getCurrencyData()
    useEffect(() =>{
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    async function getCurrencyData(){
        try{

            let currencyRates=await axios.get("https://anyapi.io/api/v1/exchange/rates")
            console.log(currencyRates)
        }
        catch(err){
            console.log(err)
        }
    }


    function handleCartChange(product, type) {
        let tempcart = JSON.parse(localStorage.getItem("cart")) || []
        let tempcartItem = tempcart.filter((elem) => {
            if (elem.id == product.id) {
                return true
            }
            return false
        })
        if (type === "add") {

            if (tempcartItem.length > 0) {
                tempcartItem[0].quantity++
                tempcart = tempcart.map((elem) => {
                    if (elem.id == product.id) {
                        return tempcartItem[0]
                    }
                    return elem
                })
            }
            else {
                tempcart = [...tempcart, { ...product, quantity: 1 }]
            }
        }
        else {
            tempcartItem[0].quantity--
            tempcart = tempcart.map((elem) => {
                if (elem.id == product.id) {
                    return tempcartItem[0]
                }
                return elem
            })
            tempcart = tempcart.filter(elem => elem.quantity >0);
        }
        if(tempcart.length) setCart(tempcart)
            else setCart([])
        
    }


    return <ProductContext.Provider value={{ cart, handleCartChange }}>{children}</ProductContext.Provider>
}
