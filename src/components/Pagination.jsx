import React from 'react'

export default function Pagination({page,setPage}) {
    const prev = () => {
        setPage((prev) => {
          if (prev > 1) return prev - 1;
          return prev;
        });
      };
  return (
    <>
      <button onClick={prev}>Prev</button>
      
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </>
  )
}
