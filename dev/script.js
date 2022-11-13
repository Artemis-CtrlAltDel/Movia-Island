let count = 0

const btn = document.getElementById("btn")
const input = document.querySelector('input')

const incrementCounter = (value) => {
    if(!value){
        ++count
    }else{
        count = value
    }
    btn.textContent = `${count}`
}

btn.addEventListener('click',incrementCounter )


input.addEventListener('change',(e)=> {
    const inp = e.target.value
    incrementCounter(inp)
})


// const Utils = {
//     api: ''
// }

class Utils {
    static api = ""
}