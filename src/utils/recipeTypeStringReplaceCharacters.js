export function recipeTypeStringReplaceCharacters(recipeType){
    return recipeType.charAt(0).toUpperCase()+recipeType.slice(1).replace('_',' ');
}