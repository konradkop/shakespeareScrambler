const express =  require('express')
require('dotenv').config()
const {BigQuery} = require('@google-cloud/bigquery');

const app = express()
const PORT = 5000
let corpusOutput

function main() {

    async function queryShakespeare() {
    // Queries a public Shakespeare dataset.

        // Create a client
        const bigqueryClient = new BigQuery();

        const sqlQuery2 = `SELECT DISTINCT corpus
        FROM \`bigquery-public-data.samples.shakespeare\``;
        const options2 = {
            query: sqlQuery2,
            location: 'US',
        };

        const [rows2] = await bigqueryClient.query(options2);
        console.log(rows2);
        //rows2.forEach(row => console.log(row));
        corpusOutput = rows2
    }

    queryShakespeare();
  }

main();


app.get('/dropdowns' , (req, res) => {
    res.send(corpusOutput)
})

app.get('/sentance/:corpus', async (req, res) => {
    const bigqueryClient = new BigQuery();

    // The SQL query to run
    const sqlQuery = `SELECT word, word_count
        FROM \`bigquery-public-data.samples.shakespeare\`
        TABLESAMPLE SYSTEM (1 PERCENT)
        WHERE corpus = @corpus 
        AND rand() < 0.1
        LIMIT @random`
        ;

        const options = {
            query: sqlQuery,
            location: 'US',
            params: {
                corpus: req.params['corpus'],
                random: 1
                //Math.ceil((Math.random() * 10) + 1)
            }
        };

        const [rows] = await bigqueryClient.query(options);
    res.send(rows)
})

app.listen(PORT, () => console.log("SERVER ON-> " + PORT))