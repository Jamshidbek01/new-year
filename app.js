let time = document.querySelector('.time')
setInterval(() => {
    let nowYear = new Date().getFullYear()
    let newYear = new Date(`January 01 ${nowYear + 1} 00:00:00`)
    let currentTime = new Date()
    let a = newYear - currentTime
    let d = Math.floor(a / 1000 / 60 / 60 / 24)
    let h = Math.floor(a / 1000 / 60 / 60) % 24
    let m = Math.floor(a / 1000 / 60) % 60
    let s = Math.floor(a / 1000) % 60
    m < 10 ? m = "0" + m : m
    h < 10 ? h = "0" + h : h
    s < 10 ? s = "0" + s : s
    time.innerHTML = `<span>Yangi <span class="year">${nowYear + 1}</span>-yilga </span><span>${d} kun </span><span>${h}</span>:<span>${m}</span>:<span>${s} qoldi</span>`
}, 100);