

async function generate_advice (url) {
    const response = await fetch(url)
    var data = await response.json()
    console.log(data)
    var id = JSON.stringify(data.slip.id)
    var advice = JSON.stringify(data.slip.advice)
    show_advice(id, advice)
}

function show_advice(id, advice){
    document.getElementById("adviceno").innerText = "ADVICE #" + id
    document.getElementById("advice").innerText = advice
}

generate_advice("https://api.adviceslip.com/advice")

document.getElementById("dice").addEventListener("click", () => generate_advice("https://api.adviceslip.com/advice"))


