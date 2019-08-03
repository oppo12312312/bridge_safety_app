(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-clockIn-clockIn"],{"137b":function(t,e,a){"use strict";function i(t){if("number"!==typeof t||t<0)return t;var e=parseInt(t/3600);t%=3600;var a=parseInt(t/60);t%=60;var i=t;return[e,a,i].map(function(t){return t=t.toString(),t[1]?t:"0"+t}).join(":")}function n(t,e){return"string"===typeof t&&"string"===typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}var o=function(t){return t<10?"0"+t:t},c={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var a in this.UNITS)if(t>=this.UNITS[a]){e=Math.floor(t/this.UNITS[a])+a+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),a=Date.now()-e.getTime();return a<this.UNITS["天"]?this.humanize(a):e.getFullYear()+"/"+o(e.getMonth()+1)+"/"+o(e.getDay())+"-"+o(e.getHours())+":"+o(e.getMinutes())},formatNow:function(){var t=new Date;return t.getFullYear()+"-"+o(t.getMonth()+1)+"-"+o(t.getDate())+" "+o(t.getHours())+":"+o(t.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};t.exports={formatTime:i,formatLocation:n,dateUtils:c}},2993:function(t,e,a){"use strict";a.r(e);var i=a("81ef"),n=a("f26f");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("6217");var c=a("2877"),s=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,"39a1cbd6",null);e["default"]=s.exports},5070:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 伸缩布局容器 */.db[data-v-39a1cbd6],.dbv1[data-v-39a1cbd6]{display:-webkit-flex;display:-moz-flex;display:-webkit-box;display:-ms-flexbox;display:flex}\n/* 伸缩性 */.dbv1[data-v-39a1cbd6],.fx1[data-v-39a1cbd6]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}\n/* 伸缩方向为垂直方向 */.dbv1[data-v-39a1cbd6],.v[data-v-39a1cbd6]{-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}\n/* 侧轴方向居中对齐 */.vh[data-v-39a1cbd6]{display:-webkit-flex;display:-moz-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-moz-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n/* 主轴和侧轴方向居中对齐 */.vm[data-v-39a1cbd6]{display:-webkit-flex;display:-moz-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-moz-justify-content:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-moz-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.dbv1[data-v-39a1cbd6]{height:100%}.menu[data-v-39a1cbd6]{padding:%?20?% %?10?%;text-align:center}.menu .uni-flex-item[data-v-39a1cbd6]{padding:5px}.menu .uni-flex-item[data-v-39a1cbd6]:active{background-color:#e4e4e4}.menu .menu-image[data-v-39a1cbd6]{background:#e4e4e4;width:22px!important;padding:11px!important;height:22px!important;border-radius:22px!important}.yangan .popup .uni-mask[data-v-39a1cbd6],.yangan .popup .uni-popup[data-v-39a1cbd6]{top:%?160?%}.active[data-v-39a1cbd6]:active{background-color:#e4e4e4}.meg-border[data-v-39a1cbd6]{position:relative}.meg-border[data-v-39a1cbd6]:after{position:absolute;z-index:3;right:0;bottom:0;left:%?12?%;right:%?12?%;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.login uni-input[data-v-39a1cbd6]{height:36px!important;line-height:36px!important;font-size:16px}.uni-grid-item-image[data-v-39a1cbd6]:nth-of-type(3){background-color:#5f9ea0}uni-page-body[data-v-39a1cbd6]{min-height:100%;background-color:#f4f5f6}.page-body[data-v-39a1cbd6]{padding:%?20?%}.location[data-v-39a1cbd6]{margin:%?20?% 0}.location .img[data-v-39a1cbd6]{margin-top:%?0?%;width:%?50?%;height:%?50?%}.location .name[data-v-39a1cbd6]{margin-left:%?4?%}.location .reset[data-v-39a1cbd6]{color:#007aff}.upload .title[data-v-39a1cbd6]{margin-bottom:%?20?%}.upload .image[data-v-39a1cbd6]{width:%?60?%;height:%?60?%}.upload .image-up[data-v-39a1cbd6]{width:%?220?%;height:%?220?%}.upload .demo[data-v-39a1cbd6]{border:1px dashed #c0ccda;border-radius:6px;background:#fff;width:%?220?%}.upload .img-b[data-v-39a1cbd6]{padding:%?80?%}.text .title[data-v-39a1cbd6]{margin-top:%?40?%;margin-bottom:%?20?%}.bu[data-v-39a1cbd6]{margin-top:%?40?%}body.?%PAGE?%[data-v-39a1cbd6]{background-color:#f4f5f6}',""])},6217:function(t,e,a){"use strict";var i=a("f0cb"),n=a.n(i);n.a},"81ef":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"page-body"},[a("v-uni-view",{staticClass:"page-section page-section-gap"},[a("v-uni-map",{ref:"map",staticStyle:{width:"100%",height:"300px"},attrs:{id:"map","show-location":!0,markers:t.covers,latitude:t.latitude,longitude:t.longitude}})],1),a("v-uni-view",{staticClass:"db location"},[a("v-uni-image",{staticClass:"img",attrs:{src:"../../static/home/location.png",mode:""}}),a("v-uni-view",{staticClass:"name fx1"},[t._v(t._s(t.locationName))]),a("v-uni-view",{staticClass:"reset",on:{click:function(e){e=t.$handleEvent(e),t.getLocation(e)}}},[t._v("重新定位")])],1),a("v-uni-view",{staticClass:"upload"},[a("v-uni-view",{staticClass:"title"},[t._v("上传图片：")]),a("v-uni-view",{staticClass:"demo"},[t.imageSrc?[a("v-uni-image",{staticClass:"image-up",attrs:{src:t.imageSrc,mode:"widthFix"},on:{click:function(e){e=t.$handleEvent(e),t.chooseImage(e)}}})]:[a("v-uni-view",{staticClass:"img-b",on:{click:function(e){e=t.$handleEvent(e),t.chooseImage(e)}}},[a("v-uni-image",{staticClass:"image",attrs:{src:"../../static/jia.png",mode:""}})],1)]],2)],1),a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"title"},[t._v("备注说明：")]),a("v-uni-view",{staticClass:"uni-textarea"},[a("v-uni-textarea",{attrs:{placeholder:"请输入备注"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)],1),a("v-uni-button",{staticClass:"bu",attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.enter(e)}}},[t._v("确认打卡")])],1)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},e122:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("137b"));function n(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{imageSrc:"",text:"",url:"",locationName:"当前位置",title:"map",latitude:30.52,longitude:114.31}},computed:{userId:function(){var t=uni.getStorageSync("userInfo");return t.user.userId},scheduleDate:function(){return i.default.dateUtils.formatNow()},scheduleStatic:function(){var t=new Date;return t.getHours()<12?1:2},covers:function(){return[{latitude:this.latitude,longitude:this.longitude,iconPath:"../../static/home/location.png"}]}},methods:{onShow:function(){this.imageSrc="",this.text="",this.getLocation()},enter:function(){""!==this.url?(uni.showLoading({title:"加载中"}),this.$service.schedule.addSchedule({latitude:this.latitude,longitude:this.longitude,scheduleDate:null,scheduleExplain:this.text,scheduleId:null,scheduleStatic:this.scheduleStatic,url:this.url,userId:this.userId}).then(function(t){uni.hideLoading(),200===t.statusCode?uni.showModal({content:"打卡成功",showCancel:!1}):uni.showModal({content:t.msg,showCancel:!1})})):uni.showModal({content:"请上传图片",showCancel:!1})},getLocation:function(){var t=this;uni.showLoading({title:"加载中"}),uni.getLocation({type:"gcj02",geocode:!0,success:function(e){uni.hideLoading();var a=uni.createMapContext("map",t.$refs.map);a.moveToLocation(),t.longitude=e.longitude+1e-5,t.latitude=e.latitude,t.locationName=e.address.city+" "+e.address.district+" "+e.address.street+" "+e.poiName||""}})},chooseImage:function(){var t=this;uni.chooseImage({count:1,success:function(e){console.log("chooseImage success, temp path is",e.tempFilePaths[0]);var a=e.tempFilePaths[0];t.imageSrc=a,t.$service.schedule.ftpfileUpload({imageSrc:a}).then(function(e){200===e.statusCode?t.url=e.data:uni.showModal({content:"上传失败",showCancel:!1})})},fail:function(t){console.log("chooseImage fail",t)}})}}};e.default=o},f0cb:function(t,e,a){var i=a("5070");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("3ac54606",i,!0,{sourceMap:!1,shadowMode:!1})},f26f:function(t,e,a){"use strict";a.r(e);var i=a("e122"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a}}]);