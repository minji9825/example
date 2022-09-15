var player1;
function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('player1', {
        videoId: '9J28BsI-Z14',
        playerVars:{
            autoplay:true,
            loop:true,
            playlist:'9J28BsI-Z14',//반복재생할 유튜브 영상 id를 다시 적음
            //loop:true일때는 반복할 목록을 다시 한번 적어야 한다
        },
        events: {
            //영상이 준비되면 함수가 실행됨
            'onReady': function(event){
                event.target.mute();//음소거, target는 영상 자체를 말함
            },
        }/* //events */
    });/* //YT.player */

    var player2;
    player2 = new YT.Player('player2', {//HTML의 id와 동일
        videoId: '0ysGskNOa9A',
        width: '800',
        height: '650',
        playerVars:{
            autoplay:true,
            loop:true,
            playlist:'0ysGskNOa9A',//반복재생할 유튜브 영상 id를 다시 적음
            //loop:true일때는 반복할 목록을 다시 한번 적어야 한다
        },
        events: {
            //영상이 준비되면 함수가 실행됨
            'onReady': function(event){
                event.target.mute();//음소거, target는 영상 자체를 말함
            },
        }/* //events */
    });/* //YT.player */


}/* //function */