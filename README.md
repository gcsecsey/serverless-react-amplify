# Project creation

```bash
# serverless-react-amplifynpm i -g @aws/amplify

amplify configure
```

```
Specify the AWS Region
? region:  # Your preferred region
Specify the username of the new IAM user:
? user name:  # User name for Amplify IAM user
Complete the user creation using the AWS console

Enter the access key of the newly created user:
? accessKeyId: # YOUR_ACCESS_KEY_ID
? secretAccessKey: # YOUR_SECRET_ACCESS_KEY
This would update/create the AWS Profile in your local machine
? Profile Name: # (default)

Successfully set up the new user.

```

npx create-react-app my-amplify-app

amplify init

# amplify init steps

```

> Note: It is recommended to run this command from the root of your app directory
>
> ? Enter a name for the project **reactamplify**
> ? Enter a name for the environment **dev**
> ? Choose your default editor: **Visual Studio Code**
>
> ? Choose the type of app that you're building **javascript**
>
> Please tell us about your project
>
> ? What javascript framework are you using **react**
>
> ? Source Directory Path: **src**
>
> ? Distribution Directory Path: **build**
>
> ? Build Command: **npm run-script build**
>
> ? Start Command: **npm run-script start**
>
> ? Do you want to use an AWS profile? **Yes**
>
> ? Please choose the profile you want to use **amplify-egghead-cli**

```

npm i -S aws-amplify aws-amplify-react

```

# Adding authentication

```

amplify add auth

```

    Do you want to use the default authentication and security configuration? **Default configuration**
    Warning: you will not be able to edit these selections.
    How do you want users to be able to sign in? **Username**
    Do you want to configure advanced settings? **No, I am done.**

Push new configuration, provision resources:

```

amplify push

```

> | Category | Resource name        | Operation | Provider plugin   |
> | -------- | -------------------- | --------- | ----------------- |
> | Auth     | reactamplifyc0315247 | Create    | awscloudformation |
>
> ? Are you sure you want to continue? **Yes**
```

New `aws-exports.js` file should be created:

```

ls src

# App.css App.js App.test.js **aws-exports.js** index.css index.js logo.svg serviceWorker.js setupTests.js

```

## Testing authentication

```

npm start

```

# Adding API

```
amplify add api

```

```

? Please select from one of the below mentioned services: # GraphQL
? Provide API name: # reactamplify
? Choose the default authorization type for the API # API key
? Enter a description for the API key: # reactamplifyapikey
? After how many days from now the API key should expire (1-365): # 7
? Do you want to configure advanced settings for the GraphQL API # No, I am done.
? Do you have an annotated GraphQL schema? # No
? Do you want a guided schema creation? # Yes
? What best describes your project: # Single object with fields (e.g., “Todo” with ID, name, description)
? Do you want to edit the schema now? Yes
Please edit the file in your editor: # At this point, the schema can be modified
? Press enter to continue

```
