const container = document.querySelector(".container")
const rocket = document.querySelector(".rocket")
const rocketBody = document.querySelector(".rocket-main")

const colors = ['red', 'green', 'purple', '#0bfa5b', '#ff004c']


function createShuttle() {
    let colorValue = Math.ceil(Math.random() * 5) - 1
    const icon = '<i class="fa-solid fa-shuttle-space"></i>'
    const shuttle = document.createElement("div")

    shuttle.innerHTML = icon
    shuttle.className = 'shuttle'
    shuttle.style.color = colors[colorValue]
    container.appendChild(shuttle)
    setTimeout(() => {
        container.removeChild(shuttle)
    }, 16000)

    if(colorValue === 2 || colorValue === 1 || colorValue === 3){
       setTimeout(() => {
            shuttle.style.transform = `rotate(180deg)`
            shuttle.style.animationPlayState = 'paused'
            shuttle.style.top = '90%'
       }, 3000)

       setTimeout(() => {
            rocketBody.classList.add("addClassToRocketBody")
       }, 5000)
    }else {
        rocketBody.classList.remove("addClassToRocketBody")
    }

    if(colorValue === 2){
        bulet()
    }
    if(colorValue === 1){
        bulet()
    }
    if(colorValue === 3){
        bulet()
    }
}


function getPosition() {
    const shuttle = document.querySelector(".shuttle")
    const shuttle2 = document.querySelector(".shuttle-2")
    const rocket = document.querySelector(".rocket")
    const rocketTopChesis = document.querySelector(".rocket-top-chesis")
    const rocketLine1Chesis = document.querySelector(".rocket-line1-chesis")
    const rocketLine2Chesis = document.querySelector(".rocket-line2-chesis")
    const rocketBottomChesis = document.querySelector(".rocket-bottom-chesis")

    const shuttleValue = shuttle.offsetTop
    const shuttle2Value = shuttle2.offsetTop

    if(shuttleValue >= 285 && shuttleValue <= 400){
        rocket.style.top = '0'
        rocket.classList.add("pused")
    }else {
        rocket.style.top = '20px'
        rocket.classList.remove("pused")
    }

    if(shuttle2Value > 30 && shuttle2Value < 32 ){
        setTimeout(() => {
            // rocket.style.animation = `rocketAnimation ${0.1}s linear infinite`
            rocketTopChesis.style.backgroundColor = '#ff8800'
            rocketLine2Chesis.style.backgroundColor = '#ff8800'
            rocketLine1Chesis.style.backgroundColor = '#ff8800'
            rocketBottomChesis.style.backgroundColor = '#ff8800'
            setTimeout(() => {
                // rocket.style.animation = `rocketAnimation ${2}s linear infinite`
                rocketTopChesis.style.backgroundColor = '#f00869'
                rocketLine1Chesis.style.backgroundColor = '#f00869'
                rocketLine2Chesis.style.backgroundColor = '#f00869'
                rocketBottomChesis.style.backgroundColor = '#f00869'
            }, 10)
        }, 2500)
    }
}

function bulet() {
    const setBulet = setInterval(() => {
        const buletItem = document.createElement('div')
        buletItem.className = 'buletItem'
        for(let i = 1; i <= 10; i++){
            const label = document.createElement('label')
            label.style = `--i: ${i}`
            const span = document.createElement('span')
            label.appendChild(span)
            buletItem.appendChild(label)
        }
        rocket.appendChild(buletItem)

        setTimeout(() => {
            rocket.removeChild(buletItem)
        }, 3000)

    }, 300)

    setTimeout(() => {
        clearInterval(setBulet)
    }, 2000)
}



const shuttle2Colors = ['#eecc0a', '#ee5e0a', '#ee0ac8', '#0bfa5b', '#ff004c', '#12ee0a', '#ee0a1d']

function createShuttleTow() {
    let colorValue = Math.ceil(Math.random() * 6) - 1
    const icon = '<i class="fa-solid fa-rocket"></i>'
    const shuttleTow = document.createElement("div")

    shuttleTow.innerHTML = icon
    shuttleTow.className = 'shuttle-2'
    shuttleTow.style.color = shuttle2Colors[colorValue]
    container.appendChild(shuttleTow)
   
    enimyBulet(shuttleTow)

    setTimeout(() => {
        container.removeChild(shuttleTow)
    }, 5000)
}

function enimyBulet(shuttleTow) {
    const setBulet = setInterval(() => {
        const buletItem = document.createElement('div')
        buletItem.className = 'enimyBulet'
        for(let i = 1; i <= 10; i++){
            const label = document.createElement('label')
            label.style = `--i: ${i}`
            const span = document.createElement('span')
            label.appendChild(span)
            buletItem.appendChild(label)
        }
        shuttleTow.appendChild(buletItem)
 
        setTimeout(() => {
            shuttleTow.removeChild(buletItem)
        }, 5000)
    }, 100)

    setTimeout(() => {
        clearInterval(setBulet)
    }, 500)
    
}


const shuttleTowCreated = setInterval(createShuttleTow, 8000)
const intervalId = setInterval(getPosition, 300);
let shuttleItems =  setInterval(createShuttle, 10000)
