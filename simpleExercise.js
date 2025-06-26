import AWS from 'aws-sdk'; //importing AWS SDK LIBRARY SO IT CAN TALK TO DYNAMODB
AWS.config.update({region:'us-east-1'})

//dynamodb doesnt understand plain js and without documentclient it will difficult to format 
//document client lets you write the code as it is and behind the scene it converts how dynamodb accepts it

const dynamodb=new AWS.DynamoDB.DocumentClient();

const tableName='tableName';
const siteIds= ['site123', 'site456', 'site789'];

async function getSiteData(siteId){

    //params is like request form we are giving to dynamodb, key is the column name we are going to find the item/data specific to site_id
    const params={
        TableName:tableName,
        Key:{
            site_id:siteId
        }
    }

    try{
        const data=await dynamodb.get(params).promise();
        if(data.Item){
            console.log(`site found ${siteId} :`,data.Item);
            return data.Item;
        }
        else{
            console.log(`Site ID ${siteId} not found.`);
            return null;
        }
    }
    catch(err){
        console.log('errorrr')
        return null;
    }
}

async function fetchAllSites(siteIds) {
    const allResults=[];
    for (const id of siteIds){
        const result=await getSiteData(id);
        allResults.push(result);
    }
    }

getSiteData(siteIds)