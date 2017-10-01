var playerTeam;
var oppTeam;
var oppName;
var playerActive;
var oppActive;
var turn = 0;
var music = document.createElement("audio"); //added audio
music.setAttribute("src", "assets/music/battleTheme.mp3");
music.addEventListener('ended', function () { //loop music
    this.currentTime = 0;
    this.play();
}, false);

$("document").ready(function () {

    //begin trainer object declarations
    //start red trainer object
    var red = [
        {
            name: "Pikachu",
            types: ["Electric"],
            doubleWeaknesses: [""],
            weaknesses: ["Ground"],
            resistances: ["Electric", "Flying", "Steel"],
            doubleResistances: [""],
            immunities: [""],
            stats: [180, 180, 252, 93, 230, 115, 203],
            status: "",
            imageFront: "assets/images/pikachu-front.gif",
            imageBack: "assets/images/pikachu-back.gif",
            ability: function () {

            },
            AI: function () {
                var random = Math.floor(Math.random() * 3.99);
                return random;
            },
            moves: [
                {
                    name: "Volt Tackle",
                    type: ["Electric", "Physical"],
                    power: 120,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Quick Attack",
                    type: ["Normal", "Physical"],
                    power: 40,
                    accuracy: 100,
                    priority: 1,
                    effect: function () {

                    }
                },
                {
                    name: "Light Screen",
                    type: ["Psychic", "-"],
                    power: 0,
                    accuracy: "-",
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Nuzzle",
                    type: ["Electric", "Physical"],
                    power: 20,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
            ]
        },
        {
            name: "Lapras",
            types: ["Water", "Ice"],
            doubleWeaknesses: [""],
            weaknesses: ["Fighting", "Electric", "Grass", "Rock"],
            resistances: ["Water", "Flying", "Steel"],
            doubleResistances: ["Ice"],
            immunities: [""],
            stats: [370, 370, 192, 181, 192, 214, 137],
            status: "",
            imageFront: "assets/images/lapras-front.gif",
            imageBack: "assets/images/lapras-back.gif",
            ability: function () {

            },
            AI: function () {
                var random = Math.floor(Math.random() * 3.99);
                return random;
            },
            moves: [
                {
                    name: "Surf",
                    type: ["Water", "Special"],
                    power: 90,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Blizzard",
                    type: ["Ice", "Special"],
                    power: 110,
                    accuracy: 70,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Ice Shard",
                    type: ["Ice", "Physical"],
                    power: 40,
                    accuracy: 100,
                    priority: 1,
                    effect: function () {

                    }
                },
                {
                    name: "Psychic",
                    type: ["Psychic", "Special"],
                    power: 90,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
            ]
        },
        {
            name: "Snorlax",
            types: ["Normal"],
            doubleWeaknesses: [""],
            weaknesses: ["Fighting"],
            resistances: [""],
            doubleResistances: [""],
            immunities: ["Ghost"],
            stats: [430, 430, 247, 148, 148, 247, 71],
            status: "",
            imageFront: "assets/images/snorlax-front.gif",
            imageBack: "assets/images/snorlax-back.gif",
            ability: function () {

            },
            AI: function () {
                var random = Math.floor(Math.random() * 3.99);
                return random;
            },
            moves: [
                {
                    name: "Toxic",
                    type: ["Poison", "-"],
                    power: 0,
                    accuracy: 90,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Body Slam",
                    type: ["Normal", "Physical"],
                    power: 85,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Crunch",
                    type: ["Dark", "Physical"],
                    power: 80,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "High Horsepower",
                    type: ["Ground", "Physical"],
                    power: 95,
                    accuracy: 95,
                    priority: 0,
                    effect: function () {

                    }
                },
            ]
        },
        {
            name: "Venusaur",
            types: ["Grass", "Poison"],
            doubleWeaknesses: [""],
            weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
            resistances: ["Electric", "Water", "Fighting", "Fairy"],
            doubleResistances: ["Grass"],
            immunities: [""],
            stats: [270, 270, 185, 188, 225, 225, 181],
            status: "",
            imageFront: "assets/images/venusaur-front.gif",
            imageBack: "assets/images/venusaur-back.gif",
            ability: function () {

            },
            AI: function () {
                var random = Math.floor(Math.random() * 3.99);
                return random;
            },
            moves: [
                {
                    name: "Leaf Storm",
                    type: ["Grass", "Special"],
                    power: 130,
                    accuracy: 90,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Leech Seed",
                    type: ["Grass", "-"],
                    power: 0,
                    accuracy: 90,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Sludge Bomb",
                    type: ["Poison", "Special"],
                    power: 90,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Bulldoze",
                    type: ["Ground", "Physical"],
                    power: 60,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
            ]
        },
        {
            name: "Charizard",
            types: ["Fire", "Flying"],
            doubleWeaknesses: ["Rock"],
            weaknesses: ["Water", "Electric",],
            resistances: ["Fire", "Fighting", "Steel", "Fairy"],
            doubleResistances: ["Grass", "Bug"],
            immunities: ["Ground"],
            stats: [266, 266, 190, 177, 245, 192, 225],
            status: "",
            imageFront: "assets/images/charizard-front.gif",
            imageBack: "assets/images/charizard-back.gif",
            ability: function () {

            },
            AI: function () {
                var random = Math.floor(Math.random() * 3.99);
                return random;
            },
            moves: [
                {
                    name: "Fire Blast",
                    type: ["Fire", "Special"],
                    power: 110,
                    accuracy: 85,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Air Slash",
                    type: ["Flying", "Special"],
                    power: 75,
                    accuracy: 95,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Focus Blast",
                    type: ["Fighting", "Special"],
                    power: 120,
                    accuracy: 70,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Will-O-Wisp",
                    type: ["Fire", "-"],
                    power: 0,
                    accuracy: 85,
                    priority: 0,
                    effect: function () {

                    }
                },
            ]
        },
        {
            name: "Blastoise",
            types: ["Water"],
            doubleWeaknesses: [""],
            weaknesses: ["Electric", "Grass"],
            resistances: ["Fire", "Water", "Steel", "Ice"],
            doubleResistances: [""],
            immunities: [""],
            stats: [268, 268, 188, 225, 192, 236, 177],
            status: "",
            imageFront: "assets/images/blastoise-front.gif",
            imageBack: "assets/images/blastoise-back.gif",
            ability: function () {

            },
            AI: function () {
                var random = Math.floor(Math.random() * 3.99);
                return random;
            },
            moves: [
                {
                    name: "Hydro Pump",
                    type: ["Water", "Special"],
                    power: 110,
                    accuracy: 80,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Flash Cannon",
                    type: ["Steel", "Special"],
                    power: 80,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Dark Pulse",
                    type: ["Dark", "Special"],
                    power: 80,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Ice Beam",
                    type: ["Ice", "Special"],
                    power: 90,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
            ]
        },
    ]

    //end of red object
    //start blue trainer object
    var blue = [
        {
            name: "Alakazam",
            types: ["Psychic"],
            doubleWeaknesses: [""],
            weaknesses: ["Bug", "Ghost", "Dark"],
            resistances: ["Fighting", "Psychic"],
            doubleResistances: [""],
            immunities: [""],
            stats: [220, 220, 115, 104, 302, 214, 269],
            status: "",
            imageFront: "assets/images/alakazam-front.gif",
            imageBack: "assets/images/alakazam-back.gif",
            ability: function () {

            },
            AI: function () {
                var random = Math.floor(Math.random() * 3.99);
                return random;
            },
            moves: [
                {
                    name: "Psychic",
                    type: ["Psychic", "Special"],
                    power: 90,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Shadow Ball",
                    type: ["Ghost", "Special"],
                    power: 80,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Future Sight",
                    type: ["Psychic", "Special"],
                    power: 120,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Reflect",
                    type: ["Psychic", "-"],
                    power: 0,
                    accuracy: "-",
                    priority: 0,
                    effect: function () {

                    }
                },
            ]
        },
        {
            name: "Machamp",
            types: ["Fighting"],
            doubleWeaknesses: [""],
            weaknesses: ["Flying", "Psychic", "Fairy"],
            resistances: ["Bug", "Rock", "Dark"],
            doubleResistances: [""],
            immunities: [""],
            stats: [290, 290, 291, 181, 148, 192, 126],
            status: "",
            imageFront: "assets/images/machamp-front.gif",
            imageBack: "assets/images/machamp-back.gif",
            ability: function () {

            },
            AI: function () {
                var random = Math.floor(Math.random() * 3.99);
                return random;
            },
            moves: [
                {
                    name: "Cross Chop",
                    type: ["Fighting", "Physical"],
                    power: 100,
                    accuracy: 80,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Bulk Up",
                    type: ["Fighting", "-"],
                    power: 0,
                    accuracy: "-",
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Knock Off",
                    type: ["Dark", "Physical"],
                    power: 65,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Poison Jab",
                    type: ["Poison", "Physical"],
                    power: 80,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
            ]
        },
        {
            name: "Aerodactyl",
            types: ["Rock", "Flying"],
            doubleWeaknesses: [""],
            weaknesses: ["Water", "Electric", "Ice", "Rock", "Steel"],
            resistances: ["Normal", "Fire", "Poison", "Flying", "Bug"],
            doubleResistances: [""],
            immunities: ["Ground"],
            stats: [270, 270, 236, 148, 137, 170, 291],
            status: "",
            imageFront: "assets/images/aerodactyl-front.gif",
            imageBack: "assets/images/aerodactyl-back.gif",
            ability: function () {

            },
            AI: function () {
                var random = Math.floor(Math.random() * 3.99);
                return random;
            },
            moves: [
                {
                    name: "Rock Slide",
                    type: ["Rock", "Physical"],
                    power: 75,
                    accuracy: 90,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Crunch",
                    type: ["Dark", "Physical"],
                    power: 80,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Iron Head",
                    type: ["Steel", "Physical"],
                    power: 80,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Sky Drop",
                    type: ["Flying", "Physical"],
                    power: 60,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
            ]
        },
        {
            name: "Exeggutor",
            types: ["Grass", "Psychic"],
            doubleWeaknesses: ["Bug"],
            weaknesses: ["Fire", "Ice", "Poison", "Flying", "Ghost", "Dark"],
            resistances: ["Electric", "Water", "Grass", "Fighting", "Ground", "Psychic"],
            doubleResistances: [""],
            immunities: [""],
            stats: [300, 300, 214, 192, 280, 170, 126],
            status: "",
            imageFront: "assets/images/exeggutor-front.gif",
            imageBack: "assets/images/exeggutor-back.gif",
            ability: function () {

            },
            AI: function () {
                var random = Math.floor(Math.random() * 3.99);
                return random;
            },
            moves: [
                {
                    name: "Leaf Storm",
                    type: ["Grass", "Special"],
                    power: 130,
                    accuracy: 90,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Psychic",
                    type: ["Psychic", "Special"],
                    power: 90,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Sludge Bomb",
                    type: ["Poison", "Special"],
                    power: 90,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Hypnosis",
                    type: ["Psychic", "-"],
                    power: 0,
                    accuracy: 60,
                    priority: 0,
                    effect: function () {

                    }
                },
            ]
        },
        {
            name: "Arcanine",
            types: ["Fire"],
            doubleWeaknesses: [""],
            weaknesses: ["Ground", "Water", "Rock"],
            resistances: ["Fire", "Grass", "Ice", "Bug", "Fairy", "Steel"],
            doubleResistances: [""],
            immunities: [""],
            stats: [290, 290, 247, 181, 225, 181, 214],
            status: "",
            imageFront: "assets/images/arcanine-front.gif",
            imageBack: "assets/images/arcanine-back.gif",
            ability: function () {

            },
            AI: function () {
                var random = Math.floor(Math.random() * 3.99);
                return random;
            },
            moves: [
                {
                    name: "Extreme Speed",
                    type: ["Normal", "Physical"],
                    power: 80,
                    accuracy: 100,
                    priority: 1,
                    effect: function () {

                    }
                },
                {
                    name: "Flare Blitz",
                    type: ["Fire", "Physical"],
                    power: 120,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Thunder Fang",
                    type: ["Electric", "Physical"],
                    power: 65,
                    accuracy: 95,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Bulldoze",
                    type: ["Ground", "Physical"],
                    power: 60,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
            ]
        },
        {
            name: "Gyarados",
            types: ["Water", "Flying"],
            doubleWeaknesses: ["Electric"],
            weaknesses: ["Rock"],
            resistances: ["Fire", "Water", "Steel", "Fighting", "Bug"],
            doubleResistances: [""],
            immunities: ["Ground"],
            stats: [300, 300, 280, 179, 137, 225, 183],
            status: "",
            imageFront: "assets/images/gyarados-front.gif",
            imageBack: "assets/images/gyarados-back.gif",
            ability: function () {

            },
            AI: function () {
                var random = Math.floor(Math.random() * 3.99);
                return random;
            },
            moves: [
                {
                    name: "Aqua Tail",
                    type: ["Water", "Physical"],
                    power: 90,
                    accuracy: 90,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Crunch",
                    type: ["Dark", "Physical"],
                    power: 80,
                    accuracy: 100,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Ice Fang",
                    type: ["Ice", "Physical"],
                    power: 65,
                    accuracy: 95,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Dragon Dance",
                    type: ["Dragon", "-"],
                    power: 0,
                    accuracy: "-",
                    priority: 0,
                    effect: function () {

                    }
                },
            ]
        },
    ]
    //end of blue trainer object
    //end of trainer objects

    $("#redButton").on("click", function () { //red button handler
        playerTeam = red;
        oppTeam = blue;
        oppName = "Blue";
        initialize();
    })
 
    $("#blueButton").on("click", function () { //blue button handler
        playerTeam = blue;
        oppTeam = red;
        oppName = "Red";
        initialize();
    })

    function initialize() { //sets main display, creates display divs, calls selectPokemon() when complete
        $("#redButton").remove();
        $("#blueButton").remove();
        $("#mainDisplay").append("<div id=playerPokemonDisplay>");
        $("#mainDisplay").append("<div id=oppPokemonDisplay>");
        $("#mainDisplay").append("<div class=col-xs-2 id=oppTrainerSpriteBox>");
        if (oppName === "Red") {
            $('#oppTrainerSpriteBox').css({
                "background-image": "url(assets/images/red.png)",
                "background-size": "33% 100%",
                "background-repeat": "no-repeat"
            });
        }
        else {
            $('#oppTrainerSpriteBox').css({
                "background-image": "url(assets/images/blue.png)",
                "background-size": "33% 100%",
                "background-repeat": "no-repeat"
            });
        }
        $('.btn-group').attr('id', 'menu');
        $("#log").html("");
        $("#log").append("Pokemon Trainer " + oppName + " challenges you to a battle!");
        music.play(); //start music
        setTimeout(function () {
            $("#log").append("</br>Select a pokemon to send out.");
            selectPokemon();
        }, 3500);
    }

    function selectPokemon() { //appends select box and respective buttons, changes active pokemon, removes select box when complete, calls populate()
        $("#mainDisplay").append("<div class=col-xs-3 id=selectBox>");
        $("#selectBox").append("<button class=pokemon-button id=firstPokemon>");
        if (playerTeam[0].stats[1] / playerTeam[0].stats[0] == 0) {
            $("#firstPokemon").css({
                "background-color": "red"
            });
            playerTeam[0].status = "Fainted";
        }
        $("#firstPokemon").html(playerTeam[0].name + "</br>HP: " + playerTeam[0].stats[1] + "/" + playerTeam[0].stats[0] + " " + playerTeam[0].status);
        $("#selectBox").append("<button class=pokemon-button id=secondPokemon>");
        if (playerTeam[1].stats[1] == 0) {
            $("#secondPokemon").css({
                "background-color": "red"
            });
            playerTeam[1].status = "Fainted";
        }
        $("#secondPokemon").html(playerTeam[1].name + "</br>HP: " + playerTeam[1].stats[1] + "/" + playerTeam[1].stats[0] + " " + playerTeam[1].status);
        $("#selectBox").append("<button class=pokemon-button id=thirdPokemon>");
        if (playerTeam[2].stats[1] == 0) {
            $("#thirdPokemon").css({
                "background-color": "red"
            });
            playerTeam[2].status = "Fainted";
        }
        $("#thirdPokemon").html(playerTeam[2].name + "</br>HP: " + playerTeam[2].stats[1] + "/" + playerTeam[2].stats[0] + " " + playerTeam[2].status);
        $("#selectBox").append("<button class=pokemon-button id=fourthPokemon>");
        if (playerTeam[3].stats[1] == 0) {
            $("#fourthPokemon").css({
                "background-color": "red"
            });
            playerTeam[3].status = "Fainted";
        }
        $("#fourthPokemon").html(playerTeam[3].name + "</br>HP: " + playerTeam[3].stats[1] + "/" + playerTeam[3].stats[0] + " " + playerTeam[3].status);
        $("#selectBox").append("<button class=pokemon-button id=fifthPokemon>");
        if (playerTeam[4].stats[1] == 0) {
            $("#fifthPokemon").css({
                "background-color": "red"
            });
            playerTeam[4].status = "Fainted";
        }
        $("#fifthPokemon").html(playerTeam[4].name + "</br>HP: " + playerTeam[4].stats[1] + "/" + playerTeam[4].stats[0] + " " + playerTeam[4].status);
        $("#selectBox").append("<button class=pokemon-button id=sixthPokemon>");
        if (playerTeam[5].stats[1] == 0) {
            $("#sixthPokemon").css({
                "background-color": "red"
            });
            playerTeam[5].status = "Fainted";
        }
        $("#sixthPokemon").html(playerTeam[5].name + "</br>HP: " + playerTeam[5].stats[1] + "/" + playerTeam[5].stats[0] + " " + playerTeam[5].status);
        $("#selectBox").append("<button class=pokemon-button id=cancel>");
        $("#cancel").html("Cancel");

        //begin button handlers

        $("#firstPokemon").on("click", function () {
            if (playerTeam[0].stats[1] > 0) {
                playerActive = playerTeam[0];
                $("#selectBox").remove();
                $("#log").append("</br>Go " + playerTeam[0].name + "!");
                populate();
            }
            else {
                $("#log").append("</br>" + playerTeam[0].name + " doesn't have any energy to battle.");
            }
        })

        $("#secondPokemon").on("click", function () {
            if (playerTeam[1].stats[1] > 0) {
                playerActive = playerTeam[1];
                $("#selectBox").remove();
                $("#log").append("</br>Go " + playerTeam[1].name + "!");
                populate();
            }
            else {
                $("#log").append("</br>" + playerTeam[1].name + " doesn't have any energy to battle.");
            }
        })

        $("#thirdPokemon").on("click", function () {
            if (playerTeam[2].stats[1] > 0) {
                playerActive = playerTeam[2];
                $("#selectBox").remove();
                $("#log").append("</br>Go " + playerTeam[2].name + "!");
                populate();
            }
            else {
                $("#log").append("</br>" + playerTeam[2].name + " doesn't have any energy to battle.");
            }
        })

        $("#fourthPokemon").on("click", function () {
            if (playerTeam[3].stats[1] > 0) {
                playerActive = playerTeam[3];
                $("#selectBox").remove();
                $("#log").append("</br>Go " + playerTeam[3].name + "!");
                populate();
            }
            else {
                $("#log").append("</br>" + playerTeam[3].name + " doesn't have any energy to battle.");
            }
        })

        $("#fifthPokemon").on("click", function () {
            if (playerTeam[4].stats[1] > 0) {
                playerActive = playerTeam[4];
                $("#selectBox").remove();
                $("#log").append("</br>Go " + playerTeam[4].name + "!");
                populate();
            }
            else {
                $("#log").append("</br>" + playerTeam[4].name + " doesn't have any energy to battle.");
            }
        })

        $("#sixthPokemon").on("click", function () {
            if (playerTeam[5].stats[1] > 0) {
                playerActive = playerTeam[5];
                $("#selectBox").remove();
                $("#log").append("</br>Go " + playerTeam[5].name + "!");
                populate();
            }
            else {
                $("#log").append("</br>" + playerTeam[5].name + " doesn't have any energy to battle.");
            }
        })

        $("#cancel").on("click", function () {
            if (playerActive !== undefined) {
                if (playerActive.stats[1] !== 0) {
                    $("#selectBox").remove();
                }
            }
            else {
                $("#log").append("</br>You must select a Pokemon to send out.");
            }
        })

    } //end of switch pokemon function

    function populate() { //populates attack buttons, image div, hp box
        setTimeout(function () {
            $("#playerPokemonDisplay").html("<img id='backImg' src=" + playerActive.imageBack + ">");
            var image = new Image();
            image.src = playerActive.imageBack
            image.onload = function () {
                var height = this.naturalHeight;
                $('#backImg').css({
                    "height": height * 2.75,
                });
            }
            $("#playerName").html(playerActive.name);
            $("#playerStatus").html(playerActive.status);
            $("#playerHPbox").show();
            $("#playerHPdisplay").html("HP: " + playerActive.stats[1] + "/" + playerActive.stats[0]);
            $('#playerHPbar').css({
                "width": playerActive.stats[1] / playerActive.stats[0] * 285,
                "background-color": "green"
            });
            if (playerActive.stats[1] / playerActive.stats[0] <= .5) {
                $('#playerHPbar').css({
                    "background-color": "yellow"
                });
            }
            if (playerActive.stats[1] / playerActive.stats[0] <= .1) {
                $('#playerHPbar').css({
                    "background-color": "red"
                });
            }
            if (oppActive == undefined) { 
                initializeOpp(); //sets opponents active pokemon
                setTimeout(function () {
                    $("#menu").append("<button class=btn-default id=menuButton1>");
                    $("#menuButton1").html(playerActive.moves[0].name);
                    $("#menu").append("<button class=btn-default id=menuButton2>");
                    $("#menuButton2").html(playerActive.moves[1].name);
                    $("#menu").append("<button class=btn-default id=menuButton3>");
                    $("#menuButton3").html(playerActive.moves[2].name);
                    $("#menu").append("<button class=btn-default id=menuButton4>");
                    $("#menuButton4").html(playerActive.moves[3].name);
                    $("#menu").append("<button class=btn-default id=menuButtonSwitch>");
                    $("#menuButtonSwitch").html("Switch Pokemon");
                    $("#log").append("</br>Select a move.");
                    
            //begin attack button click events
                    
                    $("#menuButton1").on("click", function () {
                        $("#log").html("");
                        $("#menuButton1").remove();
                        $("#menuButton2").remove();
                        $("#menuButton3").remove();
                        $("#menuButton4").remove();
                        $("#menuButtonSwitch").remove();
                        battle(0);
                    })

                    $("#menuButton2").on("click", function () {
                        $("#log").html("");
                        $("#menuButton1").remove();
                        $("#menuButton2").remove();
                        $("#menuButton3").remove();
                        $("#menuButton4").remove();
                        $("#menuButtonSwitch").remove();
                        battle(1);
                    })

                    $("#menuButton3").on("click", function () {
                        $("#log").html("");
                        $("#menuButton1").remove();
                        $("#menuButton2").remove();
                        $("#menuButton3").remove();
                        $("#menuButton4").remove();
                        $("#menuButtonSwitch").remove();
                        battle(2);
                    })

                    $("#menuButton4").on("click", function () {
                        $("#log").html("");
                        $("#menuButton1").remove();
                        $("#menuButton2").remove();
                        $("#menuButton3").remove();
                        $("#menuButton4").remove();
                        $("#menuButtonSwitch").remove();
                        battle(3);
                    })
                }, 2000);
            }
            else {
                $("#menu").append("<button class=btn-default id=menuButton1>");
                $("#menuButton1").html(playerActive.moves[0].name);
                $("#menu").append("<button class=btn-default id=menuButton2>");
                $("#menuButton2").html(playerActive.moves[1].name);
                $("#menu").append("<button class=btn-default id=menuButton3>");
                $("#menuButton3").html(playerActive.moves[2].name);
                $("#menu").append("<button class=btn-default id=menuButton4>");
                $("#menuButton4").html(playerActive.moves[3].name);
                $("#menu").append("<button class=btn-default id=menuButtonSwitch>");
                $("#menuButtonSwitch").html("Switch Pokemon");
                //begin attack button click events
                $("#menuButton1").on("click", function () {
                    $("#log").html("");
                    $("#menuButton1").remove();
                    $("#menuButton2").remove();
                    $("#menuButton3").remove();
                    $("#menuButton4").remove();
                    $("#menuButtonSwitch").remove();
                    battle(0);
                })

                $("#menuButton2").on("click", function () {
                    $("#log").html("");
                    $("#menuButton1").remove();
                    $("#menuButton2").remove();
                    $("#menuButton3").remove();
                    $("#menuButton4").remove();
                    $("#menuButtonSwitch").remove();
                    battle(1);
                })

                $("#menuButton3").on("click", function () {
                    $("#log").html("");
                    $("#menuButton1").remove();
                    $("#menuButton2").remove();
                    $("#menuButton3").remove();
                    $("#menuButton4").remove();
                    $("#menuButtonSwitch").remove();
                    battle(2);
                })

                $("#menuButton4").on("click", function () {
                    $("#log").html("");
                    $("#menuButton1").remove();
                    $("#menuButton2").remove();
                    $("#menuButton3").remove();
                    $("#menuButton4").remove();
                    $("#menuButtonSwitch").remove();
                    battle(3);
                })
            }
        }, 1500);
    }

    function initializeOpp() { //initialize oppActive and its image/hp box
        oppActive = oppTeam[Math.floor(Math.random() * 5.99)];
        $("#log").append("</br>Pokemon Trainer " + oppName + " sent out " + oppActive.name + "!");
        setTimeout(function () {
            $("#oppPokemonDisplay").append("<img id='frontImg' src=" + oppActive.imageFront + ">");
            var image = new Image();
            image.src = oppActive.imageFront;
            image.onload = function () {
                var height = this.naturalHeight;
                $('#frontImg').css({
                    "height": height * 2,
                });
            }
            $("#oppName").html(oppActive.name);
            $("#oppStatus").html(oppActive.status);
            $("#oppHPbox").show();
            $("#oppHPdisplay").html("HP: " + oppActive.stats[1] + "/" + oppActive.stats[0]);
            $('#oppHPbar').css({
                "width": oppActive.stats[1] / oppActive.stats[0] * 285,
                "background-color": "green"
            });
            if (oppActive.stats[1] / oppActive.stats[0] <= .5) {
                $('#oppHPbar').css({
                    "background-color": "yellow"
                });
            }
            if (oppActive.stats[1] / oppActive.stats[0] <= .1) {
                $('#oppHPbar').css({
                    "background-color": "red"
                });
            }
        }, 1500)
    } //end intializeOpp

    function newOppActive() { //selects new pokemon opponent sends out when player defeats opponents current pokemon
        var bool = true;
        while (bool) {
            var random = Math.floor(Math.random() * 5.99);
            if (oppTeam[random].stats[1] !== 0) {
                oppActive = oppTeam[random];
                $("#log").append("</br>Pokemon Trainer " + oppName + " sent out " + oppActive.name + "!");
                setTimeout(function () {
                    $("#oppPokemonDisplay").html("<img id='frontImg' src=" + oppActive.imageFront + ">");
                    var image = new Image();
                    image.src = oppActive.imageFront;
                    image.onload = function () {
                        var height = this.naturalHeight;
                        $('#frontImg').css({
                            "height": height * 2,
                        });
                    }
                    $("#oppName").html(oppActive.name);
                    $("#oppStatus").html(oppActive.status);
                    $("#oppHPbox").show();
                    $("#oppHPdisplay").html("HP: " + oppActive.stats[1] + "/" + oppActive.stats[0]);
                    $('#oppHPbar').css({
                        "width": oppActive.stats[1] / oppActive.stats[0] * 285,
                        "background-color": "green"
                    });
                    if (oppActive.stats[1] / oppActive.stats[0] <= .5) {
                        $('#oppHPbar').css({
                            "background-color": "yellow"
                        });
                    }
                    if (oppActive.stats[1] / oppActive.stats[0] <= .1) {
                        $('#oppHPbar').css({
                            "background-color": "red"
                        });
                    }
                }, 1500)
                bool = false;
            }
            
            //statement if player wins (makes all opponent's pokemon faint)
            if (oppTeam[0].stats[1] == 0 && oppTeam[1].stats[1] == 0 && oppTeam[2].stats[1] == 0 && oppTeam[3].stats[1] == 0 && oppTeam[4].stats[1] == 0 && oppTeam[5].stats[1] == 0) {
                bool = false;
                setTimeout(function () {
                    $("#log").html("");
                    $("#log").append("Congratulations, you won!");
                    music.pause();
                    $("#menuButton1").remove();
                    $("#menuButton2").remove();
                    $("#menuButton3").remove();
                    $("#menuButton4").remove();
                    $("#menuButtonSwitch").remove();
                }, 3000)
            }
        }
    }

    function battle(playerMove) { //takes index of move as parameter
        oppMove = oppActive.AI(); //opponent selects move
        if (playerActive.moves[playerMove].priority == oppActive.moves[oppMove].priority) { //attack if = move priority
            if (playerActive.stats[6] > oppActive.stats[6]) { //attack order by speed
                if (doesItHit(playerActive, playerMove)) { //checks if attack hits successfully 
                    attack(playerActive, oppActive, playerMove); //attack function called (damage calculation)
                }
                else {
                    $("#log").append("</br>" + playerActive.name + "'s attack missed!");
                }
                if (oppActive.stats[1] !== 0) { //opponent attacks if player doesn't knock out pokemon on same turn
                    if (doesItHit(oppActive, oppMove)) {
                        attack(oppActive, playerActive, oppMove);
                    }
                    else {
                        $("#log").append("</br>" + oppActive.name + "'s attack missed!");
                    }
                }
                else {
                    $("#oppPokemonDisplay").html("");
                }
            }
            else { //if opponent attacks first 
                if (doesItHit(oppActive, oppMove)) {
                    attack(oppActive, playerActive, oppMove);
                }
                else {
                    $("#log").append("</br>" + oppActive.name + "'s attack missed!");
                }
                if (playerActive.stats[1] !== 0) { //player sttacks if not KO'd by opponent on same turn
                    if (doesItHit(playerActive, playerMove)) {
                        attack(playerActive, oppActive, playerMove);
                    }
                    else {
                        $("#log").append("</br>" + playerActive.name + "'s attack missed!");
                    }
                }
            }
        }
        else if (playerActive.moves[playerMove].priority > oppActive.moves[oppMove].priority) { //if player's move priority is higher
            if (doesItHit(playerActive, playerMove)) {
                attack(playerActive, oppActive, playerMove);
            }
            else {
                $("#log").append("</br>" + playerActive.name + "'s attack missed!");
            }
            if (oppActive.stats[1] !== 0) {
                if (doesItHit(oppActive, oppMove)) {
                    attack(oppActive, playerActive, oppMove);
                }
                else {
                    $("#log").append("</br>" + oppActive.name + "'s attack missed!");
                }
            }
            else {
                $("#oppPokemonDisplay").html("");
            }
        }
        else { //if player's move priority is higher
            if (doesItHit(oppActive, oppMove)) {
                attack(oppActive, playerActive, oppMove);
            }
            else {
                $("#log").append("</br>" + oppActive.name + "'s attack missed!");
            }
            if (playerActive.stats[1] !== 0) {
                if (doesItHit(playerActive, playerMove)) {
                    attack(playerActive, oppActive, playerMove);
                }
                else {
                    $("#log").append("</br>" + playerActive.name + "'s attack missed!");
                }
            }
        }
        if (playerActive.stats[1] == 0) { //if player's pokemon faints
            $("#log").append("</br>" + playerActive.name + " fainted!");
            unpopulate();
            if (playerTeam[0] !== 0 && playerTeam[1] !== 0 && playerTeam[2] !== 0 && playerTeam[3] !== 0 && playerTeam[4] !== 0 && playerTeam[5] !== 0) {
                selectPokemon();
            }
            else { //player loses
                $("#log").append("You lost the battle!");
            }
        }
        else {
            repopulate();
        }
        if (oppActive.stats[1] == 0) { //if opponent's pokemon faints
            $("#log").append("</br>" + oppActive.name + " fainted!");
            $("#oppPokemonDisplay").html("");
            newOppActive();
        }

    } //end of battle function


    function doesItHit(attacker, move) { //determines if attack hits based on move's accuracy stat
        var random = 1 + Math.random() * 99;
        if (random <= attacker.moves[move].accuracy) {
            return true;
        }
        else {
            return false;
        }
    }

    function attack(attacker, defender, move) { //calculates damage
        $("#log").append("</br>" + attacker.name + " used " + attacker.moves[move].name + ".");
        var damage;
        var modifier = findModifier(attacker, defender, move); //calculates modifier
        if (attacker.moves[move].type[1].indexOf("Physical") !== -1) { //determines what stats are used based on attack type
            damage = Math.floor(((42 * attacker.moves[move].power * (attacker.stats[2] / defender.stats[3]) + 2)) / 50 * modifier);
        }
        if (attacker.moves[move].type[1].indexOf("Special") !== -1) { //determines what stats are used based on attack type
            damage = Math.floor(((42 * attacker.moves[move].power * (attacker.stats[4] / defender.stats[5]) + 2)) / 50 * modifier);
        }
        defender.stats[1] -= damage; //reduces HP by damage
        if (defender.stats[1] < 0) {
            defender.stats[1] = 0; //prevents negative HP
        }
        updateHPdisplay(defender); //updates hp display
    }

    //calculates increased/reduced damage based on critical hits, same type attack bonus (STAB), type matchups, status conditions, and random multiplier
    function findModifier(attacker, defender, move) { 
        var critical = 1;
        if (1 + Math.random() * 99 <= 6.25) {
            critical = 1.5;
            $("#log").append("</br>It's a critical hit!");
        }
        var random = Math.random() * .15 + .85;
        var stab = 1;
        if (attacker.moves[move].type.indexOf(attacker.types[0]) !== -1) {
            stab = 1.5;
        }
        if (attacker.types.length > 1) {
            if (attacker.moves[move].type.indexOf(attacker.types[1]) !== -1) {
                stab = 1.5;
            }
        }
        var type = 1;
        if (defender.doubleWeaknesses.indexOf(attacker.moves[move].type[0]) !== -1) {
            type += 3;
            $("#log").append("</br>It's super-effective!");
        }
        if (defender.weaknesses.indexOf(attacker.moves[move].type[0]) !== -1) {
            type += 1;
            $("#log").append("</br>It's super-effective!");
        }
        if (defender.resistances.indexOf(attacker.moves[move].type[0]) !== -1) {
            type *= .5;
            $("#log").append("</br>It's not very effective.");
        }
        if (defender.doubleResistances.indexOf(attacker.moves[move].type[0]) !== -1) {
            type *= .25;
            $("#log").append("</br>It's not very effective.");
        }
        if (defender.immunities.indexOf(attacker.moves[move].type[0]) !== -1) {
            type = 0;
            $("#log").append("</br>It's didn't have any effect.");
        }
        var burn = 1;
        if (attacker.status === "Burned") {
            burn = .5;
        }
        var other = 1; //used for abilities
        var modifier = critical * random * stab * type * burn * other;
        return modifier;
    }

    function updateHPdisplay(target) { //updates hp display after damage
        if (playerTeam.indexOf(target) !== -1) {
            $("#playerHPdisplay").html("HP: " + playerActive.stats[1] + "/" + playerActive.stats[0]);
            $('#playerHPbar').css({
                "width": playerActive.stats[1] / playerActive.stats[0] * 285,
                "background-color": "green"
            });
            if (playerActive.stats[1] / playerActive.stats[0] <= .5) {
                $('#playerHPbar').css({
                    "background-color": "yellow"
                });
            }
            if (playerActive.stats[1] / playerActive.stats[0] <= .1) {
                $('#playerHPbar').css({
                    "background-color": "red"
                });
            }
        }
        else {
            $("#oppHPdisplay").html("HP: " + oppActive.stats[1] + "/" + oppActive.stats[0]);
            $('#oppHPbar').css({
                "width": oppActive.stats[1] / oppActive.stats[0] * 285,
                "background-color": "green"
            });
            if (oppActive.stats[1] / oppActive.stats[0] <= .5) {
                $('#oppHPbar').css({
                    "background-color": "yellow"
                });
            }
            if (oppActive.stats[1] / oppActive.stats[0] <= .1) {
                $('#oppHPbar').css({
                    "background-color": "red"
                });
            }
        }
    }
 
    function repopulate() { //repopulate attack buttons and hp display after attack phase
        $("#playerName").html(playerActive.name);
        $("#playerStatus").html(playerActive.status);
        $("#playerHPbox").show();
        $("#playerHPdisplay").html("HP: " + playerActive.stats[1] + "/" + playerActive.stats[0]);
        $('#playerHPbar').css({
            "width": playerActive.stats[1] / playerActive.stats[0] * 285,
            "background-color": "green"
        });
        if (playerActive.stats[1] / playerActive.stats[0] <= .5) {
            $('#playerHPbar').css({
                "background-color": "yellow"
            });
        }
        if (playerActive.stats[1] / playerActive.stats[0] <= .1) {
            $('#playerHPbar').css({
                "background-color": "red"
            });
        }
        $("#menu").append("<button class=btn-default id=menuButton1>");
        $("#menuButton1").html(playerActive.moves[0].name);
        $("#menu").append("<button class=btn-default id=menuButton2>");
        $("#menuButton2").html(playerActive.moves[1].name);
        $("#menu").append("<button class=btn-default id=menuButton3>");
        $("#menuButton3").html(playerActive.moves[2].name);
        $("#menu").append("<button class=btn-default id=menuButton4>");
        $("#menuButton4").html(playerActive.moves[3].name);
        $("#menu").append("<button class=btn-default id=menuButtonSwitch>");
        $("#menuButtonSwitch").html("Switch Pokemon");
        $("#menuButton1").on("click", function () {
            $("#log").html("");
            $("#menuButton1").remove();
            $("#menuButton2").remove();
            $("#menuButton3").remove();
            $("#menuButton4").remove();
            $("#menuButtonSwitch").remove();
            battle(0);
        })

        $("#menuButton2").on("click", function () {
            $("#log").html("");
            $("#menuButton1").remove();
            $("#menuButton2").remove();
            $("#menuButton3").remove();
            $("#menuButton4").remove();
            $("#menuButtonSwitch").remove();
            battle(1);
        })

        $("#menuButton3").on("click", function () {
            $("#log").html("");
            $("#menuButton1").remove();
            $("#menuButton2").remove();
            $("#menuButton3").remove();
            $("#menuButton4").remove();
            $("#menuButtonSwitch").remove();
            battle(2);
        })

        $("#menuButton4").on("click", function () {
            $("#log").html("");
            $("#menuButton1").remove();
            $("#menuButton2").remove();
            $("#menuButton3").remove();
            $("#menuButton4").remove();
            $("#menuButtonSwitch").remove();
            battle(3);
        })
    }

    function unpopulate() { //remove attack buttons and player pokemon image
        $("#menuButton1").remove();
        $("#menuButton2").remove();
        $("#menuButton3").remove();
        $("#menuButton4").remove();
        $("#menuButtonSwitch").remove();
        $("#playerPokemonDisplay").html("");
    }

}) //end of document.ready
