require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery','base','imagezoom'],function($,base,imagezoom){
	//console.log(imagezoom)
       base.init();
		     //放大镜
           $(function() {
                   $.ajax({
                    url: '../php/shopping.php',
                    // data:{regname:_username},
                    success: function(data) {
                        fx(JSON.parse(data))
                    }
                });

                function fx(data){
                  //console.log(data)
            //截取信息
              var big_proa=location.search
              var big_id=big_proa.split('=')[1]
                 
                 for (var i = 0; i < data.length; i++) {
                     var bid = data[i].id;

                     if (bid==big_id) {
                     var bigname = data[i].name;
                     var bigurl = data[i].imgurl;
                     var smalla = data[i].smalla;
                     var smallb = data[i].smallb;
                     var smallc = data[i].smallc;
                     var smalld = data[i].smalld;
                     //console.log(smalla,smalld,smallc,smalld)                    
                  //大图
                      var jqzoom=$('.tb-booth .jqzoom');
                      jqzoom.attr('src',bigurl).attr('rel',bigurl)
                  //小图1
                       var tb_li1=$('.tb-thumb .tb-img');
                      tb_li1.attr('src',bigurl).attr('mid',bigurl).attr('big',bigurl)
                  //小图2
                      var tb_li2=$('.tb-thumb .tb-img').eq(1);
                      tb_li2.attr('src',smalla).attr('mid',smalla).attr('big',smalla)
                   //小图3
                      var tb_li3=$('.tb-thumb .tb-img').eq(2);
                      tb_li3.attr('src',smallb).attr('mid',smallb).attr('big',smallb)
                    //小图4  
                      var tb_li4=$('.tb-thumb .tb-img').eq(3);
                      tb_li4.attr('src',smallc).attr('mid',smallc).attr('big',smallc)
                    //小图5
                      var tb_li5=$('.tb-thumb .tb-img').eq(4);
                      tb_li5.attr('src',smalld).attr('mid',smalld).attr('big',smalld)
                      // 放大效果
                      $(".jqzoom").imagezoom();
                      //小图点击
                        $("#thumblist li a").click(function(){
                          $(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
                          $(".jqzoom").attr('src',$(this).find("img").attr("mid"));
                          $(".jqzoom").attr('rel',$(this).find("img").attr("big"));
                        });
                           
                     //爱心购买数量
                     var num = data[i].num;
                    // 商品名字
                    var name = data[i].name;
                    //详情
                    var state = data[i].state;
                    //价格
                    var price = data[i].price;


                     $('.clearfixgd').html( `
                            <p><span>${name}</span>【海外直购 包邮包税】</p>
                            <p>【包邮 免关税】<span>${state}</span></p>
                          `);
                     
                      $('.gd_priceCon').html (`
                         <strong class="gd_price">海外到手价：<span>${price}</span></strong>
                        <img class="hy_price" src="../css/img/goodimg/oversea_hy.png"/>
                        <p>国内参考价：￥2050</p>
                          `);
                        // 已有商品名字 name，商品价格price，商品地址bigerl
                        //获取商品大小，商品数量

                         $('.buy_btn_span2').click(function() {
                          // 商品大小
                          var gmsize=$('.dd_item .color_size_b').siblings('span').html();
                          //购买数量
                          var gmnum=$('#number').val()

                          $.ajax({
                              url: '../php/shopping-car.php',
                              // 图片地址，名字，价格，大小，数量
                              data:{_bigurl:bigurl,_name:name,_price:price,_gmsize:gmsize,_gmnum:gmnum},
                              success: function(data) {
                                console.log(data)
                                    if (data==1) {
                                      // 开个定时器
                                       setInterval(function(){
                                         window.location.href = "../html/shopping-car.html"
                                       }, 1000);
                                       
                                    }else if(data == 0){
                                      alert('购物车已存在请勿重复添加')
                                    }else{
                                       alert('购物车添加失败')
                                     };
                                }
                              });
                          // ajax


                        });

                     }

                 }

              }
                  // 尺码大小的切换
                    $('#gd_xl .dd_item').click(function(){
                      $(this).find('i').addClass('color_size_b');

                      $(this).siblings().find('i').removeClass('color_size_b');
                    })

                  //加的效果
                    $("#addnum").click(function(){
          
                    var n=$('#number').val();
                    var num=parseInt(n)+1;
                    if(num==0){ return;}
                    $('#number').val(num);
                    });

                   //减的效果
                    $("#reducenum").click(function(){
                    var n=$('#number').val();
                    var num=parseInt(n)-1;
                    if(num==0){ return}
                    $('#number').val(num);
                    });

                  

           });

         // jq


	});
});