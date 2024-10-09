if (!process.env.COHERE_API_KEY) {
  throw new Error('Missing Cohere API Key  in .env file');
}

const COHERE_API_KEY = process.env.COHERE_API_KEY ?? '';
const COLLECTION_NAME = process.env.COLLECTION_NAME ?? '';
export { COLLECTION_NAME, COHERE_API_KEY };

