require(['config'], function() {
    // 这里不能保证jquery,gdszoom,common的加载顺序
    require(['jquery', 'base'], function($, base) {

        base.init();
        $(function() {

            // 点击判断
            $('.login_btn').click(function() {
                // 获取输入的值
                var my_nameg = $('.reg_input_user_bg').val()
                var my_pass = $('.reg_input_pw_bg').val()
                    // 发送ajax请求
                $.post('../php/login.php', {
                    'my_nameg': my_nameg,
                    'my_pass': my_pass

                }, function(data) {

                    //如果存在
                    if (data == 0) {
                        alert('登录成功前往首页');
                        //判断是否勾选
                    if ($('.jizhu :checkbox').prop("checked")) {
                        //把用户名，密码保存到cookie
                        var now = new Date();
                        now.setDate(now.getDate() + 7);
                        document.cookie = 'username=' + my_nameg + ';expires=' + now;
                        document.cookie = 'password=' + my_pass + ';expires=' + now;
                        // 跳转到首页
                        }
                        setTimeout(function() {
                            window.location.href = "../html/index.html"
                        }, 1000);
                        //不存在的话提示
                    } else if (data == 1) {
                        alert('用户名不存在，请前往登录');
                        window.location.href = "../html/Necessities.html"
                    } else {
                        alert('登录失败');
                    }



                });

            })


        })

    });
});
