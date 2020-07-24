# Project creation

```bash
# serverless-react-amplifynpm i -g @aws/amplify

amplify configure

# IAM user setup
```

    Specify the AWS Region
    ? region: **eu-central-1**
    Specify the username of the new IAM user:
    ? user name: **amplify-egghead-cli**
    Complete the user creation using the AWS console
    https://console.aws.amazon.com/iam/home?region=undefined#/users$new?step=final&accessKey&userNames=amplify-egghead-cli&permissionType=policies&policies=arn:aws:iam::aws:policy%2FAdministratorAccess
    Press Enter to continue

    Enter the access key of the newly created user:
    ? accessKeyId: ********\*\*\*\*********
    ? secretAccessKey: ******************\*\*\*\*******************
    This would update/create the AWS Profile in your local machine
    ? Profile Name: **amplify-egghead-cli**

Successfully set up the new user.

```
npx create-react-app my-amplify-app

amplify init

# amplify init steps
```

> Note: It is recommended to run this command from the root of your app directory
>
> ? Enter a name for the project **reactamplify**
>
> ? Enter a name for the environment **dev**
>
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

# Add authentication

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

New `aws-exports.js` file should be created:

```
ls src
#
```
