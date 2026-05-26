const button = document.querySelector('button');
const heading = document.querySelector('h1');

// 1. Take the button and wait for a prompt using the addEventListener
// waits for the button to be clicked and is attach to an element in html
button.addEventListener("click", function() {
    // 2. Wait for the prompt to be triggered using "click"
    // 3. When the prompt is triggered, a name will be asked

    const name = prompt("What is your name?");
    // 4. The heading will change due to the textContent

    // textContent allows us to change the text of an element in html
    // $ allows us to insert a variable into a string
    heading.textContent = `Hi, ${name}`;
    button.textContent = "Clicked!";
    // 5. console.log allows us to see the output in the console via inspect

    console.log("The button has been clicked!");
    console.log(`The user's name is ${name}`);
    // is it used because we want to see the output in the console when the button is clicked
    // debugging tool to check if the button is working
})