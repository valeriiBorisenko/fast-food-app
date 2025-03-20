import { Fragment } from "react";
import "./order-list.css"
import OrderItem from "./OrderItem/OrderItem";

const OrderList = (props) => {
    const {theme, order, totalPrice, addOrder, removeOrder} = props

    return (
        <section className="orderl-list d-flex flex-column">
            <h2 className="ordel-list__title">Your Order</h2>
            <div className={`d-flex flex-column rounded-3 ${theme === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}>
            {
                order.length === 0 ? <p className="fw-bold m-0 p-4">Your order is empty. Add something delicious!</p> : 
                <Fragment>
                    <ul className="ordel-list__container list-unstyled d-flex flex-column m-0">
                        {order.map((item, index) =>
                            <li key={`orderMenu${index}`}>
                                <OrderItem 
                                    id={item?.id}
                                    name={item?.name}
                                    price={item?.price}
                                    amount={item?.amount}
                                    addOrder={addOrder}
                                    removeOrder={removeOrder}
                                />
                            </li>
                        )}
                    </ul>
                    <div className="d-flex flex-row justify-content-between align-items-center p-2 pt-3 pb-3">
                        <p className="fw-bold m-0">Total</p>
                        <p className="text-primary fw-bold m-0">SEK&nbsp;{totalPrice}</p>
                    </div>
                </Fragment>
            }
            </div>
        </section>
)
}

export default OrderList;