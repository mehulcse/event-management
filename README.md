# React boiler plate with Redux.

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

## How do I run this?
1. Install [yarn](https://yarnpkg.com/en/)
2. `cd` to project root
3. Install deps: `yarn`
3. Start: `yarn start`
4. Build: `yarn run build` (Look for `build` folder after process exits)


### Install json-server
On different CLI you need to install json-server globally 
```
npm install -g json-server
```

### To Run json-server for Mock DB
```
json-server --watch db.json --port 3004
```
You can use any port number instead of 3004.


## Contribution Guide

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

## Using the issue tracker

The issue tracker is the preferred channel for bug reports, features requests and submitting pull requests.

## Bug reports

A bug is a demonstrable problem that is caused by the code in the repository. Good bug reports are extremely helpful - thank you!

A good bug report shouldn't leave others needing to chase you up for more information. Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What browser(s) and OS experience the problem? What would you expect to be the outcome? All these details will help people to fix any potential bugs.

## Commit Messages

ideally commit messages should be concise and written in present tense. If you could mention issue number in the message, that would be even better.

## Pull requests

Please create `feature`, `bugfix` and `hotfix` branches as per the following format: `{feature/bugfix/hotfix}/{ISSUE_NUMBER/STORY_NUMBER}-{SHORT_DESCRIPTION}`. 

For example, a `bugfix` should be addressed in a branch called `bugfix/1-test-issue`.

Feel free to add instructions as the project progresses.
