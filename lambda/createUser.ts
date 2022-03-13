import { APIGatewayProxyHandler } from 'aws-lambda'
import * as AWS from 'aws-sdk'

const db = new AWS.DynamoDB.DocumentClient();
<<<<<<< HEAD
=======
const TABLE_NAME = 'BackendStack-User00B015A1-MY1MDK2S4ZNM';
const header = {
    'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};
const NULL_ARRAY = [null, undefined, ""]
>>>>>>> 7ce31b4bd8a02cbf1066d557971dd46d84679f7a

export const handler: APIGatewayProxyHandler = async (event) => {
    try {
        const item = JSON.parse(event.body || '{}');

<<<<<<< HEAD
        console.log('body', event.body);
        console.log('item', item);
        console.log("table name", process.env.TABLE_NAME);

        // Check if parameters are valid
        if (!(item?.user_id && item?.password)) {
=======
        // Check if parameters are valid
        if (NULL_ARRAY.includes(item.user_id) || NULL_ARRAY.includes(item.password)) {
>>>>>>> 7ce31b4bd8a02cbf1066d557971dd46d84679f7a
            return {
                statusCode: 400,
                headers: header,
                body: '[InvalidRequest] Invalid parameters',
            };
        };

        const params = {
            TableName: TABLE_NAME,
            Item: item,
        };
        
        await db.put(params).promise();
    
        return {
            statusCode: 200,
            body: 'success',
            headers: header,
        };

    } catch(error) {
        return {
            statusCode: 500,
            body: '[ServerError] '+  JSON.stringify(error),
            headers: header,
        };
    }
}