module.exports = {

  name: "report_exporter",

  title: "Report Exporter",

  description: "",
  version: "v1",

  input:{
    title: "Report Exporter",
    type: "object",
    properties: {
      reportID : {
            title : "Report ID",
            minLength : 1,
            type : "string"


      },
      startdate : {
        title : "start date",
        minLength : 1,
        type : "string",
        description : "yyyy-mm-dd"


  },
  enddate : {
    title : "end date",
    minLength : 1,
    type : "string",
    description : "yyyy-mm-dd"


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
      'Content-Type': 'text/plain;charset=utf-8'
    },
    form: {
      'requestJobDescription': '{\n        "type":"file",\n        "credentials":{\n            "partnerUserID":'+input.auth.partnerUserID+',\n            "partnerUserSecret":'+input.auth.partnerUserSecret+'\n        },\n        "onReceive":{\n            "immediateResponse":["returnRandomFileName"]\n        },\n        "inputSettings":{\n            "type":"combinedReportData",\n            "reportState":"APPROVED,REIMBURSED",\n            "limit":"10",\n            "filters":{\n                "startDate":'+input.startdate+',\n                "endDate":'+input.enddate+',\n                "markedAsExported":"Expensify Export"\n            }\n        },\n        "outputSettings":{\n            "fileExtension":"xlsx",\n            "fileBasename":"myExport"\n        },\n        "onFinish":[\n            {"actionName":"markAsExported","label":"Expensify Export"},\n            {"actionName":"email","recipients":"manager@domain.com,finances@domain.com", "message":"Report is ready."}\n        ]\n    }',
      'template': '<#if addHeader == true>\n    Merchant,Original Amount,Category,Report number,Expense number<#lt>\n</#if>\n<#assign reportNumber = 1>\n<#assign expenseNumber = 1>\n<#list reports as report>\n    <#list report.transactionList as expense>\n        ${expense.merchant},<#t>\n        <#-- note: expense.amount prints the original amount only -->\n        ${expense.amount},<#t>\n        ${expense.category},<#t>\n        ${reportNumber},<#t>\n        ${expenseNumber}<#lt>\n        <#assign expenseNumber = expenseNumber + 1>\n    </#list>\n    <#assign reportNumber = reportNumber + 1>\n</#list>'
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
      //  return output("The file Exported : ");
        return output(null,body.filename);
        
      
      }
    
       
});
  
   
   }

  }

