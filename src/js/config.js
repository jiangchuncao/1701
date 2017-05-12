require.config({
	// baseUrl:'lib'//data-main文件所在的文件夹
	paths : {
		//这里的路径基于baseUrl
        "jquery": "../lib/jquery-3.1.1",
        "base":"base",
        'imagezoom':"../lib/jquery.imagezoom.min"
       

    },


    shim:{
    	// 表示gdszoom依赖jquery
    	"base":["jquery"],
        "imagezoom":["jquery"]
    }
})

