const { coursesData } = require('../data');

const course = (args)=>{
    var id = args.id;
    console.log(id)
    var data = coursesData.filter(course=>course.id == id);
    console.log('data is ',data)
    return data[0];
};
const getCourses =(args)=>{
    const topic = args.topic;
    var data = coursesData.filter(course => course.topic.includes(topic));

    return data;
};
const allCourses = ()=>{
    return coursesData;
}

module.exports = {
    course,
    getCourses,
    allCourses
}