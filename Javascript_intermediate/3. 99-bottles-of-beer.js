var num = 99;

function beer(){
    while(num>=0){
        if(num>1){
            console.log(num + " bottles of beer on the wall, "+num+" bottles of beer.");
            if((num-1)>1){
                console.log("Take one down and pass it around, "+(num-1) + " bottles of beer on the wall.");
            }
            else{
                console.log("Take one down and pass it around, "+(num-1) + " bottle of beer on the wall.");
            }
        }
        else if(num===1){
            console.log(num + " bottle of beer on the wall, "+num+" bottle of beer.");
            console.log("Take one down and pass it around, "+ " no more bottles of beer on the wall.");
        }
        else{
            console.log("No more bottles of beer on the wall, no more bottles of beer.");
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
        num--;
    }
    
}