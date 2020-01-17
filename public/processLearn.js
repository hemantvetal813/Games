

let que=["name","surname"];
let ans=[];

function ask(i) {
    process.stdout.write(`${que[i]} -->`)
}

process.stdin.on("data",(data) =>{
    ans.push(data.toString())
    if(ans.length<que.length){
        ask(ans.length)
    }else process.exit()
});
process.on("exit",()=>{
    ans.forEach(item=>{

        process.stdout.write(item)
    })
})
ask(0)