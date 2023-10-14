import React, { useState,useContext,useEffect } from 'react'
import Pagination from './Pagination'
import CardDish from './CardDish'



import { AllMenuContext } from './AllMenuContext';

function FilteredDishes(props) {

  let [menuCategory,setMenuCategory] = useState([])
  let [singleDish,setSingleDish] = useState([])
  
  

  async function getAllTheCategories(){
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL)
    let categoryData = await response.json()
    setMenuCategory(categoryData.categories)
  }

  //get the single dish
  async function getOnlyOneDish(){
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    let response = await fetch(API_URL)
    let singleDishData = await response.json()
    setSingleDish(singleDishData.meals)
  }
  useEffect(() => {
    getAllTheCategories();
    getOnlyOneDish();
  }, []); // Empty dependency array indicates the effect should run once
  
  
  console.log('category ',menuCategory)
  console.log('single dish is',singleDish)







  const allMenus=useContext(AllMenuContext) 

      // let [allMenus,setAllMenus]=useState(props.allMenus)
      let [filteredDishes,setFilteredDishes]=useState([])
      let [activeDish,setActiveDish] = useState("Beef")
      let [currentPage,setCurrentPage] = useState(1)
      let [itemsPerPage,setItemsPerPage] = useState(4)
      
      let indexOfLastDish = currentPage * itemsPerPage
      // 1 x 4 = 4
      // 2 x 4 = 8
      // 3 x 4 = 12
      
      let indexOfFirstDish = indexOfLastDish - itemsPerPage
      // 4 - 4 = 0
      // 8 - 4 = 4
      // 12 - 4 = 8

      let showTheseDishesNow = filteredDishes.slice(indexOfFirstDish,indexOfLastDish)


      // lets show only single dishes
      let maxItem = 4
      let singleDishItems = singleDish.map((n,index)=>{
        if(index<maxItem){
          return(
            <li>
              <img src={n.strMealThumb} className='br-10' alt=''/>
              <h4>{n.strMeal}</h4>
            </li>
          )
        }     
      })

      // show dishes on click
       function showFilteredDishesHandler(category){
         setSingleDish([])
        setActiveDish(category)
        let filteredDishesAre = allMenus.filter((menuItem)=>{
              return menuItem.strCategory === category
          }).map((menuItem)=>{
            return(
             <CardDish menuItem={menuItem}/>
            )
          })    
          setFilteredDishes(filteredDishesAre)
       }
       
//    let show all the categories
   let allCategories=menuCategory.map((item)=>{
        return(
            <li className={item.strCategory === activeDish ? 'active' : ''} onClick={()=>showFilteredDishesHandler(item.strCategory)}>{item.strCategory}</li>
        )
    })
  return (
   <div className='filtred-dishes'>
          <div className='container'>
            <div className='text-center'>
            <h2>Choose your dishes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod saepe impedit sunt repellendus? Suscipit iure nostrum enim ea?</p>
            </div>

            <div className='filterd-dishes'>
                <ul>
                   {allCategories}
                </ul>
            </div>
            <div className='filtered-dishes-results'>
                <ul className="flex flex-wrap gap-30">
                 {singleDishItems}
                  {singleDishItems !== 0 || filteredDishes.length !== 0 ? showTheseDishesNow : 
                  <div className='alert'>
                    <h3>Sorry,No items found</h3>
                    <h4>Please try another dishes</h4>
                    </div>}
                    
                </ul>
            </div>
            <Pagination
            filteredDishes={filteredDishes}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            />
          </div>
   </div>
  )
}

export default FilteredDishes