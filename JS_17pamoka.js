
    const lifes = document.querySelectorAll(`.progress`)
    const buttons = document.querySelectorAll(`button`)
    const images = document.querySelectorAll(`img`)
    const money = document.querySelectorAll(`h2`)
    const slifer = document.querySelector(`#slifer`)
    const obelisk = document.querySelector(`#obelisk`)
    const ra = document.querySelector(`#ra`)
    const specialPowerText = document.querySelectorAll(`h3`)
    const enemyImg = [
        "https://i.redd.it/3ibe83yipsi81.jpg",
        `https://i.redd.it/xdx0f7g7h1n91.jpg`,
        `https://i.pinimg.com/originals/7a/a7/cd/7aa7cd2b376530cedbb4cb4a1dd2f0bc.jpg`,
        "https://i.pinimg.com/originals/7a/a7/cd/7aa7cd2b376530cedbb4cb4a1dd2f0bc.jpg",
        "https://www.sideshow.com/cdn-cgi/image/width=1000,quality=80,f=auto/https://www.sideshow.com/storage/product-images/910857/blue-eyes-ultimate-dragon_yu-gi-oh_gallery_624c832a98ae0.jpg",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e076e1b4-6e13-43fe-a9f5-c42baa99ea1c/ddpe6b9-d51fcd9f-fd6f-45bd-85ea-73195785c893.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UwNzZlMWI0LTZlMTMtNDNmZS1hOWY1LWM0MmJhYTk5ZWExY1wvZGRwZTZiOS1kNTFmY2Q5Zi1mZDZmLTQ1YmQtODVlYS03MzE5NTc4NWM4OTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dC0CPnWDm3AfJ1ke6NFwAzZD76B8iygFczstTLAXUUg"

    ]
    let enemyHealth = 100
    let playerHealth = 100
    let myMoney = 0
    let specialPower = 0
    let enemyDamage = 0
    changeWeapon()

    buttons[0].onclick = (event) => {
        let playerDemage = Math.ceil(Math.random()*12)
        const playerGainsMoney = Math.floor(Math.random()*5)
        const randomEnemyImg = Math.floor(Math.random() * enemyImg.length)
        const probabilityForSpecialPower = Math.floor(Math.random()*10)
        specialPower = probabilityForSpecialPower

        myMoney += playerGainsMoney


        if (slifer.style.border === "4px solid") {
            if (specialPower > 7)  playerHealth += 5
        }
        if (obelisk.style.border === "4px solid") {
            if (specialPower > 6) {
                enemyDamage = 0
            }
        }
        if (ra.style.border === `4px solid`) {
            if (specialPower > 7) {
                playerDemage = playerDemage + playerDemage
            }
        }

        enemyHealth -=  playerDemage
        if (enemyHealth <= 0) enemyHealth = 0
        lifes[1].style.width = enemyHealth + "%"

        setTimeout(()=> {
            const enemyDemage = Math.floor(Math.random()*10)
            enemyDamage = enemyDemage
            playerHealth = playerHealth - enemyDemage
            lifes[0].style.width = playerHealth + "%"
        },1500)

        if (enemyHealth <= 0) {
            images[1].src = enemyImg[randomEnemyImg]
            enemyHealth = 100
        }

        buyPotion()
}

function buyPotion () {
        buttons[1].onclick = () => {
        if (myMoney >= 40) {
            myMoney -= 40
            playerHealth = 100
        }
        }
}


function changeWeapon () {

    ra.onclick = () => {
        ra.style.border = "4px solid"
        obelisk.style.border = "none"
        slifer.style.border = "none"
        specialPowerText[0].innerText = `You Have selected The Winged Dragon of Ra, Ra has 30% chance to do double damage`
    }
    obelisk.onclick = () => {
        obelisk.style.border = "4px solid"
        slifer.style.border = "none"
        ra.style.border = "none"
        specialPowerText[0].innerText = `You Have selected Obelisk the Tormentor, Obelisk has 40% chance to block enemy attack`
    }
    slifer.onclick = () => {
        slifer.style.border = "4px solid"
        obelisk.style.border = "none"
        ra.style.border = "none"
        specialPowerText[0].innerText = `You Have selected Slifer the Sky Dragon, Slifer has 35% chance to heal player with 5 hp`
    }
}




    setInterval(()=> {
        money[0].innerText = `Money: ` + myMoney
    },1000)