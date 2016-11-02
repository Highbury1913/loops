var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var max= 1;
var C=0;
var freq;
for (var i = 0; i<array.length; i++) {
    for (var j=i; j<array.length; j++) {
    	
    	if (array[i] == array[j])
    		C++;
    	if(max<c)
        {
        	max=C;
        	freq=array[i];
        }
    }
}
