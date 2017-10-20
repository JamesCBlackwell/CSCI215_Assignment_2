function convert() {
    var input = document.getElementById("input").value;
    //make all upper case
    input=input.toUpperCase();
    //replaces \. with g
    input=input.replace(/\./g,' ');
    //replaces / / with g
    input=input.replace(/ /g,'');
    //splits the text
    var split_input=input.split("");
    console.log(split_input);
//create morsecode equivalent to alphabet
    var morsecode = ["A",".-","B","-...","C","-.-.","D","-..","E",".","F","..-.","G","--.","H","....","I","..","J",".---",
        "K","-.-.","L",".-..","M","--","N","-.","O","---","P",".--.","Q","--.-","R",".-.","S","...","T","-","U","..-",
        "V","...-","W",".--","X","-..-","Y","-.--","Z","--.."];

    var list=[];
    for (var x in split_input){

        if(split_input[x]==""){
            delete split_input[x];
        }
        else {
            var a = morsecode.indexOf(split_input[x]);
            console.log(a);
            var letter = morsecode[a+1];
            list.push(letter);
        }

        console.log(list)
    }




//grabbing div 'output' from html
    document.getElementById("output").innerHTML = list.join(" ");
}





