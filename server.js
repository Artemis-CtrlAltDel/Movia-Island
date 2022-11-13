import express from 'express'



const app = express()


app.get('/transactions', (req,res) => {
    res.json({
        transactions: [
            {
                id:1234,
                title:'payment d\'un'
            },
            {
                id:1234,
                title:'payment d\'un'
            },
            {
                id:1234,
                title:'payment d\'un'
            },
        ]
    })
})


app.listen(3000,()=> console.log('server listening...'))