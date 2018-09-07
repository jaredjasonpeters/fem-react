//Husky Library
/* global React ReactDOM */

const Pet = props =>
    React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h3", {}, props.breed)
    ]);

class App extends React.Component {
    handleClick() {
        alert("you clicked the title");
    }
    render() {
        return React.createElement(`div`, {}, [
            React.createElement(
                "h1", {
                    className: "Hi",
                    onClick: this.handleClick,
                    style: {
                        cursor: "pointer",
                        color: "white"
                    }
                },
                "Adopt Me!"
            ),
            React.createElement(Pet, {
                name: "Luna",
                animal: "Dog",
                breed: "Halvanese"
            }),
            React.createElement(Pet, {
                name: "Bill",
                animal: "Cat",
                breed: "Siamese"
            }),
            React.createElement(Pet, {
                name: "Floyd",
                animal: "Bear",
                breed: "Grizzly"
            })
        ]);
    }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));