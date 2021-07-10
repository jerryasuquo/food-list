import React from "react";
import CardList from "./components/CardList";
import { data } from "./components/array";

export default class App extends React.Component {
  /*

    using constructor fn that takes in props.
      using super method that takes in props.
      set state to equal an object with a meals key, and pass it its value from the exported data object.

    using componentDidMount() 
     using fetch() to collect data from an external server, using .then() which takes in an anon callback fn as a parameter, and give the anon fn a 'data' params which is the data being fetched, then return the data and jsonify it using .json()
     using .then() again which takes in a callback fn that has a jsonData params, which is the response received, and returns the jsonData
       using .setState() to update our state with the data collected.
       using .catch() which takes in a callback fn that has an error params, and console.log() the err, to catch any errors.

    return a cardlist child component which takes in myMeals as props, and set the value to be this.state.meals
  */

  constructor(props) {
    super(props);
    this.state = {
      meals: data.meals,
      searchQuery: "",
    };
  }

  componentDidMount() {
    fetch("https://asm-dev-api.herokuapp.com/api/v1/food/")
      .then((data) => data.json())
      .then((jsonRes) => {
        console.log(jsonRes.data.meals);
        this.setState({
          meals: jsonRes.data.meals,
        });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    this.setState(
      {
        searchQuery: event.target.value,
      },
      () => {
        console.log("Query Test", this.state.searchQuery);
      }
    );
  };

  render() {
    const filterMeals = this.state.meals.filter((meal) => {
      return meal.strMeal.toLowerCase().includes(this.state.searchQuery);
    });

    return (
      <div id="app-body">
        <form id="search-box">
          <input
            type="text"
            placeholder="search..."
            id="search-query"
            onChange={this.handleChange}
          />
        </form>
        <CardList myMeals={filterMeals} />
      </div>
    );
  }
}
