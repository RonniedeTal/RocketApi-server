const jsonServer=require("json-server")

const server= jsonServer.create()

const middlewares= jsonServer.defaults()

server.use(middlewares)


const allowAccesFromAnyWhere=(req, res, next)=>{

    res.header("Acces-Control-Allow-Origin", "*")
        next();
 
}
server.use(allowAccesFromAnyWhere)

const router = jsonServer.router("db.json")

server.use(router)


const PORT=5005;

server.listen(PORT,()=>{
    console.log(`JSON server executed on ${PORT}`);
    console.log(`Acces local on http://localhost:${PORT}`);
})