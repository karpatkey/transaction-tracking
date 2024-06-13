export const inverse = (obj: any) => {
    const retObj = {};
    for(let key in obj){
        retObj[obj[key]] = key;
    }
    return retObj;
}
