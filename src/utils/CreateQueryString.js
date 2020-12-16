export default function createQueryString(optionsArray, findString){
    let recipesOptions = optionsArray.toString().replaceAll(',',' ');
    let query = '';
    if(findString.length>0){
        query = recipesOptions+' find='+findString
    }else{
        query = recipesOptions
    }
    return query;
}

