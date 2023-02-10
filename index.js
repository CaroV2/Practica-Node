var buf = new Buffer([ 97, 98, 99, 100, 101, 102, 0 ]); 
var binary = require('binary');
var vars = binary.parse(buf)
    .word16ls('ab')
    .word32bu('cf')
    .word8('x')
    .vars
;
console.dir(vars);

console.log('--------------------------------')

var convert = require('color-convert');
 
/*convert.rgb.hsl(140, 200, 100);             // [96, 48, 59]
convert.keyword.rgb('blue');                // [0, 0, 255]
*/

var blue = convert.rgb.hsl(150, 65, 75);
console.log(blue)