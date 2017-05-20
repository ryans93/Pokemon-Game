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
            imageFront: "",
            imageBack: "",
            ability: function () {

            },
            AI: function () {

            },
            moves: [
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
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
            imageFront: "",
            imageBack: "",
            ability: function () {

            },
            AI: function () {

            },
            moves: [
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
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
            imageFront: "",
            imageBack: "",
            ability: function () {

            },
            AI: function () {

            },
            moves: [
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
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
            imageFront: "",
            imageBack: "",
            ability: function () {

            },
            AI: function () {

            },
            moves: [
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
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
            imageFront: "",
            imageBack: "",
            ability: function () {

            },
            AI: function () {

            },
            moves: [
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
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
            imageFront: "",
            imageBack: "",
            ability: function () {

            },
            AI: function () {

            },
            moves: [
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
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
            imageFront: "",
            imageBack: "",
            ability: function () {

            },
            AI: function () {

            },
            moves: [
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
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
            imageFront: "",
            imageBack: "",
            ability: function () {

            },
            AI: function () {

            },
            moves: [
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
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
            imageFront: "",
            imageBack: "",
            ability: function () {

            },
            AI: function () {

            },
            moves: [
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
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
            imageFront: "",
            imageBack: "",
            ability: function () {

            },
            AI: function () {

            },
            moves: [
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
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
            imageFront: "",
            imageBack: "",
            ability: function () {

            },
            AI: function () {

            },
            moves: [
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
            ]
        },
        {
            name: "Gyrados",
            types: ["Water", "Flying"],
            doubleWeaknesses: ["Electric"],
            weaknesses: ["Rock"],
            resistances: ["Fire", "Water", "Steel", "Fighting", "Bug"],
            doubleResistances: [""],
            immunities: ["Ground"],
            stats: [0, 0, 0, 0, 0, 0],
            status: "",
            imageFront: "",
            imageBack: "",
            ability: function () {

            },
            AI: function () {

            },
            moves: [
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
                    effect: function () {

                    }
                },
                {
                    name: "",
                    type: "",
                    power: 0,
                    accuracy: 0,
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

    function selectPokemon(){
        $("#mainDisplay").append("<div class=col-xs-2 id=selectBox>");
    }

})
