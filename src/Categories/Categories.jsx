import React, { useState } from 'react';
import LHSArrow from '../assets/LHS Arrow.png';
import RHSArrow from '../assets/RHS Arrow.png';
import Appartmen from '../assets/categories1.png';
import DuplexHouse from '../assets/categories2.png';
import Office from '../assets/categories3.png';

const Categories = ({ categories, handleArrowClick }) => {
  return (
    <div className='container mt-[950px] mx-auto'>
      <div className='flex justify-between items-center'>
        <h3 className='text-blue-950 text-5xl font-bold font-Osan leading-[68px]'>
          Browse By Categories
        </h3>
        <div className='items-end flex'>
          <button onClick={() => handleArrowClick('prev')}>
            <img
              src={LHSArrow}
              alt=''
              className='w-[50px] h-[50px] transition-transform duration-300 ease-in-out transform hover:scale-110'
            />
          </button>
          <button onClick={() => handleArrowClick('next')}>
            <img
              src={RHSArrow}
              alt=''
              className='w-[50px] h-[50px] transition-transform duration-300 ease-in-out transform hover:scale-110'
            />
          </button>
        </div>
      </div>
      <div className='mt-[50px] flex justify-between overflow-hidden'>
        {categories.map((category, index) => (
          <div
            key={index}
            className='flex transform transition-transform duration-300 ease-in-out hover:scale-110'
          >
            <img src={category.image} alt='' />
            <div className='ml-[16px] my-[39px]'>
              <h4 className='text-blue-950 text-xl font-bold font-Man leading-7'>
                {category.title}
              </h4>
              <p className='text-black text-base font-normal font-Man leading-7'>
                {category.description}
              </p>
              <p className='text-blue-950 text-base font-normal font-Man leading-7'>
                {category.propertyCount} Property
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CategoriesContainer = () => {
  const initialData = [
    {
      title: 'Apartment',
      description: 'Lorem ipsum dolor sitam consectetur elit.',
      propertyCount: 22,
      image: Appartmen,
    },
    {
      title: 'Duplex House',
      description: 'Lorem ipsum dolor sitam consectetur elit.',
      propertyCount: 25,
      image: DuplexHouse,
    },
    {
      title: 'Office',
      description: 'Lorem ipsum dolor sitam consectetur elit.',
      propertyCount: 30,
      image: Office,
    },
    {
      title: 'Duplex House',
      description: 'Lorem ipsum dolor sitam consectetur elit.',
      propertyCount: 25,
      image: DuplexHouse,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === 'next') {
      setStartIndex((prevIndex) =>
        (prevIndex + 1) % (initialData.length - 2)
      );
    } else {
      setStartIndex((prevIndex) =>
        prevIndex === 0 ? initialData.length - 3 : prevIndex - 1
      );
    }
  };

  const visibleCategories = initialData.slice(startIndex, startIndex + 3);

  return (
    <Categories categories={visibleCategories} handleArrowClick={handleArrowClick} />
  );
};

export default CategoriesContainer;
