export default function getSearchInputString(inputString){
    let searchString = '';
    if(inputString.includes('find=')){
        searchString = inputString.substring(inputString.indexOf('find=')+5);
    }
    return searchString;
}