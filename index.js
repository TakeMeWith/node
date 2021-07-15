const express = require('express')
const app = express()
const port = 5000
const {User} = require("./models/User");
const bodyParser = require('body-parser');


//application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended :true}));
// application/json
app.use(bodyParser.json());

const mongoose =  require('mongoose') 
mongoose.connect('mongodb+srv://ESBY:shs9455@nodejsproject1.br4g1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(()=>console.log('MongoDB Connected..'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! gg')
})

app.post('/register',(req, res)=>{
  //회원가입할떄 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.


  const user = new User(req.body)

  user.save((err,userInfo) => {
    if(err) return res.json({success : false, err})
    return res.status(200).json({
      success: true
    })
  })
})








app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})