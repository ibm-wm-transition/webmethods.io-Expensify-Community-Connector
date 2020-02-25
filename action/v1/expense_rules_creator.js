module.exports = {

  name: "expense_rules_creator",

  title: "Expense Rules Creator",

  description: "",
  version: "v1",

  input:{
    title: "Expense Rules Creator",
    type: "object",
    properties: {
      policyID:{
            title : "policID",
            minLength  : 1 ,
            type : "string",
 
      },
      tagname : {
            title : "tagname",
            minLength : 1,
            type : "string",
            enum :[
              "don't change"

            ]

      },
      defaultBillable:{
          title : "defaultBillable",
          minLength : 1,
            type : "string",
            enum :[
              "Billable",
              "Non-Billable"

            ]



      },
      Email : {
              title : "Email",
              minLength : 1,
              type : "string"

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
      'requestJobDescription': '{\n        "type": "create",\n        "credentials": {\n            "partnerUserID": '+input.auth.partnerUserID+',\n            "partnerUserSecret": '+input.auth.partnerUserSecret+'\n        },\n        "inputSettings": {\n            "type": "expenseRules",\n            "policyID": '+input.policyID+',\n            "employeeEmail": '+input.Email+',\n            "actions": {\n                "tag": '+input.tagname+'\n,    "defaultBillable":'+input.defaultBillable+',\n            }\n        }\n} '
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

 