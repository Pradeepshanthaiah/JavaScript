// const apiCall = new Promise ((completed, failed) => {
//     setTimeout(() => {
//         failed();
//     }, 5000);
// });

// apiCall.then(() => {
//     console.log('Promise Completed');
// }).catch(() => {
//     console.log('Promise failed, please help completing the task')     
// })

// const boypromise = new Promise ((success, fail) => {
//     setTimeout(() => {
//         success('completed cleaning room');
//                      // fail('doing timepass')
//     }, 5000);
// })

// boypromise.then((message)=>{
//     console.log('evening completed');
//     console.log(message); 
// }).catch((error)=> {
//     console.log('Promise failed');
//     console.log('error');
// })


const boypromise = new Promise ((success, fail) => {
    setTimeout(() => {
        success('completed cleaning room');
    
    }, 5000);
});

async function Load(){
try {
    const message = await boypromise();
    console.log(message);
} catch (error) {
    console.log('error failed');
    console.log(error);
}
}

Load();

