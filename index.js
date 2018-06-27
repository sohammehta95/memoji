
var memes = require('./memes.json');

var memeNames = Object.keys(memes)


memeNames.forEach(function(name) {
  memes[name] = memes[name].join('\n')
})


exports.memify = function(obj) {
    var fmeme = 'man';
    if(obj.gender =="male" && obj.spectacles)
        fmeme = 'man_specs'
    else if(obj.gender =="female" && obj.spectacles)
        fmeme = 'woman_specs'
    else if(obj.gender =="female" && !obj.spectacles)
        fmeme = "woman"
    else if(obj.gender =="male" && obj.spectacles)
        fmeme = "man"

   return memes[fmeme];    
}

exports.help = function(){

    console.log("             .-\"\"\"-.                   ");
    console.log("             / .===. \                   ");
    console.log("             \/ 6 6 \/                  ");
    console.log("             ( \___/ )                  ");
    console.log("_________ooo__\_____/_____________________________     ");
    console.log("|                                                | ");
    console.log("|                                                |");
    console.log("|     Memojis Are Amazing!                       |");
    console.log("| Visit https://github.com/sohammehta95/memoji   |      ");
    console.log(" \_______________________ooo_____________________/       ");
    console.log("              |  |  |");
    console.log("              |_ | _|");
    console.log("              |  |  |");
    console.log("              |__|__|");
    console.log("              /-'Y'-\ ");
    console.log("             (__/ \__)"); 
}
