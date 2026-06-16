function splitter (text){
    let words = text.split(/(?=[A-Z])/).join(', ');
    console.log(words);
}
splitter ('SplitMeIfYouCanHaHaYouCantOrYouCan')