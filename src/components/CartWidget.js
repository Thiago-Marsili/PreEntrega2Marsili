import cart from "../img/cart.jpg"

function CartWidget() {

    return (
        <div className="cart-widget mt-2">
            <img src={cart} alt="cart" width="50" height="8" />
            0
        </div>
    )
}
export default CartWidget;