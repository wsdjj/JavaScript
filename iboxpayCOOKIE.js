//独立COOKIE文件     ck在``里面填写，多账号换行
let refreshtokenVal = `fd3172a63aab4216ae8aa2e0d86f55ad`
let iboxpayvideoheaderVal = `{"Content-Length":"103","Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.8","timestamp":"1618459829044","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, 555655E7-43BC-443C-83D5-BF102BB8A796)","signature":"4AD59F479BDA301FC4950E00306142DE855A702622B35E38829CF90F25EDDC7B","X-User-Agent":"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, 555655E7-43BC-443C-83D5-BF102BB8A796)","token":"ac3870c1e3a7481ea56dfd43a4b9bde2","traceid":"31348492368889176064161845978684147c02bfa26fc","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans-CN;q=1","Accept":"*/*","random":"F8F5BD1A-2520-460E-8AED-7B23D5E03BBA"}`
let iboxpayvideobodyVal = `{"type":1,"videoList":[{"videoId":"1377532491315875840","type":1,"isFinishWatch":false}],"actId":"344"}`



let iboxpaycookie = {

  refreshtokenVal: refreshtokenVal, 
    iboxpayvideoheaderVal: iboxpayvideoheaderVal,  
      iboxpayvideobodyVal: iboxpayvideobodyVal,   
  
}

module.exports =  iboxpaycookie
