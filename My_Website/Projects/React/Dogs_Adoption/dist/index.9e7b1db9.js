// Twworzenie komponentu Pet
const Pet = (props)=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed), 
    ]);
};
// Twworzenie komponentu App -->
const App = ()=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Sonia",
            animal: "Dog",
            breed: "Puddel"
        }),
        React.createElement(Pet, {
            name: "Pancho",
            animal: "Horse",
            breed: "Mix"
        }),
        React.createElement(Pet, {
            name: "Leon",
            animal: "Dog",
            breed: "Beagle"
        }), 
    ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));

//# sourceMappingURL=index.9e7b1db9.js.map
