document.addEventListener('DOMContentLoaded', () => {

    const url = "https://api.adviceslip.com/advice";
    const button = document.querySelector(".card-advice-button button")
    const divtitle = document.querySelector(".card-advice-title h1")
    const divtext = document.querySelector(".card-advice-text")

    renderAdvices(url)

    async function requestAdvice(url) {

        try {
            let data = await fetch(url)
            let dataBody = await data.json()

            return dataBody
        } catch (error) {
            throw new Error(error.message)
  
        }

    }

    async function renderAdvices() {
        let advice = await requestAdvice(url)


        divtitle.innerHTML = ''
        divtext.innerHTML = ''

        divtitle.innerHTML = `advice # ${advice.slip.id}`
        divtext.innerHTML = `"${advice.slip.advice}"`

    }

    button.addEventListener('click', () => {
        renderAdvices()
    })

})