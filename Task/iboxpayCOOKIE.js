

//独立COOKIE文件     ck在``里面填写，多账号换行
let refreshtokenVal = `11704dc8e4044cadb30fdce934cb1b60 `
let iboxpayvideoheaderVal = `{"Content-Length":"168","Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.8","timestamp":"1616043001396","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, 555655E7-43BC-443C-83D5-BF102BB8A796)","signature":"345CF7D7AB41E775F02ECB7AF6268D02EE6F8F2C081A49CEFFD861D91C45D2E7","X-User-Agent":"VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, 555655E7-43BC-443C-83D5-BF102BB8A796)","token":"9c587d5b9da84e768304b60d8c945591","traceid":"31348492368889176064161604296367000002bfa26fc","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans-CN;q=1","Accept":"*/*","random":"916EF924-5BF2-4241-B476-5E09C88251C3"} `
let iboxpayvideobodyVal = `{"type":1,"videoList":[{"videoId":"1330758793984864256","type":1,"isFinishWatch":false},{"videoId":"1349789535351881728","type":1,"isFinishWatch":false}],"actId":"324"} `

let iboxpaycookie = {

  refreshtokenVal: refreshtokenVal, 
    iboxpayvideoheaderVal: iboxpayvideoheaderVal,  
      iboxpayvideobodyVal: iboxpayvideobodyVal,   
  
}

module.exports =  iboxpaycookie
  
