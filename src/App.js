import React from "react";
import CardList from "./components/CardList";
import { data } from "./components/array";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: data.meals,
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

  render() {
    return (
      <div id="app-body">
        <CardList myMeals={this.state.meals} />
      </div>
    );
  }
}
