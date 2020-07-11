 
const http = require("http");
const app = require("./app");
http.createServer(app)

const PORT = process.env.PORT || 4000;


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// app.use(bodyParser.json());

// mongoose.connect('mongodb://127.0.0.1:27017/todos',{
//     useNewUrlParser :  true
// })
// const connection = mongoose.connection;
// connection.once('open', function(){
//     console.log("Mongo db data base connection established")
// })



// app.use('/items', itemRoutes);

app.listen(PORT,function(){
   console.log("server is running port is:" + PORT)
})