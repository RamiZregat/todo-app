import React, { useEffect, useState } from 'react';
export const ListContext = React.createContext();
import { v4 as uuid } from 'uuid';


  function Setting(props) {
    const [list, setList] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    const [displayCompleted,setDisplayCompleted]=useState(true)
    const [postsPerPage,setPostsPerPage]=useState(2)
    const [currentPage,setCurrentPage]=useState(1);
    
    
    
    function addItem(item) {
      console.log(item);
      item.id = uuid();
      item.complete = false;
      setList([...list, item]);
    }
    function displayCompletedItems(){
      setDisplayCompleted(displayCompleted===true?false:true)
      localStorage.setItem('savedDisplayCompleted',displayCompleted)
      
      }
    
      function deleteItem(id) {
        const items = list.filter( item => item.id !== id );
        setList(items);
      }
    
      function toggleComplete(id) {
    
        const items = list.map( item => {
          if ( item.id == id ) {
            item.complete = ! item.complete;
          }
          return item;
        });
        
        setList(items);
    
      }
      useEffect(()=>{
        let check=(localStorage.getItem("savedDisplayCompleted")==="true"?true:false)
        setDisplayCompleted(check)
        setPostsPerPage(parseInt(localStorage.getItem("savedPostsPerPage")))
      },[])
    
      useEffect(() => {
        let incompleteCount = list.filter(item => !item.complete).length;
        setIncomplete(incompleteCount);
        document.title = `To Do List: ${incomplete}`;
      }, [list]);

    return (
            <ListContext.Provider value={{
                list,
                incomplete,
                addItem,
                deleteItem,
                toggleComplete,
                setDisplayCompleted,
                displayCompleted,
                postsPerPage,
                currentPage,
                setCurrentPage,
                setPostsPerPage,
                displayCompletedItems
            }}>
            {props.children}
         </ListContext.Provider>
    );
}

export default Setting;