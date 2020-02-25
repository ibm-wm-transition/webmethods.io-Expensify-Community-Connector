module.exports = {

  name: "policy_list_getter",

  title: "Policy List Getter",

  description: "",
  version: "v1",

  input:{
    title: "Policy List Getter",
    type: "object",
    properties: {
      userEmail: {
         title: "User Email",
         minLength : 1,
         type : "string",
         description : "Enter the email associated with your account",

      }

    }
  },

  output: {
    title: "output",
  	type: "object",
  	properties: {

    }
  },
  mock_input:{},

  execute: function(input, output){

var request = require("request")
  var options = {
    'method': 'POST',
    'url': 'https://integrations.expensify.com/Integration-Server/ExpensifyIntegrations',
    'headers': {
      'Content-Type': 'application/json'
    },
    form: {
      'requestJobDescription': '{ "type":"get",\n        "credentials":{\n            "partnerUserID": '+input.auth.partnerUserID+',\n            "partnerUserSecret": '+input.auth.partnerUserSecret+'\n        },\n       "inputSettings": {\n            "type": "policyList",\n            "adminOnly": "true", \n  "userEmail":'+input.userEmail+'}\n}'
    }
  };

  request(options, function (error, response, body) {
 try {
           if (body && typeof(body) === "string") {
               body = JSON.parse(body);
           }
       } catch (e) {
           return output(body);
       };
   
     if (response.statusCode === 403) {
           return output("the authentication information is incorrect.");
       }
    if (response.statusCode === 400) {
           return output("there is an error in the construction of the request. The body of the response will contain more detail of the problem.");
       }
   if (response.statusCode === 404) {
     return output(body);
           return output(" the requested record could not be found. This may also occur if the user does not have access to the requested record");
       }
       if (response.statusCode !== 200) {
           return output(body.status.errorDetails);
       }
    if (response.statusCode === 200) {
          // return output(body);
         
      // }
        // return output(body);//.categories);
         return output(null,body);
      
      }
       
});
  
   
   }

  }
