# Coding Practices for this project.

## Starting a task.
* Stash all current changes by (git stash save 'Message describing what you are stashing in one sentence.')
* Create a new branch that will give some minor indicator of what you are building. (git checkout -b 'what you are building')

## Creating new files
* All images are under the assets folder.
* DO NOT CREATE TOO MANY JS files, if there is a component that uses multiple small components. Have them in one file. This WILL NOT HAPPEN OFTEN. This will prevent a unnecessary complex folder structure.

## eslint
* Make sure to follow the linter for clean code.

## Variable Names
* All variable names must describe what purpose they hold in the application. 
* The variable name length should be about 28 characters
* All variable names should be camelCase.

## Grouping
* Group imports in this order. Built in modules such as react, react-dom, and next. Then the next group should be third party modules such as semantic-ui-react and react-redux, and then internal components we define in the application such as the navigation bar. 
* Group functionality based on the purpose, for example if they are functions for user authentication, seperate that group from functions dealing with fetching data. This is useful in complex circumstances. 
* EACH GROUP IS SEPERATED BY A SPACE.

## HTML or JSX
* For creating pages use CryptoVapesRouteContainer.
* For container use the appropiate container components found in the Containers file.
* For text use appropiate text components found in the Typography file.
* Make sure each div tag has it's purpose.
* NEVER use dangerouslySetInnerHtml, this can cause cross-site scripting attacks. 
* When displaying a list of items, make sure to use uuidv4() for the key instead of the index of the item. Due to cases when we are displaying two lists, there would be duplicate key which therefore defeats the purpose of the having the key to begin with.
* IF a hook is being reused, create a reusable hook.
* Use only the text components in the typography folder for all text, if new text needs to be added. Add it to the BodyText file, or create a new file if needed.(Based on the purpose of the text)

## SASS or CSS
* Mobile first, make sure styles look good on mobile.
* Reuse classes
* For sass import all sass files in the index.sass.
* Try to use vw, vh or % for you width's and height. For example 100% instead of 640px.
* (Optional) Use distinct background color temporarily when adjusting padding or margin of container.

## Redux
* It should hold global state, but not all state. 
* Only hold authentication such as user login information(access token), other information that would need to be held across multiple components.

## Testing
* Use cypress tests, this will be implemented after the 1st MVP so no need to worry about it now.

## API Calls
* Make sure to use the generated clients from nswag to make api calls. 
