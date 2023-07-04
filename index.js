const endDate ="5 july 2023 04:28 AM"
document.querySelector('#end-date').textContent =endDate

const inputs = document.querySelectorAll('input')

const date = ()=>{
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000

    // convert into days
    if(diff > 0){
    inputs[0].value = Math.floor(diff/3600/24)
    inputs[1].value = Math.floor(diff / 3600) % 24
    inputs[2].value = Math.floor(diff / 60) % 60
    inputs[3].value = Math.floor(diff) % 60
    }
}

setInterval(()=>{
    date()
},1000)