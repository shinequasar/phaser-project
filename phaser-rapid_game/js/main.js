//전역객체, 전역변수 지정
var game;
var model;
var controller;
var emitter;
var G;
window.onload = () => {
    var isMobile = navigator.userAgent.indexOf("Mobile");
    if (isMobile == -1) {
        isMobile = navigator.userAgent.indexOf("Tablet");
    }
    if (isMobile == -1) {
        var config = {
            type: Phaser.AUTO,
            width: 680 ,
            height: 840,
            parent: 'phaser-game',
            // backgroundColor: '#fae0ae',
            backgroundColor: '#555',
            scene: [SceneMain]
        };
    }else{
        var config = {
            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight,
            parent: 'phaser-game',
            scene: [SceneMain]
        };
    }

    G = new Constants();
    model = new Model();
    game = new Phaser.Game(config);
}