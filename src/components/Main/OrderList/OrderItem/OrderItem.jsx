import "./order-item.css"

const OrderItem = (props) => {

    const {id, name, price, amount, addOrder, removeOrder} = props

    return (
    <article className="d-flex flex-row justify-content-between align-items-center border-bottom p-2">
        <div className="row gx-0 w-100">
        <p className="m-0 col-5">{name}&nbsp;x{amount}</p>
        <div className="d-flex flex-row gap-1 col-2 justify-content-center m-0">
            <button type="button" onClick={() => removeOrder(id)} className="order-item__button btn btn-danger ">-</button>
            <button type="button" onClick={() => addOrder(id)} className="order-item__button btn btn-success">+</button>
        </div>
        <p className="m-0 fw-bold text-info col-5 text-end">SEK&nbsp;{price * amount}</p>
        </div>
    </article>
)
}

export default OrderItem;