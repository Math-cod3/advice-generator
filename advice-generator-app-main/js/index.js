const newLocal = "https://api.adviceslip.com/advice";
const url = newLocal;
const button = document.querySelector(".card-advice-button button")

function requestAdvice(url) {
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const divtitle = document.querySelector(".card-advice-title h1")
            const divtext = document.querySelector(".card-advice-text")

            divtitle.innerHTML = `advice # ${data.slip.id}`
            divtext.innerHTML = `"${data.slip.advice}"`
        })

}
requestAdvice(url)