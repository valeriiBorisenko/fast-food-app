import "./order-item.css"

const OrderItem = (props) => {

    const {id, name, price, amount, addOrder, removeOrder} = props

    return (
    <article className="d-flex flex-row justify-content-between align-items-center border-bottom p-2">
        <div className="row gx-0 w-100">
        <p className="m-0 col-6 col-md-5">{name}&nbsp;x{amount}</p>
        <div className="d-flex flex-row gap-1 col-6 col-md-2 justify-content-end justify-content-md-center m-0">
            <button type="button" onClick={() => removeOrder(id)} className="btn btn-danger">-</button>
            <button type="button" onClick={() => addOrder(id)} className="btn btn-success">+</button>
        </div>
        <p className="m-0 mt-3 mt-md-0 fw-bold text-info col-12 col-md-5 text-md-end">SEK&nbsp;{price * amount}</p>
        </div>
    </article>
)
}

export default OrderItem;