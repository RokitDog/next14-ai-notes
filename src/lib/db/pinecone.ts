import {Pinecone} from '@pinecone-database/pinecone'

const apiKey = process.env.PINECONE_API_KEY;

if(!apiKey) {
    throw new Error('Missing PINECONE_API_KEY env variable');
}

const pinecone = new Pinecone({
    environment: "gcp-starter",
    apiKey,
})

export const notesIndex = pinecone.Index("nextjs-note-ai-app")