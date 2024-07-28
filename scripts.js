import { words } from "./words.js";
function findWordsSuffix(words){
    let word = document.querySelector('.input-bar').value;
    word=word.toLowerCase();
    let result = words.filter((some) => {
        if (some.endsWith(word)){
            return some;
        };
    });
    result = result.join('\r\n')
    document.querySelector('.result-bar').innerHTML = result;
}
function findWordsPrefix(words){
    let word = document.querySelector('.input-bar').value;
    word = word.toLowerCase();
    let result = words.filter((some) => {
        if (some.startsWith(word)){
            return some;
        };
    });
    result = result.join('\r\n')
    document.querySelector('.result-bar').innerHTML = result;
}
function myfunc(){
    let type = document.querySelector('.select-type').value;
    if (type == 'suffix'){
        findWordsSuffix(words);
    }else{ 
        findWordsPrefix(words);
    };
}
function keyFind(event){
    if (event.key == 'Enter'){
        myfunc();
    };
};
document.querySelector('.send-button').addEventListener("click", myfunc)
document.querySelector('.input-bar').addEventListener("keydown", keyFind)
document.querySelector('.select-type').addEventListener("keydown", keyFind)

