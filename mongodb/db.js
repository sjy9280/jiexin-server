import mongoose from 'mongoose'

const config = require('config-lite')(__dirname);
mongoose.Promise = global.Promise;

mongoose.connect(config.mongodbUrl).then((res)=>{
    console.log('开始')
},(rej)=>{
    console.log(rej)
})

const db = mongoose.connection;

db.once('open' ,() => {
    console.log('连接数据成功')
})

db.on('error', function(error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});

db.on('close', function() {
    console.log('数据库断开，重新连接数据库');
    mongoose.connect(config.mongodbUrl);
});

export default db;