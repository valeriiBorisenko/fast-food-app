import { useState } from "react";
import "./main.css"
import MenuList from "./MenyList/MenyList";
import OrderList from "./OrderList/OrderList";
import menu from "../../constant/fastFoodMenu"

const Main = (props) => {
    const {theme} = props
    const [order, setOrder] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const handleAddNewOrder = (id) => {
        const findOrder = menu.find(item => item?.id === id)
        setOrder((prevItems) => {
            let updateOrder
            if (prevItems.length === 0 || !prevItems.some((item) => item?.id === id)) {
                updateOrder = [...prevItems, { id: id, name: findOrder?.name, price: findOrder?.price, amount: 1 }]
                handleSumTotalPrice(updateOrder)
                return updateOrder;
            }
            updateOrder = prevItems.map((item) =>
                item.id === id ? { ...item, amount: item?.amount + 1 } : item
            );
            handleSumTotalPrice(updateOrder)
            return updateOrder
        });
    }

    const handleRemoveOrder = (id) => {
        setOrder((prevItems) => {
            let updateOrder
            if (prevItems.some((item) => item.id === id && item?.amount === 1)) {
                updateOrder = order.filter(item => item?.id !== id)
                handleSumTotalPrice(updateOrder)
                return updateOrder
            }
            updateOrder = prevItems.map((item) =>
                item.id === id ? { ...item, amount: item?.amount - 1 } : item
            );
            handleSumTotalPrice(updateOrder)
            return updateOrder
        });
    }

    const handleSumTotalPrice = (updateOrder) => { 
        setTotalPrice(updateOrder.reduce((total, item) => total + item?.price * item?.amount, 0))
    }

    return (
    <main className="main container d-flex flex-column gap-3">
        <h1 className="main__title text-center">Fast Food Menu</h1>
        <MenuList theme={theme} menu={menu} addOrder={handleAddNewOrder}/>
        <OrderList theme={theme} order={order} totalPrice={totalPrice} addOrder={handleAddNewOrder} removeOrder={handleRemoveOrder}/>
    </main>)
}

export default Main;