// Function to generate quotes and authors
const generateQuote = function() {
    const quotes = [
        {
            quote: '"Educate the masses, elevate their standard of intelligence, and you will certainly have a successful nation."',
            author: "- Alexander Graham Bell"
        },
        {
            quote: '"Everyone needs a coach. It doesn\'t matter whether you\'re a basketball player, a tennis player, a gymnast, or a bridge player."',
            author: "- Bill Gates"
        },
        {
            quote: '“Technology is best when it brings people together.”',
            author: "- Matt Mullenweg"
        },
        {
            quote: '“It\'s not a faith in technology. It\'s faith in people.”',
            author: "- Steve Jobs"
        },
        {
            quote: '“The advance of technology is based on making it fit in so that you don\'t really even notice it.',
            author: "- Bill Gates"
        },
        {
            quote: '“Connecting to another is one of the most important things in the world and you can keep expanding that connection - one person, a family, a community, a country, a society, a culture.”',
            author: "- Eric Fischl"
        },
        {
            quote: '“What you are will show in what you do.”',
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