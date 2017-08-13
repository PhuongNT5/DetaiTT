var router = require('express').Router();
var lessonController = require('./../controllers/lesson.controller');

module.exports = function () {

    router.post('/', lessonController.createLessons);
    router.get('/', lessonController.getLessons);
    router.put('/:lesson_id', lessonController.updateLesson);
    router.get('/:lesson_id', lessonController.getLesson);
    router.delete('/:lesson_id', lessonController.deleteLesson);

    return router;
} 