
function get_machine_answer(){

    const answers = ["Rock","Paper","Scissors"];
    let choice = Math.floor(Math.random()*3);
    console.log(answers[choice])
    return answers[choice]
}

function get_user_answer(){
    return new Promise ( resolve => {
        document.getElementById("u_ans1").onclick = () => resolve("Rock");
        document.getElementById("u_ans2").onclick = () => resolve("Paper");
        document.getElementById("u_ans3").onclick = () => resolve("Scissors");
    });
}

    

function get_winner(ans1,ans2){
    
    if (ans1 === ans2){
        return "tie"
    } else if( ans1 === "Scissors" && ans2 == "Rock" ){
        return "machine"

    } else if (ans1 === "Scissors" && ans2 == "Paper"){
        return "user"
    } else if ( ans1 === "Paper" && ans2 === "Scissors"){
        return "machine"

    } else if (ans1 === "Paper" && ans2 === "Rock"){
        return "user"
    } else if (ans1 === "Rock" && ans2 === "Scissors"){
        return "user"
    } else if (ans1 === "Rock" && ans2 === "Paper"){
        return "machine"
    } else {
        return "Error"
    }
}

async function play (){

    let u_points = 0;
    let m_points = 0; 
    document.getElementById("u_p").textContent = `Points ${u_points}`;
    document.getElementById("m_p").textContent = `Points ${m_points}`;
    document.getElementById("round").textContent= `This is round 0 `;
    alert("The game has started, it consists of 5 rounds wins who has more points ")
    for (let i = 1 ; i <=5; i++){
        //alert("chose one ");
        document.getElementById("round").textContent= `This is round ${i}`;
        const user_answer = await get_user_answer();
        console.log("user answer ", user_answer);
        const machine_answer = get_machine_answer();
        document.getElementById("m_ans").innerText = machine_answer;
        console.log("machine answer ", machine_answer);
        const winner = get_winner(user_answer,machine_answer);
        console.log("the winner is ", winner )

        if ( winner === "user"){
            u_points++;
            document.getElementById("u_p").textContent = `Points ${u_points}`;
        } else if (winner === "machine"){
            m_points++;
            document.getElementById("m_p").textContent = `Points ${m_points}`;
        }
    }
    
    if ( u_points > m_points){
        document.getElementById("winner").textContent = "The winner is the user";
    } else if ( u_points < m_points ){
        document.getElementById("winner").textContent = "The winner is the machine";
    } else {
        document.getElementById("winner").textContent = "The winner is No one ";
    }
}


document.getElementById("machine").addEventListener("click",get_machine_answer);
document.getElementById("ply").addEventListener("click",play);