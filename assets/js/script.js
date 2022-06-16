function buildQuotes(quoteEl) {

    const quoteEl = document.createElement('quotes');
    const myQuotes = [
        {
            quote: '"Educate the masses, elevate their standard of intelligence, and you will certainly have a successful nation."',
            author: "- Alexander Graham Bell"
        },
        {
            quote: '"ipsum lorem..."',
            author: "- Thomas Edison"
        }
    ]
    myQuotes.appendChild(quoteEl);

};