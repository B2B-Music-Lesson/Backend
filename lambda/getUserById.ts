import { APIGatewayProxyHandler } from 'aws-lambda'
import * as AWS from 'aws-sdk'


const db = new AWS.DynamoDB.DocumentClient();
<<<<<<< HEAD
=======
const TABLE_NAME = 'BackendStack-User00B015A1-MY1MDK2S4ZNM';
>>>>>>> 7ce31b4bd8a02cbf1066d557971dd46d84679f7a

export const handler: APIGatewayProxyHandler = async (event) => {
    const id = event.queryStringParameters ? event.queryStringParameters.user_id : ''
    const params = {
        TableName: process.env.TABLE_NAME||'',

        Key: {
            'user_id': id,
        }
    };
    var { Item } = await db.get(params).promise()

    console.log(JSON.stringify(Item))
    return {
        statusCode: 200,
        body: JSON.stringify(Item),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*'
        }
    }
}
