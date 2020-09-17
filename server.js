const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const app = express();
const {buildSchema} = require('graphql');
const schema = buildSchema(`
type Query{
    course(id:Int !):Courses
    courses(topic:String):[Courses]
    allCourses:[Courses]
}
type Courses {
    id: Int
    title: String
    author: String
    topic: String
}
`);

const coursesData = [
    {
        id:10,
        title:'Imad aboulhouda',
        author:'Hello world',
        topic:'Dev',
    },
    {
        id:12,
        title:'Imad aboulhouda',
        author:'Hello world',
        topic:'DevX',
    },
    {
        id:13,
        title:'Imad aboulhouda',
        author:'Hello world',
        topic:'Dev',
    }
]
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
const root = {
    courses:getCourses,
    course:course,
    allCourses:allCourses,
};

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true,
}));


app.listen(3000);
