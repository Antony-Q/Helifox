// Function to generate quotes and authors
const generateQuote = function() {
    const quotes = [
        {
            quote: '"Educate the masses, elevate their standard of intelligence, and you will certainly have a successful nation."',
            author: "- Alexander Graham Bell"
        },
        {
            quote: '"ipsum lorem..."',
            author: "- Thomas Edison"
        }
    ];

    // Chooses a random quote
    let arrayIndex = Math.floor(Math.random() * quotes.length);
    
    // Creates DOM and grabs author and quote from array
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
// When the window loads a quote will display
window.onload = function() {
    generateQuote();

    // adds a button to generate quotes when clicked
    document.getElementById("generate").addEventListener('click', generateQuote);
}