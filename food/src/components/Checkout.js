import { useContext } from "react"
import { StateContext } from "./context/AppProvider"

const Checkout =()=>{
    const cartPackage = useContext(StateContext);

    let cartItemsAre = cartPackage.cartItems.map((item) => {
      return (
        <div key={item.id}>
          <img src={item.img}/>
          <h6>{item.title}</h6>
        </div>
      );
    });
    return(
        <div>
        {cartItemsAre}
    </div>
    )
}

export default Checkout