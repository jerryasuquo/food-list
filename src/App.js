import React from "react";
import CardList from "./components/CardList";
// import { meals } from "./components/array";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     friends: meals,
  //     searchInput: "",
  //   };
  // }

  // componentDidMount() {
  //   fetch("https://asm-dev-api.herokuapp.com/api/v1/food/")
  //     .then((data) => data.json())
  //     .then((jsonRes) => {
  //       console.log(jsonRes.data.meals);
  //       this.setState({
  //         friends: jsonRes.data.meals,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }

  // handleChange = (e) => {
  //   this.setState(
  //     {
  //       searchInput: e.target.value,
  //     },
  //     () => console.log("InputTest", this.state.searchInput)
  //   );
  // };

  render() {
    // const filteredFriends = this.state.friends.filter((friend) => {
    //   return friend.name.toLowerCase().includes(this.state.searchInput);
    // });

    return (
      <div>
        {/* <form id="search-box">
          <input
            type="text"
            placeholder="search..."
            id="searchInput"
            onChange={this.handleChange}
          />
        </form> */}
        {/* <CardList myFriends={filteredFriends} /> */}
        {/* <CardList myFriends={meals} /> */}
      </div>
    );
  }
}

export default App;
