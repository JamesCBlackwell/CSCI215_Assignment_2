function convert() {
    var input = document.getElementById("input").value ;
    var split = input.split(" ") ;

    for(var i=0; i<word.length; i++){
        words[i].toLowerCase() ;
    }

    var counted = {} ;

    for(var i=0; i<words.length; i++) {
        var word = word
    }

    var list=[];
    for (var x in split_text){
        if(split_text[x]==""){
            delete split_text[x];
        }
        else if(list.includes(split_text[x])){

            var a = list.indexOf(split_text[x]);
            list.splice(a+1, 1, list[a+1]+1);

        }
        else {
            list.push(split_text[x]);
            var a = list.indexOf(split_text[x]);
            list.splice(a+1, 0, 1);
        }

    }




//grabbing element 'output' from html
    document.getElementById("output").innerHTML = list.join(" ");
}