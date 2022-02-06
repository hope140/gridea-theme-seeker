document.body.oncopy=function(){
event.returnValue=false;
var t=document.selection.createRange().text;
var s=”本文来源于<%= themeConfig.siteName %>, 原文地址： <%= themeConfig.domain %> “;
clipboardData.setData(‘Text’,’\r\n’+t+’\r\n’+s+’\r\n’);
}