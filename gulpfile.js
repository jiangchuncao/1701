// 引gulp包
var gulp = require('gulp');

// 引入gulp插件
// gulp-sass
var sass = require('gulp-sass');



// 创建任务
// 编译sass文件
gulp.task('compileSass',function(){
	// 找到sass文件
	// 得到文档流
	gulp.src('./src/sass/*.scss')

	// pipe管道方法
	.pipe(sass({
		outputStyle:'expanded'
	}))

	// // 错误信息处理，不会退出整个任务
	 .on('error', sass.logError)

	// 输出
	.pipe(gulp.dest('./src/css'))
});






// // 监听sass文件修改，直接编译任务
gulp.task('watchSass',function(){
	gulp.watch('./src/sass/*.scss',['compileSass']);
})

//运行gulp   gulp compileSass  gulp watchSass


// 用于js文件的压缩
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');
// var concat = require('gulp-concat');
// gulp.task('compressJS',function(){
// 	gulp.src('src/js/*.js')

// 	// 合并
// 	.pipe(concat('page.js'))

// 	// 输入合并后但未压缩的版本
// 	.pipe(gulp.dest('dist/js/'))

// 	// 压缩
// 	.pipe(uglify({
// 		mangle:false,
// 		compress:false
// 	}))

// 	// 重命名
// 	.pipe(rename({
// 		suffix:'.min'
// 	}))

// 	// 输出
// 	.pipe(gulp.dest('dist/js/'))
// });

// 同步任务
var browserSync = require('browser-sync');
gulp.task('server',function(){
	browserSync({
		// server: "./src",

		// 代理服务器
		proxy:'http://localhost/1701-item/',

		// 自定义端口
		port:9090,

		// 监听文件修改，自动刷新浏览器
		files:['./src/html/*.html','./src/css/*.css']
	});

	// 监听sass文件修改，执行编译sass文件
	gulp.watch('src/sass/*.scss',['compileSass']);
});