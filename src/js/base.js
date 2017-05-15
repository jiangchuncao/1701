//公共模块

define(['jquery'], function($) {
    // 在此处安全使用$符号
    return {
        init: function() {
            //不同的页面进行不同的
            $('.box').append('<div class="text">头部</div>');
            $('.text').load('header.html', function() {

            });
            $('footer').append('<div class="text2">尾部</div>');
            $('.text2').load('footer.html', function() {

            });
            $(function() {
                //轮播图上面的 商品栏显示隐藏
                $('.jt_nav_li').mouseover(function() {
                    $('.all_menu').show();
                }).mouseout(function() {
                    $('.all_menu').hide();
                }).mousemove(function() {
                    $('.all_menu').show();
                });

                $('.all_menu_ul li').mouseover(function() {
                    $(this).children('.s_menu_d').show();
                }).mouseout(function() {
                    $(this).children('.s_menu_d').hide();
                });

                // 选项卡       

                // 首页商品同款
                $('.storesame_link li').mouseover(function() {
                    $(this).addClass('link_li_cur').siblings().removeClass('link_li_cur');

                    var index = $(this).index();
                    $('.storesame_box').css('left', -1220 * index)
                });
                //cookie  
                var cookie = document.cookie.split('; ');
                if (cookie != '') {
                    var cookie_name = cookie[0].split('=')[1];
                     var cookie_password= cookie[1].split('=')[1];
                    // 生成欢迎你
                    $('.head_right_da').html(cookie_name + '欢迎你')
                    $('.head_right_d1 a').hide();
                    $('.head_right_d1 span').show();

                }else{
                     $('.head_right_d1 a').show();
                     $('.head_right_d1 span').hide();
                }
                // 清楚cookie
                $('.head_right_d1 span').click(function(event) {
                var now = new Date(); 
                 now.setDate(now.getDate() - 77);
                 document.cookie = 'username=' + cookie_name + ';expires=' + now;
                 document.cookie = 'password=' + cookie_password + ';expires=' + now;
                 var big_prob=location.search;
                  window.location.href = big_prob;

                });


             // 回到顶部
              $(".icon .up").click(function () {
                    var speed=1000;//滑动的速度
                    $('body,html').animate({ scrollTop: 0 }, speed);
                    return false;
             });

               $('.icon .down').click(function(){
                $('html,body').animate({ scrollTop: $(document).height() }, 1000); 
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


            })
            return this
        }

    }
});
