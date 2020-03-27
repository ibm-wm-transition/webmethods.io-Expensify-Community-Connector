# webmethods.io-Expensify-Community-Connector
This is a Webmethods.io community connector for [Expensify](https://en.wikipedia.org/wiki/Expensify), a 	Expense Management Software. The connector uses the [Expensify REST API](https://integrations.expensify.com/Integration-Server/doc/) to make HTTP requests to access or modify a resource. The actions supported by this community connector are:

#### 1. [policy_creator](https://integrations.expensify.com/Integration-Server/doc/#policy-creator)
#### 2. [policy_list_getter](https://integrations.expensify.com/Integration-Server/doc/#policy-list-getter)
#### 3. [report_creator](https://integrations.expensify.com/Integration-Server/doc/#report-creator)
#### 4. [report_exporter](https://integrations.expensify.com/Integration-Server/doc/#export)
#### 5. [expense_rules_creator](https://integrations.expensify.com/Integration-Server/doc/#expense-rules-creator)

Learn about other supported actions [here](https://integrations.expensify.com/Integration-Server/doc/).

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
This connector requires any [Node](https://nodejs.org/dist/) version between 8.14.0 and 10.14.2.

Note: If you have installed any other Node version on your system, you can:
1. Use tools to switch between different versions of Node

  - For Windows, use [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades).
  
  - For Mac, use [homebrew](https://brew.sh/).
2. Build your app using your existing Node version and then transpile your code using a transpiler like [Babel](https://babeljs.io/).

The connector has been built with [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI tool, which must be installed. 

### Getting the API key 

To use the API, you will need to generate API credentials.

Create an Expensify account at https://www.expensify.com/
Go to https://www.expensify.com/tools/integrations/
A pair of credentials: partnerUserID and partnerUserSecret will be generated and shown on the page.

### Installing
1. Clone the repo `https://github.com/yuvanmytri/webmethods.io-BambooHR-Community-Connector.git`.
2. Run `npm install -g @webmethodsio/wmiocli`.
3. Login to your webmethods.io tenant using `wmio login`.
4. Execute `wmio init` to get started.
5. Finally, execute `wmio deploy` to deploy this connector to your tenant.

Once deployed, it’ll be automatically registered with webMethods.io Integration and will be available to you locally in the Connectors panel under the Services tab.

## Running the tests
To test, you can execute `wmio test`.

## Deployment
Execute `wmio deploy` to deploy this connector to your webmethods.io tenant. And `wmio unpublish` to unpublish the published connector app along with triggers and actions associated with the app.

![Expensify Connector](https://github.com/SoftwareAG/webmethods.io-Expensify-Community-Connector/blob/master/Ex.png)

## Built With
Node v8.14.0 and [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI.

## Contributors
[Anshuman Saikia](https://github.com/anshu96788) |
[Dipankar Dutta](https://github.com/DipankarDDUT) |
[Nawajish Laskar](https://github.com/Nawajish)

## License
This project is licensed under the Apache 2.0 License - see the [LICENSE.md](https://github.com/SoftwareAG/webmethods-microservicesruntime-samples/blob/master/LICENSE) file for details
______________________
These tools are provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.

Contact us at [TECHcommunity](mailto:technologycommunity@softwareag.com?subject=Github/SoftwareAG) if you have any questions.
