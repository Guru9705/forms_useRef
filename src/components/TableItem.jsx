import React from 'react'

export default function TableItem({item,deleteHandler}) {
  return (
      
    <tr>
    <td>{item.name}</td>
    <td>{item.age}</td>
    <td>{item.address}</td>
   
    <td>{item.salary}</td>
       {item.status ?
           <td>True</td>
           :
           <td>False</td>}
          <td>{item.dept}</td>
          <td><button onClick={() => deleteHandler(item)}>Delete</button></td>
    </tr>
    
  )
}
