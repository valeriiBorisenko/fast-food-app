import "./menu-item.css"

const MenuItem = (props) => {
    const {id, image, name, description, price, theme, addOrder} = props

    return (
    <article className={`menu-item card d-flex flex-column rounded-3 overflow-hidden h-100 ${theme === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}>
        <img className="menu-item__image" src={image} alt={name}/>
        <div className="d-flex flex-column h-auto gap-4 p-2 flex-grow-1">
            <h3 className="menu-item__title m-0">{name}</h3>
            <p className="menu-item__subtitle m-0">{description}</p>
            <p className="menu-item__price m-0 mt-auto">SEK&nbsp;{price}</p>
        </div>
       
        <button type="button" onClick={()=> addOrder(id)} className={`menu-item__button btn align-self-start ${theme === "dark" ? "btn-dark" : "btn-light"} m-2`}>Add to Order</button>

    </article>)
}

export default MenuItem;