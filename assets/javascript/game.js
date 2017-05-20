var playerTeam;
var oppTeam;
var oppName;
var playerActive;
var oppActive;
var music = document.createElement("audio");
music.setAttribute("src", "assets/music/battleTheme.mp3");
music.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);

$("document").ready(function () {

    //begin trainer object declarations
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
    //end of blue object
    //end of trainer objects

    $("#redButton").on("click", function () {
        playerTeam = red;
        oppTeam = blue;
        oppName = "Blue";
        initialize();
    })

    $("#blueButton").on("click", function () {
        playerTeam = blue;
        oppTeam = red;
        oppName = "Red";
        initialize();
    })

    function initialize() {
        $("#redButton").remove();
        $("#blueButton").remove();
        $("#mainDisplay").append("<div class=col-xs-2 id=oppTrainerSpriteBox>");
        if (oppName === "Red") {
            $('#oppTrainerSpriteBox').css({
                "background-image": "url(assets/images/red.png)",
                "background-size": "50% 100%",
                "background-repeat": "no-repeat"
            });
        }
        else {
            $('#oppTrainerSpriteBox').css({
                "background-image": "url(assets/images/blue.png)",
                "background-size": "50% 100%",
                "background-repeat": "no-repeat"
            });
        }
        $('.btn-group').attr('id', 'menu');
        $("#log").html("");
        $("#log").append("Pokemon Trainer " + oppName + " challenges you to a battle!");
        music.play();
        setTimeout(function () {
            $("#log").append("</br>Select a pokemon to send out.");
            selectPokemon();
        }, 3500);
    }

    function selectPokemon() {
        $("#mainDisplay").append("<div class=col-xs-3 id=selectBox>");
        $("#selectBox").append("<button class=pokemon-button id=firstPokemon>");
        $("#firstPokemon").html(playerTeam[0].name);
        $("#selectBox").append("<button class=pokemon-button id=secondPokemon>");
        $("#secondPokemon").html(playerTeam[1].name);
        $("#selectBox").append("<button class=pokemon-button id=thirdPokemon>");
        $("#thirdPokemon").html(playerTeam[2].name);
        $("#selectBox").append("<button class=pokemon-button id=fourthPokemon>");
        $("#fourthPokemon").html(playerTeam[3].name);
        $("#selectBox").append("<button class=pokemon-button id=fifthPokemon>");
        $("#fifthPokemon").html(playerTeam[4].name);
        $("#selectBox").append("<button class=pokemon-button id=sixthPokemon>");
        $("#sixthPokemon").html(playerTeam[5].name);
        $("#selectBox").append("<button class=pokemon-button id=cancel>");
        $("#cancel").html("Cancel");
    }

})
