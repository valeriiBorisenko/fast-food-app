import "./menu-list.css"
import MenuItem from "./MenuItem/MenuItem";

const MenuList = (props) => {
    const {theme, menu, addOrder} = props

    return (
        <section className="menu-list d-flex flex-column">
            <ul className="row list-unstyled gx-3 gy-3">
            {menu?.map((item, index) =>
                <li className="col-sm-12 col-md-6 col-lg-4" key={`menu-item${index}`}>
                    <MenuItem 
                        id={item?.id}
                        image={item?.image} 
                        name={item?.name}
                        description={item?.description}
                        price={item?.price}
                        theme={theme}
                        addOrder={addOrder}
                    />
                </li>  
            )}
            </ul>
            
        </section>
    )
}

export default MenuList;