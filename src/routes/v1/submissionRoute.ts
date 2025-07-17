import express from "express";

import { addSubmission } from "../../controllers/submissionController.js";
import { createSubmissionZodSchema } from "../../dtos/CreateSubmissionDto.js";
import { validate } from "../../validators/zodValidator.js";


const submissionRouter = express.Router();

submissionRouter.post(
    '/', 
    validate(createSubmissionZodSchema),
    addSubmission
);

export default submissionRouter;