import { Fragment } from "react";
import "./order-list.css"
import OrderItem from "./OrderItem/OrderItem";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";

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
                        <AnimatePresence>
                            {order.map((item, index) =>
                                <motion.li 
                                    key={`orderMenu${index}`}
                                    initial={{ opacity: 0, height: 0, margin: 0, padding: 0 }}
                                    animate={{ opacity: 1, height: 'auto'}}
                                    exit={{ opacity: 0, height: 0, margin: 0, padding: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <OrderItem 
                                        id={item?.id}
                                        name={item?.name}
                                        price={item?.price}
                                        amount={item?.amount}
                                        addOrder={addOrder}
                                        removeOrder={removeOrder}
                                    />
                                </motion.li>
                            )}
                        </AnimatePresence>
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