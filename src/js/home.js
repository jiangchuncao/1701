require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery','base'],function($,base){
	
		base.init()
		$(function(){
              //轮播图
              var $focus = $('#focus');
              var $bigpic = $('.bigpic');
              var $smallpic = $('.smallpic');

              var index = 0;

              // 图片数量
              var len = $bigpic.find('li').length;

              // 初始化
              show();

              // 设置定时器，3秒切换一张图片
              var timer;;

              // 鼠标移入清除定时器，鼠标移出重启定时器
              $focus.on('mouseenter', function() {
                  $('.prev').css('display', 'block');
                  $('.next').css('display', 'block');
                  clearInterval(this.timer);
              }).on('mouseleave', function() {
                  $('.prev').css('display', 'none');
                  $('.next').css('display', 'none');
                  this.timer = setInterval(carousel, 3000);
              }).trigger('mouseleave')


              // 点击前后按钮实现切换
              $focus.on('click', '.prev', function() {
                  index--;
                  show();
              }).on('click', '.next', function() {
                  index++;
                  show();
              });

              // 点击小图切换
              $smallpic.on('mouseenter', 'li', function() {
                  index = $(this).index();
                  show();
              });

              // 轮播函数
              function carousel() {
                  index++;
                  show();
              }
              // 显示图片的函数
              function show() {
                  // 处理index值，使其实现循环轮播
                  if (index < 0) {
                      index = len - 1;
                  } else if (index > len - 1) {
                      index = 0;
                  }
                  // 大图
                  $bigpic.find('li').eq(index).animate({ opacity: 1 }).siblings().animate({ opacity: 0 });
                  // $bigpic.find('li').animate({opacity:0}).eq(index).animate({opacity:1})


                  // 小图
                  $smallpic.find('li').eq(index).css('background','red').siblings().css('background','#ccc')
              }
		   

           

              //品牌旗舰
              $('.brandship_list li').mouseover(function(){
               
                  $(this).find('.brand_hide').stop().animate({ top: 0 })
              }).mouseout(function(){
                $(this).find('.brand_hide').stop().animate({ top: 100 })
              });

              // 购物中心
              $('.shopcenter li').mouseover(function() {

                $(this).find('.topbox').stop().slideUp();
            
              
              }).mouseout(function(){

                 $(this).find('.topbox').stop().slideDown()
              });;


              // 侧边栏
              // 回到顶部
              $(".icon .up").click(function () {
                    var speed=1500;//滑动的速度
                    $('body,html').animate({ scrollTop: 0 }, speed);
                    return false;
             });

               $('.icon .down').click(function(){
                $('html,body').animate({ scrollTop: $(document).height() }, 1500); 
                return false;

              });

                // 显示隐藏
              $('#btn').click(function(){
                if($(this).hasClass('index_cy')){
                  $(this).removeClass('index_cy');
                  $(this).addClass('index_cy2');
                  $('.slide').slideUp(600)
                }else{
                  $(this).removeClass('index_cy2');
                  $(this).addClass('index_cy');
                   $('.slide').slideDown(600)
                }
                
              });

// jq
 })





	});
});