function removeUrlAnchor(url){
    let poundNum = url.indexOf('#')
  
    if (poundNum === -1 ) {
      return url
    } else {
      return url.substring(0,poundNum)
    }
  
  }