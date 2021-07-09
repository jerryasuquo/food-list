import React from "react";

export default function CardList(props) {
  const { myMeals } = props;
  const myMealsList = myMeals.map((meal, index) => {
    console.log(meal.price);
    return (
      <div key={meal.id} id="cards-list">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <div id="cards-details">
          <h3>
            {meal.strMeal}
            <span>{meal.price}</span>
          </h3>
          <p id="serving">Served with french fries + drink</p>
          <p id="description">
            Choices of Cakes, Fanta, Sprite, Upgrade to large fries, and whopper
            patty, and Tender crisp patty and more..
          </p>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star fa-star-gray"></i>
          <a href="#" id="add-btn">
            +
          </a>
        </div>
      </div>
    );
  });

  return (
    <>
      <div id="card-container">{myMealsList}</div>
      <a href="#" id="learn-more-btn">
        Learn More
      </a>
    </>
  );
}
