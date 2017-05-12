require(['config'], function() {
    // 这里不能保证jquery,gdszoom,common的加载顺序
    require(['jquery', 'base'], function($, base) {

        base.init();
        $(function() {
            // 注册验证
            var yz1 = false;
            var yz2 = false;
            var yz3 = false;
            // 用户名
            $('.re_con .username').blur(function() {
                    // 用户名长度在6-20个字符以内
                    if (/^\w{6,20}$/.test($(this).val())) {
                        $(this).siblings('span').html('用户名可用')
                        yz1 = true;
                        return;
                    } else {
                        $(this).siblings('span').html('请输入6-20位的用户名')
                    }
                })
                // 密码
            $('.re_con .password').blur(function() {
                    // 密码必须有大小写字母和数字且6-20位
                    if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test($(this).val())) {
                        $(this).siblings('span').html('密码正确')
                        yz2 = true;
                        return;
                    } else {
                        $(this).siblings('span').html('密码必须有大小写字母和数字且6-20位')
                    }
                })
                // 确认密码
            $('.password_confirm').keyup(function() {
                if ($(this).val() == $('.password').val()) {
                    $(this).siblings('span').html('密码正确')
                    yz3 = true;
                    return;
                } else {
                    $(this).siblings('span').html('你输入的两次密码不相同')
                }

            })


            $('#submit2').click(function() {
                // 判断是否全部正确
                if (yz1 == true && yz2 == true && yz3 == true) {

                    //发送ajax请求
                    var my_nameg = $('.re_con .username').val();
                    var my_pass = $('.re_con .password').val();
                    $.post('../php/username.php', {
                        'my_nameg': my_nameg,
                        'my_pass': my_pass
                    }, function(data) {
                        if (data == "1") {
                            alert('注册成功前往注册')
                            window.location.href = "../html/Login.html"
                        } else if (data == 0) {
                            alert('用户名已存在')
                        } else {
                            alert('注册失败')
                        }

                    });
                    // if
                }


            });

            // jq

        });


    });
});
