const AWS = require('aws-sdk');

exports.handler = async (event, context, callback) => {
        const result = JSON.parse(event.body)
        console.log("result", result)
        let recieved_request =JSON.stringify(result.img);
        let recieved_request_imageId =JSON.stringify(result.imageID);
        let recieved_request_ext =JSON.stringify(result.fileExt);
        let recieved_request_folder =JSON.stringify(result.folder);
    
        recieved_request=  recieved_request.slice(1, -1);
        var filePath = recieved_request_imageId + "." + recieved_request_ext.replace('"','').replace('"','');
        let buffer = Buffer.from(recieved_request.replace(/^data:image\/\w+;base64,/, ""),'base64'); 
        
        
      
          AWS.config.region = "us-east-1";
  //AWS.config.update({ region: 'us-east-1' });
  var textract = new AWS.Textract({ apiVersion: "2018-06-27" });
  //var textract = new AWS.Textract();

     
     var params = {
    Document: {
      /* required */
      'Bytes': buffer
    
    }
  };
  const data = await textract.detectDocumentText(params).promise();
  console.log(data);
   var res ={
          "statusCode": 200,
                "headers": {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
              }
            };
            res.body = JSON.stringify(data);
  return res;
   
     
};