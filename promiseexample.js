const displayMessage = (message) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(message==='ShowError'){
                return reject('Something went wrong');
            }
            resolve(message);
        }, 3000);
    })
}

displayMessage('Hello').then(result=>{
    console.log('Result', result);
    displayMessage('World').then(result=>{
        console.log('Result', result);
        displayMessage('How are you?').then(rs=>{
            console.log('3rd depth', result);
        }).catch(err=>{
            console.log('error', err);
        })
    }).catch(err=>{
        console.log('error', err);
    })
}).catch(err=>{
    console.log('error', err);
});

console.log('Outside promise');


const myFun = async ()=>{
    try{
        let result = '';
        result = await displayMessage('Hello');
        console.log(result);

        result = await displayMessage('World');
        console.log(result);

        result = await displayMessage('How are you');
        console.log(result);

        result = await displayMessage('ShowError');
        console.log(result);
    }catch(err){
        console.log('An error occured', err);
    }
}

myFun()