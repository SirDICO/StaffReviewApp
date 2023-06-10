import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex]= useState(0);
  const {name, job, image, text}= people[index];

  //functions
  const nextPerson = () => {
    let newIndex = index + 1;
    let SelectableIndex = checkNumber(newIndex);
    setIndex(SelectableIndex)
    
    // setIndex((index) => {
    //   let newIndex = index + 1;
    //   return checkNumber(newIndex);
    // })
  }

  const prevPerson = () => {
    let newIndex = index - 1;
    let SelectableIndex = checkNumber(newIndex);
    setIndex(SelectableIndex)
    // setIndex((index) => {
    //   let newIndex = index - 1;
    //   return checkNumber(newIndex);
    // })
  }

  //checking to avoid array out of bound error
  const checkNumber = (number) =>{
    if(number > people.length -1){return 0;}
    if(number < 0){return people.length -1;}
    return number;
  } 

  //Random person choosing
  const randomPerson = () =>{
    let randomNumber = Math.floor(Math.random() * people.length);
     if(randomNumber === index){
      randomNumber = index + 1;
     }
    setIndex(checkNumber(randomNumber))

  }

  return <article className='review'>
    
    <div className='img-container'>
      <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
    </div>

        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        
      <div className='button-container'>
            <button className='prev-btn' onClick={prevPerson}>
              <FaChevronLeft/>
            </button>
            <button className='next-btn'onClick={nextPerson}>
              <FaChevronRight/>
            </button>
      </div>
    <button className='random-btn' onClick={randomPerson}>Suprise me</button>
</article>;
};

export default Review;
