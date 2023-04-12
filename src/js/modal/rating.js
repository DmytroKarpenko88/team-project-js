/* <div class="Stars" style="--rating: 2.3;" aria-label="Rating 
of this product is 2.3 out of 5."></div> */

//
const vote = document.querySelector('.statistic-vote');
// voteCount modal.js
const totalVotes = document.querySelector('.statistic-votes');

console.log(vote);

function renderRatingStar() {
  const modalRating = document.querySelector('.statistic-wraper');
  modalRating.innerHTML = `
  <div class="Stars" style="--rating: 2.3;" aria-label="Rating 
  of this product is ${2.3} out of ${5}."></div>
  `;
}

const modalRating = document.querySelector('.statistic-wraper');
modalRating.innerHTML = `
  <div class="Stars" style="--rating: ${
    (Number(vote_average).toFixed(1) / vote_count) * 100
  };" aria-label="Rating 
  of this product is ${Number(vote_average).toFixed(
    1
  )} out of ${vote_count}."></div>
  `;
