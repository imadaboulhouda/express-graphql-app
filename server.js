const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const app = express();
const { addCourse } = require('./mutations/CoursesMutations');
const { course,
    getCourses,
    allCourses } = require('./Querys/Courses');
const {buildSchema} = require('graphql');
const schema = buildSchema(`
type Query{
    course(id:Int !):Courses
    courses(topic:String):[Courses]
    allCourses:[Courses],
}
type Courses {
    id: Int
    title: String
    author: String
    topic: String
}
type Mutation{
    addCourse(title:String,author:String,topic:String):Courses
}
`);
const root = {
  
        courses:getCourses,
    course:course,
    allCourses:allCourses,
    addCourse:addCourse,
   
   
    
};

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true,
}));


app.listen(3000);
