import { Queue } from "bullmq";
import redisConnection from "../config/redisConfig.js";


export default  new Queue('sampleQueue',{ connection: redisConnection});