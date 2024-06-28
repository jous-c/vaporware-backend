import express from 'express';
import fs from 'fs';

const router = express.Router();

router.get('/', (req,res) => {
    const savedData = JSON.parse(fs.readFileSync('./data/snippets.json'))
    res.status(200).json(savedData)
})

router.get('/:snippetId', (req, res) => {
    const { snippetId } = req.params
    const snippetsData = JSON.parse(fs.readFileSync('./data/snippets.json'));
    const SingleSnippet = snippetsData.find(snippet => snippet.id === snippetId)

    res.status(200).json(SingleSnippet)
});

export default router; 