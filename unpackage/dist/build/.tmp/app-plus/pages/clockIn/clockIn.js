(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/clockIn/clockIn"],{"004b":function(t,e,n){},2993:function(t,e,n){"use strict";n.r(e);var o=n("ac54"),a=n("f26f");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);n("8aff");var u=n("2877"),i=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},5908:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(n("137b"));function c(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{imageSrc:"",text:"",url:"",locationName:"当前位置",title:"map",latitude:30.52,longitude:114.31}},computed:{userId:function(){var e=t.getStorageSync("userInfo");return e.user.userId},scheduleDate:function(){return a.default.dateUtils.formatNow()},scheduleStatic:function(){var t=new Date;return t.getHours()<12?1:2},covers:function(){return[{latitude:this.latitude,longitude:this.longitude,iconPath:"../../static/home/location.png"}]}},methods:{onShow:function(){this.imageSrc="",this.text="",this.getLocation()},enter:function(){""!==this.url?(t.showLoading({title:"加载中"}),this.$service.schedule.addSchedule({latitude:this.latitude,longitude:this.longitude,scheduleDate:null,scheduleExplain:this.text,scheduleId:null,scheduleStatic:this.scheduleStatic,url:this.url,userId:this.userId}).then(function(e){t.hideLoading(),200===e.statusCode?t.showModal({content:"打卡成功",showCancel:!1}):t.showModal({content:e.msg,showCancel:!1})})):t.showModal({content:"请上传图片",showCancel:!1})},getLocation:function(){var e=this;t.showLoading({title:"加载中"}),t.getLocation({type:"gcj02",geocode:!0,success:function(n){t.hideLoading();var o=t.createMapContext("map",e.$refs.map);o.moveToLocation(),e.longitude=n.longitude+1e-5,e.latitude=n.latitude;var a=t.getSystemInfoSync(),c="ios"===a.platform?n.address.streetNum:n.address.poiName;c||(c=""),e.locationName=n.address.city+" "+n.address.district+" "+n.address.street+" "+c}})},chooseImage:function(){var e=this;t.chooseImage({count:1,success:function(n){console.log(o("chooseImage success, temp path is",n.tempFilePaths[0]," at pages/clockIn/clockIn.vue:138"));var a=n.tempFilePaths[0];e.imageSrc=a,e.$service.schedule.ftpfileUpload({imageSrc:a}).then(function(n){200===n.statusCode?e.url=n.data:t.showModal({content:"上传失败",showCancel:!1})})},fail:function(t){console.log(o("chooseImage fail",t," at pages/clockIn/clockIn.vue:156"))}})}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},"8aff":function(t,e,n){"use strict";var o=n("004b"),a=n.n(o);a.a},ac54:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},f26f:function(t,e,n){"use strict";n.r(e);var o=n("5908"),a=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e["default"]=a.a}},[["71c0","common/runtime","common/vendor"]]]);