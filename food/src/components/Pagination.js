import React from 'react'

function Pagination(props){
    let numberOfPages=[]
    for(let i=1;i<=Math.ceil(props.filteredDishes.length/props.itemsPerPage);i++){
        numberOfPages.push(i)   
        // 16 / 4 = 4 number of pages is four
        // 1
        // 2
        // 3
        // 4
    }
    

    function showNextDishesHandler(event){
         let currentPage=event.target.id
         props.setCurrentPage(currentPage)
    }
    let pages=numberOfPages.map((pageNumber)=>{
        return(
            <li id={pageNumber} onClick={showNextDishesHandler}>{pageNumber}</li>
        )
    })
    
    return(
       <section>
        <ul className='pagination flex'>
            {pages}
        </ul>
       </section>
    )
}

export default Pagination