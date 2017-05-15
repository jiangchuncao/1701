/*
Navicat MySQL Data Transfer

Source Server         : 本地mySQL
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : d5d

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-05-15 10:49:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `id` int(11) NOT NULL,
  `imgurl` varchar(255) DEFAULT NULL COMMENT '图片地址',
  `name` varchar(255) DEFAULT NULL,
  `num` int(11) DEFAULT NULL COMMENT '数量',
  `state` varchar(255) DEFAULT NULL COMMENT '说明',
  `price` varchar(11) DEFAULT NULL COMMENT '价格',
  `smalla` varchar(255) DEFAULT NULL,
  `smallb` varchar(255) DEFAULT NULL,
  `smallc` varchar(255) DEFAULT NULL,
  `smalld` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('1', '../img/goodlist/e1.JPG', 'ERMANNO', '175', 'ERMANNO', '￥2949', '../img/goodlist/e2.JPG', '../img/goodlist/e3.JPG', '../img/goodlist/e4.JPG', '../img/goodlist/e5.JPG');
INSERT INTO `goodlist` VALUES ('2', '../img/goodlist/q1.JPG', 'WEILI ZHENG', '112', 'WEILI ZHENG 裤裙', '￥945', '../img/goodlist/q2.JPG', '../img/goodlist/q3.JPG', '../img/goodlist/q4.JPG', '../img/goodlist/q5.JPG');
INSERT INTO `goodlist` VALUES ('3', '../img/goodlist/w1.JPG', 'MSGM', '130', 'MSGM 女士衬衫 女', '￥3279', '../img/goodlist/w2.JPG', '../img/goodlist/w3.JPG', '../img/goodlist/w4.JPG', '../img/goodlist/w5.JPG');
INSERT INTO `goodlist` VALUES ('4', '../img/goodlist/r1.JPG', 'DARLING', '164', 'DARLING短款连衣', '￥1035', '../img/goodlist/r2.JPG', '../img/goodlist/r3.JPG', '../img/goodlist/r4.JPG', '../img/goodlist/r5.JPG');
INSERT INTO `goodlist` VALUES ('5', '../img/goodlist/t1.JPG', 'TRUSSARDI', '129', 'TRUSSARDI', '￥1869', '../img/goodlist/t2.JPG', '../img/goodlist/t3.JPG', '../img/goodlist/t4.JPG', '../img/goodlist/t5.JPG');
INSERT INTO `goodlist` VALUES ('6', '../img/goodlist/y1.JPG', 'A.TESTONI铁狮东尼', '154', 'A.TESTON 船鞋 男', '￥7039', '../img/goodlist/y2.JPG', '../img/goodlist/y3.JPG', '../img/goodlist/y4.JPG', '../img/goodlist/y5.JPG');
INSERT INTO `goodlist` VALUES ('7', '../img/goodlist/u1.JPG', 'AURELIE', '175', 'AURELIE', '￥5799', '../img/goodlist/u2.JPG', '../img/goodlist/u3.JPG', '../img/goodlist/u4.JPG', '../img/goodlist/u5.JPG');
INSERT INTO `goodlist` VALUES ('8', '../img/goodlist/i1.JPG', 'PESRICO', '163', 'PESRICO', '￥5122', '../img/goodlist/i2.JPG', '../img/goodlist/i3.JPG', '../img/goodlist/i4.JPG', '../img/goodlist/i5.JPG');
INSERT INTO `goodlist` VALUES ('9', '../img/goodlist/o1.JPG', 'BULK', '123', 'BULK', '￥234', '../img/goodlist/o2.JPG', '../img/goodlist/o3.JPG', '../img/goodlist/o4.JPG', '../img/goodlist/o5.JPG');
INSERT INTO `goodlist` VALUES ('10', '../img/goodlist/p1.JPG', 'SILVAN', '122', 'BULK', '￥129', '../img/goodlist/p2.JPG', '../img/goodlist/p3.JPG', '../img/goodlist/p4.JPG', '../img/goodlist/p5.JPG');
INSERT INTO `goodlist` VALUES ('11', '../img/goodlist/a1.JPG', 'ARMANI', '134', 'BULK', '￥866', '../img/goodlist/a2.JPG', '../img/goodlist/a2.JPG', '../img/goodlist/a3.JPG', '../img/goodlist/a4.JPG');
INSERT INTO `goodlist` VALUES ('12', '../img/goodlist/s1.JPG', 'CDHSQW', '160', 'CDHSQW', '￥964', '../img/goodlist/s2.JPG', '../img/goodlist/s3.JPG', '../img/goodlist/s4.JPG', '../img/goodlist/s5.JPG');

-- ----------------------------
-- Table structure for name
-- ----------------------------
DROP TABLE IF EXISTS `name`;
CREATE TABLE `name` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of name
-- ----------------------------
INSERT INTO `name` VALUES ('sssss123', '1sssss123');
INSERT INTO `name` VALUES ('sssss123', 'sssss123');
INSERT INTO `name` VALUES ('123456', 'jiangtao1');
INSERT INTO `name` VALUES ('jiang123', 'jiangtao123');
INSERT INTO `name` VALUES ('1', '1');
INSERT INTO `name` VALUES ('2', '2');
INSERT INTO `name` VALUES ('', '');

-- ----------------------------
-- Table structure for shoppingcar
-- ----------------------------
DROP TABLE IF EXISTS `shoppingcar`;
CREATE TABLE `shoppingcar` (
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `price` varchar(255) DEFAULT NULL,
  `num` varchar(255) NOT NULL,
  `size` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoppingcar
-- ----------------------------
INSERT INTO `shoppingcar` VALUES ('ARMANI', '../img/goodlist/a1.JPG', '￥866', '1', 'XL');
INSERT INTO `shoppingcar` VALUES ('ERMANNO', '../img/goodlist/e1.JPG', '￥2949', '1', 'S');
INSERT INTO `shoppingcar` VALUES ('MSGM', '../img/goodlist/w1.JPG', '￥3279', '33', 'XL');
INSERT INTO `shoppingcar` VALUES ('TRUSSARDI', '../img/goodlist/t1.JPG', '￥1869', '333', 'XL');
