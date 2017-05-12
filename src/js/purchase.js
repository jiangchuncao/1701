require(['config'], function() {
    // 这里不能保证jquery,gdszoom,common的加载顺序
    require(['jquery', 'base'], function($, base) {

        base.init();
        $(function() {
            $.ajax({
                url: '../php/shopping.php',
                // data:{regname:_username},
                success: function(data) {
                    update(JSON.parse(data))
                }
            });

            function update(data) {
                // $.each(data,function(idx,obj){
                // })
                for (var i = 0; i < data.length; i++) {

                    var li = $('<li/>');

                    li.html(`<div class="goodsl_box">
                      <div class="goodImgcon">
                            <a href="">
                                <img src="" alt="">
                            </a>
                      </div>
                        <div class="goods_scang">
                            <i></i>
                            <span></span>
                        </div>
                        <div class="goodsl_text">
                            <a href="">
                                <p class="brand_title"></p>
                                <p class="goodsl_title">【包邮 免官税】<span class="goodsl_span1"></span></p>
                                <p class="goodsl_price">
                                    第五大道价<span class="goodsl_span2"></span>
                                </p>
                            </a>
                        </div>
                    </div>`);

                    $('.good_ul_jt').append(li);
                    // 获取id
                    var uid = data[i].id;

                    var aLi = $('.good_ul_jt li')
                        //console.log(aLi.length)
                    for (var j = 1; j <= aLi.length; j++) {
                        //console.log(j,uid)

                        if (j == uid) {

                            //图片地址
                            var url = data[i].imgurl;
                            //爱心购买数量
                            var num = data[i].num;
                            // 商品名字
                            var name = data[i].name;
                            //详情
                            var state = data[i].state;
                            //价格
                            var price = data[i].price;

                            //console.log(url,uid,name,price);
                            // a链接跳转
                            var good_href1 = aLi.eq(i).find('.goodImgcon a');
                            var good_href2 = aLi.eq(i).find('.goodsl_text a')

                            good_href1.attr('href', 'shopping.html?id=' + data[i].id);
                            good_href2.attr('href', 'shopping.html?id=' + data[i].id);
                            //图片  
                            var goodImg = aLi.eq(i).find('.goodImgcon img');
                            goodImg.attr('src', url);
                            //爱心购买数量
                            var goodNum = aLi.eq(i).find('.goods_scang span');
                            goodNum.html(num)
                                //商品名
                            var goodName = aLi.eq(i).find('.goodsl_text .brand_title');
                            goodName.html(name)
                                //详情
                            var goodstate = aLi.eq(i).find('.goodsl_text .goodsl_span1');
                            goodstate.html(state)

                            //详情
                            var goodp2 = aLi.eq(i).find('.goodsl_text .goodsl_span2');
                            goodp2.html(price)



                        }

                    }
                }
            }



        })

    });
});
