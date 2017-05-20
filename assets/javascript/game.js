var playerTeam;
var oppTeam;
var playerActive;
var oppActive;
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
            stats: [0, 0, 0, 0, 0, 0],
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
                    name: "",
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
            stats: [0, 0, 0, 0, 0, 0],
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
            stats: [0, 0, 0, 0, 0, 0],
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
                    accuracy: 100,
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
            stats: [0, 0, 0, 0, 0, 0],
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
            stats: [0, 0, 0, 0, 0, 0],
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
                    type: ["Flying", ""],
                    power: 75,
                    accuracy: 95,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "Focus Blast",
                    type: ["Fighting", "Special"],
                    power: 0,
                    accuracy: 0,
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
            stats: [0, 0, 0, 0, 0, 0],
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
            stats: [0, 0, 0, 0, 0, 0],
            status: "",
            imageFront: "assets/images/alakazam-front.gif",
            imageBack: "assets/images/alakazam-back.gif",
            ability: function () {

            },
            AI: function () {

            },
            moves: [
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
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
            stats: [0, 0, 0, 0, 0, 0],
            status: "",
            imageFront: "assets/images/machamp-front.gif",
            imageBack: "assets/images/machamp-back.gif",
            ability: function () {

            },
            AI: function () {

            },
            moves: [
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
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
            stats: [0, 0, 0, 0, 0, 0],
            status: "",
            imageFront: "assets/images/aerodactyl-front.gif",
            imageBack: "assets/images/aerodactyl-back.gif",
            ability: function () {

            },
            AI: function () {

            },
            moves: [
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
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
            stats: [0, 0, 0, 0, 0, 0],
            status: "",
            imageFront: "assets/images/exeggutor-front.gif",
            imageBack: "assets/images/exeggutor-back.gif",
            ability: function () {

            },
            AI: function () {

            },
            moves: [
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
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
            stats: [0, 0, 0, 0, 0, 0],
            status: "",
            imageFront: "assets/images/arcanine-front.gif",
            imageBack: "assets/images/arcanine-back.gif",
            ability: function () {

            },
            AI: function () {

            },
            moves: [
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
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
            stats: [0, 0, 0, 0, 0, 0],
            status: "",
            imageFront: "assets/images/gyarados-front.gif",
            imageBack: "assets/images/gyarados-back.gif",
            ability: function () {

            },
            AI: function () {

            },
            moves: [
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
                    priority: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: ["", ""],
                    power: 0,
                    accuracy: 0,
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
        start();
    })

    $("#blueButton").on("click", function () {
        playerTeam = blue;
        oppTeam = red;
        start();
    })

    function start() {
        $("#redButton").remove();
        $("#blueButton").remove();
        $('.btn-group').attr('id', 'menu');
        $("#log").append("</br>Select a pokemon to send out.")
        selectPokemon();
    }

    function selectPokemon() {
        $("#mainDisplay").append("<div class=col-xs-2 id=selectBox>");
    }

})
