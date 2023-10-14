import React,{useState,useContext} from 'react'
import CardDish from "./CardDish";
import Popup from "./Popup";
import AddToCart from './AddToCart';

// step 4
import { AllMenuContext } from './AllMenuContext';

function SpecialDishes(props){
    let [showPopUp,setShowPopUp] = useState(false)
    let [currentDish,setCurrentDish]=useState('')
    let [addToCartItem,setaddToCartItem]=useState([])

    let allMenus = useContext(AllMenuContext)
    

    // let show the popup
    function showPopupHandler(dishName){
        setCurrentDish(dishName)
        setShowPopUp(true)
    }

    // let close the popup
    function closePopupHandler(){
        setShowPopUp(false)
    }
    let maxSpecialDishes=8;
    let specialMenus=allMenus.map((menuItem,index)=>{
        if(index<maxSpecialDishes){
            return(
                <CardDish menuItem={menuItem}
                showPopup={showPopupHandler}/>
            
        )
        }
        
    })

    // add to cart handler
    function addToCartHandler(addToCartImage,addToCartTitle){
      setaddToCartItem([
        ...addToCartItem,
        {
        'img':addToCartImage,
        'title':addToCartTitle
      }])      
    }
    console.log(addToCartItem)


    return(
        <section className="special-dishes">
           {showPopUp && <Popup closePopupHandler={closePopupHandler}
           currentDish={currentDish}
           addToCartHandler={addToCartHandler}
           ></Popup>}
            <div className="container">
                <AddToCart addToCartItem={addToCartItem}/>
                <div className="special-dishes-content text-center">
                <h1>Our Special Dishes</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis eveniet quaerat autem quidem expedita quasi facere, magni adipisci dolor placeat totam ratione! Consectetur, corrupti?</p>
                </div>
                <div className="special-dishes-list">
                  <ul className="flex flex-wrap gap-30">
                      {specialMenus}
                  </ul>
                </div>
            </div>
        </section>
    )
}
export default SpecialDishes