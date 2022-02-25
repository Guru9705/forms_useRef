import React, { useState } from 'react'
import TableItem from './TableItem'

export default function Table({ todoList,setTodoList}) {
    const [sortList, setsortList] = useState(todoList);
    const [isSorted, setSorted] = useState(false);
    const [isGrouped, setGrouped] = useState(false);
    const salHandler = () => {
        setSorted(!isSorted);
        const newList=[...sortList].sort(function (a, b) { return a.salary - b.salary })
        setsortList(newList)
        console.log(sortList)
    } 
    
    const groupHandler = () => {
        setGrouped(!isGrouped);
        const groupList1 = todoList.filter((s) => {
            if (s.dept === "hr") {
                return s;
            } 
        })
        const groupList2 = todoList.filter((s) => {
            if (s.dept == "sales") {
                return s;
           }
        })
        setsortList(groupList1.concat(groupList2))
        console.log("gr",groupList1.concat(groupList2))
    }

    const deleteHandler = (item) => {
        console.log(item)
        const newList = todoList.filter((x) =>  x.id !== item.id );
        setTodoList(newList);
    }
    
  return (
      <div>
          <h2>Table</h2>
          <table>
              <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Salary</th>
                  <th>Married</th>
                  <th>Dept</th>
                  <th>Actions</th>
              </tr>
              {isSorted || isGrouped ?
             sortList.map((item) => {
                {console.log("iy",item)}
                  return ( 
                   <TableItem key={item.id} item={item} deleteHandler={deleteHandler}></TableItem>
               )
                  
                  
              }):todoList.map((item) => {
                {console.log("iy",item)}
                  return ( 
                   <TableItem key={item.id} item={item} deleteHandler={deleteHandler}></TableItem>
               )
                  
                  
              })
            }
              
          </table>
          <button className='salary' onClick={salHandler}>Salary</button>
          <button onClick={ groupHandler}>Group By Dept</button>
      </div>
     
  )
}
