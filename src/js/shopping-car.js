require(['config'], function() {
    // 这里不能保证jquery,gdszoom,common的加载顺序
    require(['jquery', 'base', ], function($, base) {
        base.init();
        $(function() {

            $.ajax({
                url: '../php/shopping-carcha.php',
                // data:{regname:_username},
                success: function(data) {
                    fx(JSON.parse(data))
                }
            });

            function fx(data) {

                for (var i = 0; i < data.length; i++) {

                    $('.cart_li2  b').html("(" + (i + 1) + ")");
                    //document.cookie = 'num=' + (i+1) + ';expires=' + now;
                    var name = data[i].name;
                    var url = data[i].url;
                    var size = data[i].size;
                    var num = data[i].num;
                    var price = data[i].price;

                    var tr = $('<tr/>');
                    tr.html(`<td class="tb2_td1">
                    <input type="checkbox" value="1" name="newslist" id="newslist-1" />
                </td>
                <td class="tb2_td2">
                    <a href="#"><img src="${url}" /></a>
                </td>
                <td class="tb2_td3"><a href="#">${name}</a></td>
                <td class="tb2_td4">${size}</td>
                <td class="tb2_td5">
                    <input class="min1" type="button" value="-" />
                    <input class="text_box1" type="text" value="${num}" />
                    <input class="add1" type="button" value="+" />
                </td>
                <td class="tb2_td6">
                    <label id="total1" class="tot">${price}</label>
                </td>
                <td class="tb2_td7"><a href="javascript:void(0);">删除</a></td> `);
                    // 生成到页面
                    $('.gwc_tb2').append(tr);

                }
                anni()
            }

            function anni() {

                // 全选        
                $(".allselect").click(function() {
                    // 获取所有的输入框
                    var $checkbox = $(".gwc_tb2 input[name=newslist]");
                    //当前
                    var checkAll = $(".allselect").prop('checked');

                    $checkbox.prop('checked', checkAll);

                    $("#invert").prop('checked', !checkAll)
                    GetCount();
                });

                //反选
                $("#invert").click(function() {
                    var $checkbox = $(".gwc_tb2 input[name=newslist]");

                    $checkbox.each(function(idx, ele) {
                        ele.checked = !ele.checked;

                    });

                    var $checked = $checkbox.filter(':checked');

                    $('.allselect').prop('checked', $checked.length === $checkbox.length);

                    GetCount();
                });


                // 所有复选(:checkbox)框点击事件
                $(".gwc_tb2 input[name=newslist]").click(function() {
                    var $checkbox = $(".gwc_tb2 input[name=newslist]");

                    var $checked = $checkbox.filter(':checked');

                    $('.allselect').prop('checked', $checked.length === $checkbox.length);

                    GetCount();
                });

                // 商品加减算总数

                // 按钮加一
                $(".add1").click(function() {
                        var t = $(this).prev()
                        t.val(parseInt(t.val()) + 1)
                        GetCount()
                    })
                    // 按钮减一
                $(".min1").click(function() {
                    var t = $(this).next()
                    t.val(parseInt(t.val()) - 1)
                    GetCount()
                })

                function GetCount() {
                    $(".jz1").css("display", "none");
                    $(".jz2").css("display", "block");
                    var conts = 0;
                    // 勾选的数量
                    var g_checked = $('.tb2_td1 :checked')
                        //勾选的长度
                    $('.shuliang').html(g_checked.length)
                        // 遍历选中的
                    g_checked.each(function(idx, obj) {
                        // 数量
                        var box1_val = $(g_checked[idx]).parent().siblings('.tb2_td5').find('.text_box1').val()
                            //价格
                        var box1_jia = $(g_checked[idx]).parent().siblings('.tb2_td6').find('#total1').html().split('￥')[1]
                            // 总价
                        conts += (parseInt(box1_jia) * parseInt(box1_val));
                    });

                    $("#zong1").html((conts).toFixed(2));


                }

                //删除按钮
                $('.tb2_td7 a').click(function(event) {
                    var name = $(this).parent().siblings('.tb2_td3').find('a').html()

                    $.ajax({
                        url: '../php/shopping-cardelete.php',
                        data: { _name: name },
                        success: function(data) {
                            if (data == "删除失败!") {
                                alert("删除失败!");
                            } else {
                                window.location.href = "../html/shopping-car.html"
                            }
                        }
                    });

                });

            }

        });
    });
});
