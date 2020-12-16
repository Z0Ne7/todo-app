import React, { memo } from 'react';

const Footer = memo((props) => {
  const FilterBtn = [
    {
      title: 'All',
      isActive: true,
      onClick: () => {},
      link: '',
    },
    {
      title: 'Active',
      isActive: false,
      onClick: () => {},
      link: 'active',
    },
    {
      title: 'Completed',
      isActive: false,
      onClick: () => {},
      link: 'completed',
    },
  ];
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>2</strong>
        <span> </span>
        <span>items</span>
        <span> left</span>
      </span>

      <ul className='filters'>
        {FilterBtn.map(btn => (
          <FilterButton {...btn} /> 
        ))}
      </ul>
      <button className='clear-completed'>Clear completed</button>
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
