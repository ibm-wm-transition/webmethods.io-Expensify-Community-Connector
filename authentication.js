module.exports = {
  label: "Connect to Expensify",
  mock_input: {},
  input: {
    type: "object",
    properties: {
      // fields schema
      // eg:
      partnerUserID :
           {
        type: "string",
        minLength: 1,
        label: "partnerUserID"
      },
      partnerUserSecret :
      {
   type: "string",
   minLength: 1,
   label: "partnerUserSecret"
 },
//  Email :
//  {
// type: "string",
// minLength: 1,
// label: "Email"
// },

    }
  },
  validate: function (input, output) {
    // auth data will be available in input.auth
    // like var username = input.auth.username
    // callback pattern
    // output(error, success)
    output(null, true);
  }
}