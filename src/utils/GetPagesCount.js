export default function getPagesCount(items, perPage){
    if(items%perPage!==0){
      return Math.floor(items/perPage)+1;
    }
    return items/perPage;
  }