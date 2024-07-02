import express from 'express';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

router.get('/', (req,res) => {
    const snippetData = JSON.parse(fs.readFileSync('./data/snippets.json'))
    res.status(200).json(snippetData)
})

router.get('/:snippetId', (req, res) => {
    const { snippetId } = req.params
    const snippetsData = JSON.parse(fs.readFileSync('./data/snippets.json'));
    const SingleSnippet = snippetsData.find(snippet => snippet.id === snippetId)

    res.status(200).json(SingleSnippet)
});


router.post('/', (req, res) => {
    const { title, description, file } = req.body;
    console.log(req.body)
    const newSnippet = {
        id: uuidv4(),
        title,
        description,
        file,
    }

    const snippetData = JSON.parse(fs.readFileSync('./data/snippets.json'))
    
    const newSnippetData = snippetData.push(newSnippet)

    fs.writeFileSync('./data/snippets.json', JSON.stringify(snippetData))
    res.status(201).json(newSnippetData);

})

export default router; 