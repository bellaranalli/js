let ingresarNombre = prompt("Choose your user name");
let deseaJugar = prompt("Wanna play?: \n- YES \n- NO");



if (deseaJugar == "YES") {
    let elejiAvatar = prompt("Select your avatar: \n- ANNIKA \n- SOUKA")
    alert(" WELCOME TO OUR WORLD " + elejiAvatar)
    for (let i = 1; i <= 2; i++) {

        if (i === 2) {
            alert("HURRY UP!!")
        }
    
        let ingresarJugadores = prompt("Number of players")
        alert(" You Are " + ingresarJugadores + "." + "\n Initializing:" + i)
       
    }
    alert("THE ROOM IS FULL, COME BACK LATER")
}


if (deseaJugar == "NO") {
    alert("BYE BYE HUMANO")
}



