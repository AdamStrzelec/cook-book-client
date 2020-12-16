export default function getSearchOptions(queryString){
    let options = queryString.substring(1).split(' ');
    if(queryString.includes('find')){
        options.splice(options.length-1, 1);
    }
    if(options.length===1 && options[0]===""){
        return [];
    }
    return options;
}