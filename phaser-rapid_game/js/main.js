//전역객체, 전역변수 지정
var game;
var model;
var controller;
var emitter;
var G;
window.onload = () => {
    var config = {
        type: Phaser.AUTO,
        width: 480 ,
        height: 640,
        parent: 'phaser-game',
        scene: [SceneMain]
    };
    G = new Constants();
    model = new Model();
    game = new Phaser.Game(config);
}