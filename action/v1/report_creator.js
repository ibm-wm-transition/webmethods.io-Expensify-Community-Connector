module.exports = {

  name: "report_creator",

  title: "Report Creator",

  description: "",
  version: "v1",

  input:{
    title: "Report Creator",
    type: "object",
    properties: {

   policyID :{
        title : "Policy ID",
        type : "string",
        minLength : 1,


   },
   employeeEmail : {
        title : "Email",
        type : "string",
        minLength : 1,


   },
   report_title : {
        title : "Report Title",
        type : "string",
        minLength : 1,


   },

  expenses: {
    type: "array",
    title: "Expenses",
    minItems: 1,
    maxItems : 1,
    items: {
      type: "object",
      title: "Input",
      properties: {
        date: {
          type: "string",
          title: "date",
          minimum: 1,
          minLength : 1,
        },
        currency: {
          type: "string",
          title: "currency",
          minLength : 1,
          minimum: 1,
        },
        merchant: {
          type: "string",
          title: "merchant",
          minLength : 1,
          minimum: 1,
        },
        amount: {
          type: "string",
          title: "amount",
          minLength : 1,
          minimum: 1,
        },
      }
    },
  },
 

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
      "requestJobDescription": `{      
          "type": "create",
            "credentials": { 
              "partnerUserID": ${input.auth.partnerUserID},
              "partnerUserSecret": ${input.auth.partnerUserSecret}
                    },
            "inputSettings": {
            "type": "report",       
                "policyID": ${input.policyID},
                "report": {
                 "title": ${input.report_title},
                         },
               "employeeEmail": ${input.employeeEmail},
                 "expenses": [
                   {                    
                     "date": ${input.expenses[0].date},
                       "currency": ${input.expenses[0].currency},
                         "merchant": ${input.expenses[0].merchant},
                          "amount": ${input.expenses[0].amount}
                                        },  
                                         
                                                  ]
                                                       }
                                                      }
    `
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

 