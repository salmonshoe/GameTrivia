//$(document).ready(function () {
//I created an array of multiple choice question objects. Each with the question and it's potential options of answers.
var q = [
    {
        question: "Which show has three girls with superpowers?",
        options: ["Powerpuff Girls", "ChalkZone", "Totally Spies", "Courage the Cowardly Dog"]//0
    },
    {
        question: "Which show has boys scheming kids from the cul-de-sac?",
        options: ["Hey Arnold", "Looney Tunes", "Cow & Chicken", "Ed, Edd, n Eddy"]//3
    },
    {
        question: "This show's premise was built on an organization fighting off evil adults.",
        options: ["Transformers", "Teenage Mutant Ninja Turtles", "Codename: Kids Next Door", "Adventure Time"]//2
    },
    {
        question: "Who is the macho man that radiates confidence among women?",
        options: ["Bugs Bunny", "Shaggy", "Ben10", "Johnny Bravo"]//3
    },
    {
        question: "This warrior is on a quest to defeat the evil wizard Aku.",
        options: ["Duck Dodgers", "Samurai Jack", "Danny Phantom", "Captain Planet"]//1
    },
    {
        question: "These partners in crime would get the munchies while chasing down bad guys!",
        options: ["Mordecai & Rigby", "Finn the Human & Jake the Dog", "Scooby & Shaggy", "Phineas & Ferb"]//2
    },
    {
        question: "This show had superheroes who played a parody of the Avengers while struggling through everyday life",
        options: ["Teen Titans", "Dexter's Laboratory", "Justice League", "Young Justice"]//1
    },
    {
        question: "In this show, warriors unite to defend Earth against intergalactic evils",
        options: ["Dragon Ball Z", "Rick & Morty", "Cowboy Bebop", "Avatar: The Last Airbender"]//0
    }
];

//I then created the button values each multiple choice variable will have throughout the game. I commented the right answers for clarity.
//Not only will it extract the proper key value from var q, but it will also create a button in the HTML document.
var a = [$("<button>").click(q0c).text(q[0].options[0]), //Powerpuff Girls
$("<button>").click(q1i).text(q[1].options[0]),
$("<button>").click(q2i).text(q[2].options[0]),
$("<button>").click(q3i).text(q[3].options[0]),
$("<button>").click(q4i).text(q[4].options[0]),
$("<button>").click(q5i).text(q[5].options[0]),
$("<button>").click(q6i).text(q[6].options[0]),
$("<button>").click(q7c).text(q[7].options[0]), //Dragon Ball Z

];

var b = [$("<button>").click(q0i).text(q[0].options[1]),
$("<button>").click(q1i).text(q[1].options[1]),
$("<button>").click(q2i).text(q[2].options[1]),
$("<button>").click(q3i).text(q[3].options[1]),
$("<button>").click(q4c).text(q[4].options[1]), //Samurai Jack
$("<button>").click(q5i).text(q[5].options[1]),
$("<button>").click(q6c).text(q[6].options[1]), //Dexter's Laboratory
$("<button>").click(q7i).text(q[7].options[1]),
];

var c = [$("<button>").click(q0i).text(q[0].options[2]),
$("<button>").click(q1i).text(q[1].options[2]),
$("<button>").click(q2c).text(q[2].options[2]), //Codename: Kid's Next Door
$("<button>").click(q3i).text(q[3].options[2]),
$("<button>").click(q4i).text(q[4].options[2]),
$("<button>").click(q5c).text(q[5].options[2]), //Scooby & Shaggy
$("<button>").click(q6i).text(q[6].options[2]),
$("<button>").click(q7i).text(q[7].options[2]),
];

var d = [$("<button>").click(q0i).text(q[0].options[3]),
$("<button>").click(q1c).text(q[1].options[3]), // Ed, Edd n Eddy
$("<button>").click(q2i).text(q[2].options[3]),
$("<button>").click(q3c).text(q[3].options[3]), // Johnny Bravo
$("<button>").click(q4i).text(q[4].options[3]),
$("<button>").click(q5i).text(q[5].options[3]),
$("<button>").click(q6i).text(q[6].options[3]),
$("<button>").click(q7i).text(q[7].options[3]),
];

//The following result messages arrays was my attempt to best mirror the homework Trivia video provided from Gitlab. At first it seemed inefficient but I like the uniqueness behind it.  
var correct = ["Correct!<br/> Aren't you some sugar, spice and everything nice?",
    "Correct!<br/> You earned yourself a jawbreaker!",
    "Correct!<br/> On your way to Numbah 1 !",
    "Correct!<br/> Right on, baby bebe.",
    "Correct!<br/> He who runs with aggression, runs without dignity",
    "Correct!<br/> Looks like the only Scooby snack around here is you.",
    "Correct!<br/> Keep up the good work you hero.",
    "Correct!<br/> Your power level ... IT'S OVER 9000!!!"];
var incorrect = ["Incorrect<br/> The answer was Powerpuff Girls!",
    "Incorrect<br/> The answer was Ed, Edd, n Eddy!",
    "Incorrect<br/> The answer was Codename: Kid's Next Door",
    "Incorrect<br/> The answer was Johnny Bravo",
    "Incorrect<br/> The answer was Samurai Jack",
    "Incorrect<br/> The answer was Scooby & Shaggy",
    "Incorrect<br/> The answer was Dexter's Laboratory",
    "Incorrect<br/> The answer was Dragon Ball Z"];

//This is to keep track of the question number and the score count
var number = 0; number++;
var score = 0; score++;

$("#beginButton").click(questionZero).click(run);

//I will store my timer info here
var timeCount = 60 * 1000 //BASICALLY 1 MINUTE BUT IDK HOW TO CONVERT
var timeTime;

function run() {
    clearInterval(timeTime);
    timeTime = setInterval(decrement, 1000);
}
function decrement() {
    timeCount--;
    $("#big-time-rush").text(timeCount);

    if (timeCount === 0) {
        stop();
        endGame();
        $("#answer001").html("<br/>Finish the game in less than 2 minutes next time!") //Not applicable to each question but close enough
        //<ADD A SLOWPOKE IMAGE>
    }
}
function stop() {
    clearInterval(timeTime);
}

/*The logic I had in mind was to create a function for the question that appears on screen (named question#). It'll contain the multiple
 choice buttons that trigger to either a function for the correct answer or a function to the incorrect answer. Those trigger functions
 are named according to their variable q index and whether it is correct or incorrect. 

 I apologize in advance if this is already a headache to look over. It took me a while to organize it. There definitely is an efficient way 
 to do this but I couldn't wrap my mind around embedding if else statements within for loops to the array of objects I created. 
 Especially after throwing in those jQuery button calls.*/
function questionZero() {
    $("#hideThisJawn").hide();
    $("#message001").hide();
    run();
    $("#ask").html(q[0].question);
    $("#A").html(a[0]);
    $("#B").html(b[0]);
    $("#C").html(c[0]);
    $("#D").html(d[0]);

    $("#numberQuestion").html(number++);
}
function q0c() {
    $("#answer001").html("<div id=green001>" + correct[0]);
    $("#image-holder").html("<img src='assets/images/01_powerpuff.gif' width='400px'/>");
    $("#A").text("");
    $("#B").text("");
    $("#C").text("");
    $("#D").text("");
    next001.innerHTML = "<button class=buttons001 onclick=questionOne()>Next</button>";
    scoreDisplay.innerHTML = score++;
}
function q0i() {
    $("#answer001").html("<div id=red001>" + incorrect[0]);
    $("#image-holder").html("<img src='assets/images/01_powerpuff.gif' width='400px'/>");
    $("#A").text("");
    $("#B").text("");
    $("#C").text("");
    $("#D").text("");
    next001.innerHTML = "<button class=buttons001 onclick=questionOne()>Next</button>";
}

function questionOne() {
    $("#ask").html(q[1].question);
    $("#image-holder").html("");
    $("#A").html(a[1]);
    $("#B").html(b[1]);
    $("#C").html(c[1]);
    $("#D").html(d[1]);
    //Hide the next button as you move on to the following question
    //next001.innerHTML = "";
    //As a new question arises, I want the answer result and next button to be hidden. The question number is added
    $("#next001").text("");
    $("#answer001").text("");
    $("#numberQuestion").html(number++);
}
function q1c() {
    answer001.innerHTML = "<div id=green001>" + correct[1] + "</div>";
    $("#image-holder").html("<img src='assets/images/02-eddbored.gif' width='400px'/>");
    $("#A").text("");
    $("#B").text("");
    $("#C").text("");
    $("#D").text("");
    //Change the next button to your new question
    next001.innerHTML = "<button class=buttons001 onclick=questionTwo()>Next</button>";
    scoreDisplay.innerHTML = score++;
}
function q1i() {//Change the function name to the question result
    //Change the incorrect answer index
    answer001.innerHTML = "<div id=red001>" + incorrect[1] + "</div>";
    $("#image-holder").html("<img src='assets/images/02-eddbored.gif' width='400px'/>");
    $("#A").text("");
    $("#B").text("");
    $("#C").text("");
    $("#D").text("");
    //Change the next button to your new question
    next001.innerHTML = "<button class=buttons001 onclick=questionTwo()>Next</button>";
}
//==== GET READY FOR A LONG LIST OF FUNCTIONS REPEATING PRETTY MUCH THE SAME THING BUT W/ DIFFERENT INDEXES FOR THE VARIABLES
function questionTwo() {
    $("#ask").html(q[2].question);
    $("#image-holder").html("");
    $("#A").html(a[2]);
    $("#B").html(b[2]);
    $("#C").html(c[2]);
    $("#D").html(d[2]);

    $("#next001").text("");
    $("#answer001").text("");
    $("#numberQuestion").html(number++);
}
function q2c() {
    answer001.innerHTML = "<div id=green001>" + correct[2] + "</div>";
    $("#image-holder").html("<img src='assets/images/03_kids.gif' width='400px'/>");
    $("#A").text("");
    $("#B").text("");
    $("#C").text("");
    $("#D").text("");

    next001.innerHTML = "<button class=buttons001 onclick=questionThree()>Next</button>";
    scoreDisplay.innerHTML = score++;
}
function q2i() {
    answer001.innerHTML = "<div id=red001>" + incorrect[2] + "</div>";
    $("#image-holder").html("<img src='assets/images/03_kids.gif' width='400px'/>");
    $("#A").text("");
    $("#B").text("");
    $("#C").text("");
    $("#D").text("");

    next001.innerHTML = "<button class=buttons001 onclick=questionThree()>Next</button>";
}

function questionThree() {
    $("#ask").html(q[3].question);
    $("#image-holder").html("");
    $("#A").html(a[3]);
    $("#B").html(b[3]);
    $("#C").html(c[3]);
    $("#D").html(d[3]);

    $("#next001").text("");
    $("#answer001").text("");
    $("#numberQuestion").html(number++);
}
function q3c() {
    answer001.innerHTML = "<div id=green001>" + correct[3] + "</div>";
    $("#image-holder").html("<img src='assets/images/04_johnny.gif' width='400px'/>");
    $("#A").text("");
    $("#B").text("");
    $("#C").text("");
    $("#D").text("");

    next001.innerHTML = "<button class=buttons001 onclick=questionFour()>Next</button>";
    scoreDisplay.innerHTML = score++;
}
function q3i() {
    answer001.innerHTML = "<div id=red001>" + incorrect[3] + "</div>";
    $("#image-holder").html("<img src='assets/images/04_johnny.gif' width='400px'/>");
    $("#A").text("");
    $("#B").text("");
    $("#C").text("");
    $("#D").text("");

    next001.innerHTML = "<button class=buttons001 onclick=questionFour()>Next</button>";
}

function questionFour() {
    $("#ask").html(q[4].question);
    $("#image-holder").html("");
    $("#A").html(a[4]);
    $("#B").html(b[4]);
    $("#C").html(c[4]);
    $("#D").html(d[4]);

    $("#next001").text("");
    $("#answer001").text("");
    $("#numberQuestion").html(number++);
}
function q4c() {
    answer001.innerHTML = "<div id=green001>" + correct[4] + "</div>";
    $("#image-holder").html("<img src='assets/images/04_samurai.gif' width='400px'/>");
    $("#A").text("");
    $("#B").text("");
    $("#C").text("");
    $("#D").text("");

    next001.innerHTML = "<button class=buttons001 onclick=questionFive()>Next</button>";
    scoreDisplay.innerHTML = score++;
}
function q4i() {
    answer001.innerHTML = "<div id=red001>" + incorrect[4] + "</div>";
    $("#image-holder").html("<img src='assets/images/04_samurai.gif' width='400px'/>");
    $("#A").text("");
    $("#B").text("");
    $("#C").text("");
    $("#D").text("");

    next001.innerHTML = "<button class=buttons001 onclick=questionFive()>Next</button>";
}

function questionFive() {
    $("#ask").html(q[5].question);
    $("#image-holder").html("");
    $("#A").html(a[5]);
    $("#B").html(b[5]);
    $("#C").html(c[5]);
    $("#D").html(d[5]);

    $("#next001").text("");
    $("#answer001").text("");
    $("#numberQuestion").html(number++);
}
function q5c() {
    answer001.innerHTML = "<div id=green001>" + correct[5] + "</div>";
    $("#image-holder").html("<img src='assets/images/05_scooby.gif' width='400px'/>");
    $("#A").text("");
    $("#B").text("");
    $("#C").text("");
    $("#D").text("");

    next001.innerHTML = "<button class=buttons001 onclick=questionSix()>Next</button>";
    scoreDisplay.innerHTML = score++;
}
function q5i() {
    answer001.innerHTML = "<div id=red001>" + incorrect[5] + "</div>";
    $("#image-holder").html("<img src='assets/images/05_scooby.gif' width='400px'/>");
    $("#A").text("");
    $("#B").text("");
    $("#C").text("");
    $("#D").text("");

    next001.innerHTML = "<button class=buttons001 onclick=questionSix()>Next</button>";
}

function questionSix() {
    $("#ask").html(q[6].question);
    $("#image-holder").html("");
    $("#A").html(a[6]);
    $("#B").html(b[6]);
    $("#C").html(c[6]);
    $("#D").html(d[6]);

    $("#next001").text("");
    $("#answer001").text("");
    $("#numberQuestion").html(number++);
}
function q6c() {
    answer001.innerHTML = "<div id=green001>" + correct[6] + "</div>";
    $("#image-holder").html("<img src='assets/images/06_dexters.gif' width='400px'/>");
    $("#A").text("");
    $("#B").text("");
    $("#C").text("");
    $("#D").text("");

    next001.innerHTML = "<button class=buttons001 onclick=questionSeven()>Next</button>";
    scoreDisplay.innerHTML = score++;
}
function q6i() {
    answer001.innerHTML = "<div id=red001>" + incorrect[6] + "</div>";
    $("#image-holder").html("<img src='assets/images/06_dexters.gif' width='400px'/>");
    $("#A").text("");
    $("#B").text("");
    $("#C").text("");
    $("#D").text("");

    next001.innerHTML = "<button class=buttons001 onclick=questionSeven()>Next</button>";
}

function questionSeven() {
    $("#ask").html(q[7].question);
    $("#image-holder").html("");
    $("#A").html(a[7]);
    $("#B").html(b[7]);
    $("#C").html(c[7]);
    $("#D").html(d[7]);

    $("#next001").text("");
    $("#answer001").text("");
    $("#numberQuestion").html(number++);
}
function q7c() {
    answer001.innerHTML = "<div id=green001>" + correct[7] + "</div>";
    $("#image-holder").html("<img src='assets/images/07_dbz.gif' width='400px'/>");
    $("#A").text("");
    $("#B").text("");
    $("#C").text("");
    $("#D").text("");

    next001.innerHTML = "<button class=buttons001 onclick=endGame()>End Trivia</button>";
    scoreDisplay.innerHTML = score++;
}
function q7i() {
    answer001.innerHTML = "<div id=red001>" + incorrect[7] + "</div>";
    $("#image-holder").html("<img src='assets/images/07_dbz.gif' width='400px'/>");
    $("#A").text("");
    $("#B").text("");
    $("#C").text("");
    $("#D").text("");

    next001.innerHTML = "<button class=buttons001 onclick=endGame()>End Trivia</button>";
}

function endGame() {
    $("#ask").text("Thanks for playing this epic game of nostalgia!");
    $("#image-holder").html("");
    $("#A").text("");
    $("#B").text("");
    $("#C").text("");
    $("#D").text("");
    //We create a div element and give it the attribute (so it can be placed on the center)
    //We create a repeat001 to reset the game
    next001.innerHTML = "<div id=userInfo>" + "<button class=buttons001 onclick=repeat001()>Repeat</button>";
    answer001.innerHTML = "";
    
}
function repeat001() {
    //Which will take you back to the beginning of the 
    location.reload();

}

//});
