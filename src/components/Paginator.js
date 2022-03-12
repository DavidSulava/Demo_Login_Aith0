import { Pagination } from 'react-bootstrap';
import { useState } from 'react';


function Paginator() {
  const [activePage, setActivePage] = useState(1)
  let perPage = 5;
  const items = [];

  //TODO has to be done in accordance to the react functional components
  for (let number = 1; number <= perPage; number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage} onClick={() => onPageClick(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  const onPageClick = (number) => {
    setActivePage(number)
  }
  const onNextPageClick = (isNext = true) => {
    if (isNext)
      setActivePage(prev => {
        if (prev < perPage)
          return activePage + 1
        return prev
      })
    else
      setActivePage(prev => {
        if (prev > 1)
          return activePage - 1
        return prev
      })
  }


  return (
    <div>

      <Pagination>
        <Pagination.Prev onClick={() => onNextPageClick(false)}/>
        {items}
        <Pagination.Next onClick={() => onNextPageClick()}/>
      </Pagination>
    </div>
  );
}

export default Paginator