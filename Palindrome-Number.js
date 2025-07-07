/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let newx = x
    let rev = 0
    let rem = 0

    while(x>0){
      rem = x % 10
      rev = (10*rev) + rem
      x = Math.floor(x / 10)
    }
    if(rev === newx){
      return true
    }
    else{
      return false
    }
};