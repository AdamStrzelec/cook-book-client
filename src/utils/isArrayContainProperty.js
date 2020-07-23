export default function isArrayContainProperty(property, objectToCheck, objectsArray){
    let isContainProperty = false;
      for(let i=0; i<objectsArray.length; i++){
        if(objectsArray[i][property]===objectToCheck[property]){
          return true
        }
      }
      return isContainProperty;
  }