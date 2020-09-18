const { coursesData } = require('../data');

const addCourse=(args)=>{
    const { title,author,topic} = args;
    const newData = {
        id:100,
        title,
        author,
        topic,
    }
   coursesData.push(newData);
   return newData;
}
module.exports = {
    addCourse
}