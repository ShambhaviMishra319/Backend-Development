import AWS from 'aws-sdk'
AWS.config.update({region:'us-east-1'})

const dynamodb= new AWS.dynamodb.DocumentClinent()

const tableName = 'tableName';
const siteIds = ['site123', 'site456', 'site789'];

async function getSiteData(siteId){
    const params={
        tableName:tableName,
        Key:{
            site_id:siteId
        }
    }

    const data=await dynamodb.get(params).promise() //await tells JS to wait here until the data is ready
    
    try{
        if (data.Item) {
        console.log(`Site found ${siteId}:`, data.Item);
        return data.Item;
    } else {
        console.log(` Site ID ${siteId} not found.`);
        return null;
    }
    }
    catch(err){
        console.error('Error fetching data',err)
        return null
    }
}

async function updateRecodes(siteId){
    const timestamp=new Date().toISOString();
    

}