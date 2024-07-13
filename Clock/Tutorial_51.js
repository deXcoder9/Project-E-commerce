let hours = document.getElementById('hours')
let minute = document.getElementById('min')
let second = document.getElementById('sec')

setInterval(()=>{
    let currentTime = new Date()
    hours.innerHTML = currentTime.getHours()<10? "0":"" + currentTime.getHours()
    minute.innerHTML = currentTime.getMinutes()<10? "0":"" + currentTime.getMinutes()
    second.innerHTML = currentTime.getSeconds()<10? "0":"" + currentTime.getSeconds()

},1000)
