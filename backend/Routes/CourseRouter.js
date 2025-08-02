import express from 'express';

import {
    createCourse,
} from '../Controllers/CourseController.js';

const router = express.Router();

router.post('/create-course',Protection, createCourse);

export default router;