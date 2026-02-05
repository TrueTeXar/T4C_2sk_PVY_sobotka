const quotes = [
    "Kód je jako vtip. Pokud ho musíš vysvětlovat, je špatný.",
    "Programátor je stroj, který přeměňuje kofein na kód.",
    "Dvakrát měř, jednou programuj.",
    "Chyba není v počítači, chyba je v tobě.",
    "Software je plyn, který se rozpíná, dokud nevyplní veškerou paměť."
];

// ...

export default function useQuotes() {
    const quoteEl = document.getElementById("quote-display");

    function setQuote(quote) {
        quoteEl.innerText = `${quote}`;
        //quoteEl.innerHTML = "<h1>" + quote + "</h1>";
    }

    let idx = 0;
    function advanceQuote() {
        idx = ++idx % quotes.length;
        setQuote(quotes[idx]);
    }


    quoteEl.addEventListener("click", () => {
        advanceQuote();
    });

    setInterval(advanceQuote, 5000);

    return {
        advanceQuote
    }
};
