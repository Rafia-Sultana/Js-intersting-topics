// function welcomeMessage(name) {
//     console.log(name);
// }

// const names = ['rafia', 'sultana', 'faiza']
// welcomeMessage(names);

function welcomeMessage(greetHandler, name) {
    // console.log(greetHandler);
    greetHandler(name);
}
function greetMorning(name) {
    console.log('good Morning', name);
}
welcomeMessage(greetMorning, 'rafia');
