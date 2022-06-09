"use strict"

//rating button script
const ratingBtn = document.querySelectorAll('.rating-number');

ratingBtn.forEach( btn =>{
  btn.addEventListener('click', handleRatingBtn)
})

function handleRatingBtn(event){
  ratingBtn.forEach(btn =>{
    btn.classList.remove('active')
  })

  if(event.target.classList.contains('rating-number')){
    event.target.classList.add('active')
  }else{
    event.target.parentElement.classList.add('active');
  }

  stars_score = event.target.textContent;

  console.log(stars_score)
}

//submit button script

const submitBtn = document.querySelector('.submitBtn');
const cardContent1 = document.querySelector('.card-content-1');
const cardContent2 = document.querySelector('.card-content-2');

let stars_score = 0;
const score = document.querySelector('.score');

submitBtn.addEventListener('click', onSubmit)

function onSubmit(){
  score.textContent = stars_score

  cardContent1.classList.add('hide');
  cardContent2.classList.remove('hide');
}