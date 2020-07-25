var lottery = {
    ch: 0
}


// $('.btn').bind('click', clickBtn);
//
// $('.lottery')[0].addEventListener('transitionend',function(){
//     $('.btn').bind('click',clickBtn).css("cursor","pointer");
//     setTimeout(result,2000);
// })
//
// function result(){
//     alert("点击确认，再次开始游戏！");
//     $('.lottery').css({
//         "transition":"none",
//         "transform":"none",
//         "-webkit-transform":"none"
//     });
// }

$(document).ready(function () {
   let list = [
       {
           name: '0小米手环',
           imgSrc: './img/小米手环.jpg'
       },
       {
           name: '1罗技鼠标',
           imgSrc: './img/罗技鼠标.jpg'
       },
       {
           name: '2一包糖果',
           imgSrc: './img/一包糖果.jpg'
       },
       {
           name: '3小米手环',
           imgSrc: './img/小米手环.jpg'
       },
       {
           name: '4罗技鼠标',
           imgSrc: './img/罗技鼠标.jpg'
       },
       {
           name: '5一包糖果',
           imgSrc: './img/一包糖果.jpg'
       },
       {
           name: '7罗技鼠标',
           imgSrc: './img/罗技鼠标.jpg'
       },
       {
           name: '8一包糖果',
           imgSrc: './img/一包糖果.jpg'
       }
   ],
       colors = [
           '#ffe0c9', '#fff5f0'
       ];
   let angel = 360 / list.length;
   function initWheelSurf() {
       let container = $('.block-abs');

       for(let i = 0; i < list.length; i ++) {
           (function (i) {
               let $item = $(`<div class="block">
                                <div class="content">
                                    <div class="text">${list[i].name}</div>
                                    <img src="${list[i].imgSrc}" alt=""/>
                                    <!--<div class="img"></div>-->
                                </div>
                              </div>`);
               $item.css('transform', `rotate(${angel*i}deg) skewY(${90-angel}deg)`)
                   .css('-webkit-transform', `rotate(${angel*i}deg) skewY(${90-angel}deg)`);
               if(colors.length) {
                   $item.css('background-color', colors[i%colors.length]);
               }
               container.append($item)
           })(i)
       }
       $('.content').css('transform', `skewY(${-(90-angel)}deg) rotate(${-angel/2}deg) translate(0, 30%)`)
           .css('-webkit-transform', `skewY(${-(90-angel)}deg) rotate(${-angel/2}deg) translate(0, 30%)`);
   }
   let prePos = 0;
    let gift = null;
    function clickBtn() {
        let n1 = Math.floor(Math.random()*list.length ); // 转过的奖品的格式
        let n2 = Math.floor(Math.random()*list.length/2 + 3); // 圈数
        lottery.ch = angel*n1 + 360*n2 + angel/2;
        $(this).unbind().css("cursor", "wait");
        $('.box').css({
            "transition": "all 4s ease",
            "transform": "rotate("+lottery.ch+"deg)",
            "-webkit-transform": "rotate("+lottery.ch+"deg)"
        });
        prePos = -n1+list.length;
        if(prePos >= list.length) {
            prePos = 0;
        }
        gift = list[prePos];
        // prePos = prePos-n1+list.length;
        console.log(n1, n2)
    }

    function result(){
        console.log(gift);
        $('.mask').fadeIn();
        $('.gift-name').html(gift.name);
    }

    // 初始化转盘
    initWheelSurf();

   $('.btn').bind('click', clickBtn);
    $('.box')[0].addEventListener('transitionend',function(){
        $('.btn').bind('click',clickBtn).css("cursor","pointer");
        setTimeout(result,1000);
    });

    $('.play-again').on('click', function () {
        $('.box').css({
            "transition":"none",
            "transform":"none",
            "-webkit-transform":"none"
        });
        $('mask').fadeOut();
        setTimeout(clickBtn, 20)
        // clickBtn();
    })
});