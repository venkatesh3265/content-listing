import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearchClick, filterContentList } from '../redux/slicer/contentSlicer';

const Navbar = () => {
  const dispatch = useDispatch();
  const { title, isSearchClicked } = useSelector((state) => state.contentlist);
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

  // Handle search icon click
  const handleSearchClick = () => {
    dispatch(toggleSearchClick());
  };

  const handleBackClick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    dispatch(filterContentList(query));
  };

  return (
    <div className='bg-nav-bar h-[80px] fixed w-full z-30'>
      <div className='flex items-center p-2'>
        <img
          className='w-[30px] h-[30px]'
          src='https://test.create.diagnal.com/images/Back.png'
          alt='Back'
          onClick={handleBackClick}
        />
        <div className='p-2 m-2 flex-1'>{title}</div>
        <div className='flex items-center'>
          {isSearchClicked && (
             <input
             type='text'
             value={searchQuery}
             onChange={handleSearchChange}
             className='border border-gray-300 rounded-full p-2 pl-4 m-2 w-60 transition-all duration-300 ease-in-out text-black focus:outline-none focus:ring-2 focus:ring-blue-500'
             placeholder='Search...'
           />
          )}
          <img
            className='w-[40px] h-[40px] p-1 m-2 cursor-pointer'
            src='https://test.create.diagnal.com/images/search.png'
            alt='Search'
            onClick={handleSearchClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
