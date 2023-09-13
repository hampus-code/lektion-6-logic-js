function changeColor() {
    document.getElementById("my-color-id").style.color = "red"
}

function variables() {

    var name = ""
    var age = 0

    name = "Benny "
    age = 15

    alert(name + age)
    console.log(name + age);
}

function arrays() {
    
    var score = [10, 100, 1000, 10000]

    //alert(score)
    alert(score[2])
}

function userLogin() {

    var result = prompt("Please input your login credentials")

    alert(result)
}

function loopExercise() {
    
    for (let i = 0; i < 10; i++) {

        alert(i)

    }
    
}

function calculateScore() {
    
    var playerScore = [100, 250, 400, 675]
    var sum = 0

    for (let i = 0; i < playerScore.length; i++) {

        sum += playerScore[i]
        alert(sum)

    }
}


//document.querySelector(".my-color").style.color = "green"

//document.querySelectorAll(".my-color").style.color = "blue"

