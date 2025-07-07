/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xCopy = x
    x =  Math.abs(x)
    let rem = 0
    let rev = 0
    while(x > 0){
      rem = x % 10
      rev = (10 * rev) + rem
      x = Math.floor(x / 10)
    }
    let limit = Math.pow(2,31)
    if(rev < -limit || rev > limit) return 0;
    return xCopy < 0 ? -rev : rev
};