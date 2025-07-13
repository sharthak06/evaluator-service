import { Job,Worker } from "bullmq";
import redisConnection from "../config/redisConfig.js";

import SampleJob from "../jobs/SampleJob.js";

export default function SampleWorker(queueName : string) {
    new Worker(
        queueName,
        async (job : Job) => {
            
            if(job.name == "SampleJob"){
                const SampleJobInstance = new SampleJob(job.data);
                SampleJobInstance.handle(job);
                return true;
            }
        },
        {
            connection: redisConnection
        }
    );
}