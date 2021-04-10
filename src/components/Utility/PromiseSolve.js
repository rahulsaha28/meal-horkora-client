const PromiseSolve = (callBack)=>{

    return new Promise(resolve=>{
        const newData = callBack();
        resolve(newData);
    })
}

export { PromiseSolve }