import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter.js";
import { ExpressAdapter } from "@bull-board/express";

// import evaluationQueue from "../queues/evaluationQueue";
import sampleQueue from "../queues/sampleQueue.js";
// import submissionQueue from "../queues/submissionQueue";

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/ui');

createBullBoard({
     queues: [new BullMQAdapter(sampleQueue),],
    serverAdapter,
});

export default serverAdapter;
