import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationPosts = ({totalPages, page, changePage}) => {

  //создание массива с номерами выводимых страниц
  let result = [];
  for (let i = 0; i < totalPages; i++) {
      result.push(i + 1);
  }

  return (
      <Pagination>
        <Pagination.First onClick={() => changePage(1)}/>
        <Pagination.Prev onClick={() => changePage(page - 1)}/>
        {result.map(i => 
          <Pagination.Item onClick={() => changePage(i)} className={i === page ? 'active' : ''}>
            {i}
          </Pagination.Item>)
        }
        <Pagination.Next onClick={() => changePage(page + 1)}/>
        <Pagination.Last onClick={() => changePage(totalPages)}/>
      </Pagination>
    )
}

export default PaginationPosts;