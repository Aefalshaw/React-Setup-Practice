// make a variable for the element
// the function .createElement() takes 3 parameters: 
// 1) type of element wants to be in terms of which html element it needs to be
// 2) what types of properties we want the element to contain 
// 3) what children this element needs to have
const helloReact = React.createElement("div", null,
    React.createElement("h1", null, "Hello Dojo!"),
    React.createElement("h3", null, "Things I need to do:"),
    React.createElement("ul", null,
        React.createElement("p", null, "* Learn react"),
        React.createElement("p", null, "* Climb Mt. Everest"),
        React.createElement("p", null, "* Run a marathon"),
        React.createElement("p", null, "* Feed the dogs")));


// reactDOM library. function render takes 2 args
// 1) element you want to load into DOM
// 2) dom selector
ReactDOM.render(helloReact, document.getElementById("app"));