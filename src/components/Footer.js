import React, { memo } from 'react';

const Footer = memo((props) => {
  const { status, setStatusFilter, numOfTodos, numOfTodosLeft, clearCompleted } = props;
  const FilterBtn = [
    {
      title: 'All',
      isActive: status === 'ALL',
      onClick: () => setStatusFilter('ALL'),
      link: '',
    },
    {
      title: 'Active',
      isActive: status === 'ACTIVE',
      onClick: () => setStatusFilter('ACTIVE'),
      link: 'active',
    },
    {
      title: 'Completed',
      isActive: status === 'COMPLETED',
      onClick: () => setStatusFilter('COMPLETED'),
      link: 'completed',
    },
  ];
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{numOfTodosLeft}</strong>
        <span> </span>
        <span>{numOfTodosLeft <= 1 ? 'item' : 'items'}</span>
        <span> left</span>
      </span>

      <ul className='filters'>
        {FilterBtn.map((btn) => (
          <FilterButton key={`btn${btn.title}`} {...btn} />
        ))}
      </ul>
      {numOfTodos > numOfTodosLeft && (
        <button className='clear-completed' onClick={clearCompleted}>Clear completed</button>
      )}
    </footer>
  );
});

const FilterButton = memo((props) => {
  const { title, onClick, link, isActive } = props;
  return (
    <>
      <li>
        <a
          href={`#/${link}`}
          className={`${isActive ? 'selected' : ''}`}
          onClick={onClick}
        >
          {title}
        </a>
      </li>
    </>
  );
});
export default Footer;
