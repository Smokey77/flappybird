// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);

var load;
load = 0;
var labelLoad;

var password;
password = "SebCo";

var player;
var copy;
var OS;
var Lod;
var username;
var st;

function preload() {
    game.load.image("playerImg", "assets/pipe_orange.png");
    game.load.image("Load", "assets/pipe_yellow.png");
}

function create() {
    game.stage.setBackgroundColor("#add6ff");
    OS = game.add.text(20, 360, "SebOS 2015", {fill: "#FF9933"});
    copy = game.add.text(20, 385, "Copyright © SebCo", {font: "10px", fill: "#FF9933"});
    player = game.add.sprite(395, 200, "playerImg");
    player2 = game.add.sprite(345, 150, "playerImg");
    lod = game.add.text(20, 20, "loading...");
    labelLoad = game.add.text(20, 50, "0");
    //password = prompt("Enter Password");
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.enable(player);
    game.physics.arcade.enable(player2);
    player.body.velocity.y = -400;
    player2.body.velocity.y = 400;
    player.body.gravity.y = 500;
    player2.body.gravity.y = -500;


}

function loading(){
    load = load + 1;
    labelLoad.setText(load.toString());
    //alert(load);
}


function update() {
    //player.angle -= 1;
    //player2.angle += 1;
    if ( load < 100) {
        loading();
    }
    if (load == 4) {
        game.add.text(40, 85, "First Time Boot Mode...", {font: "20px"});
    }
    if (load == 16){
        game.add.text(40, 95, "Admin Account Requested", {font: "20px"});
    }
    if (load == 20) {
        if (prompt("Enter Password") == password) {
            game.add.text(40, 105, "Admin Login Succsessful", {font: "20px"});
        } else {
            game.add.text(40, 105, "Admin Login Failed", {font: "20px"});
        }
    }
    if (load == 46) {
        game.add.text(40, 115, "Connecting To Network", {font: "20px"});
    }
    if (load == 62) {
        game.add.text(40, 125, "Checking Seb System64", {font: "20px"});
    }
    if (load == 63) {
        game.add.text(40, 135, "SebCo Services Initiating", {font: "20px"});
    }
    if (load == 78) {
        game.add.text(40, 145, "User Setup Is Finnishing", {font: "20px"});
    }
    if (load == 92) {
        username = prompt("User Setup");
        game.add.text(40, 155, "User Setup Complete", {font: "20px"});
    }
    if (load == 97) {
        game.add.text(20, 360, "Logging In As " + username);
    }
    if (load == 100) {
        //alert("done");
        st = game.add.text(20, 20, "Entering Sebtop...");
        load = load + 1;
        lod.setText("");
    }
    if (load == 101) {
        copy.setText("");
        OS.setText("");
        labelLoad.setText("");
        load = load + 1;
    }
}
