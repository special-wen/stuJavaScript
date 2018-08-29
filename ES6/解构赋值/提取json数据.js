
    let jsonObj = {
        id:23,
        status:true,
        data:[12,34]
    }
    let {id,status,data:number} = jsonObj;
    console.log(id,status,number);
