import React from 'react'
import { useRef, useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Table from './Table'
import Pagination from './Pagination';
export default function Forms() {
  const [todoList, setTodoList] = useState([])
  const [page, setPage] = useState(1);
    const nameRef=useRef()
    const ageRef=useRef()
    const addRef=useRef()
    const salRef = useRef();
    const selectRef = useRef();
    const fileRef = useRef();
    const checkRef = useRef();
    const submitForm = () => {
        var obj = {
            "id":uuidv4(),
            "name": nameRef.current.value,
            "age": ageRef.current.value,
            "address": addRef.current.value,
            "status": checkRef.current.checked,
            "salary": salRef.current.value,
            "dept":selectRef.current.value,
        }
        

        fetch("http://localhost:3000/users", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
              body: JSON.stringify(obj),
          }).then((res) => res.json())
            // .then((res) =>setTodoList([...todoList, obj]));
      
         console.log(obj)
        
        nameRef.current.value = ""
        ageRef.current.value=""
        addRef.current.value = ""
        salRef.current.value=""
        selectRef.current.value = "null"
        checkRef.current.checked = false
    //     let formData = new FormData();
    //     formData.append("image",fileRef.current.files[0])
    //     fetch("https://api.imgur.com/3/image/", {
    //     method: "POST",
    //     headers: {
    //       Authorization: "Client-ID 04cd5a086c71718",
    //     },
    //     body: formData,
    //   })
    //     .then((data) => data.json())
    //     .then((data) => {
    //       var img = data.data.link;
    //       var url = data.data.link;
    //       console.log("jj",data);
    //     });
       // console.log(todoList)
    }
   
    useEffect(() => {
        fetch(`http://localhost:3000/users?_page=${page}&_limit=5`)
          .then((res) => res.json())
          .then((res) => setTodoList(res));
      },[page]);

  

  return (
      <div>
          
              <input ref={nameRef} placeholder="name"/>
          
          
          <input ref={ageRef} placeholder="age"></input>
          
              <input ref={addRef} placeholder="address"></input>
         
          <select name="dept" id="dept" ref={selectRef}>
              <option value="null">Select</option>
            <option value="sales" >Sales</option>
            <option value="hr">HR</option>
          </select>
          
          <input ref={salRef} placeholder="salary"></input>
          <label>Marital State</label>
          <input type="checkbox" ref={checkRef}></input>
          <div>
          <label>Upload image</label>
              <input type="file" ref={fileRef} ></input>
              </div>
          <button onClick={() => { submitForm() }}>Submit</button>

       
         
      <Table todoList={todoList} setTodoList={setTodoList}></Table>
      <Pagination todoList={todoList} setTodoList={setTodoList} page={page} setPage={setPage}></Pagination>
    </div>
  )
}
