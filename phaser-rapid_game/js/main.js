//전역객체, 전역변수 지정
var game;
var model;
var controller;
var emitter;
var mediaManager;
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
            backgroundColor: '#555',
            scene: [SceneLoad,SceneTitle,SceneMain,SceneOver]
        };
    }else{
        var config = {
            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight,
            parent: 'phaser-game',
            backgroundColor: '#555',
            scene: [SceneLoad,SceneTitle,SceneMain,SceneOver]
        };
    }
    G = new Constants();
    model = new Model();
    model.isMobile = isMobile;
    game = new Phaser.Game(config);
}