# React Native Project - Flashcards

## Description

## Getting started

### Installation

```sh
mkdir <project>
cd <project>
git clone https://github.com/tyagow/flashcards.git .
yarn install
yarn start
```

### Test

```sh
yarn test
```

### Style Guide

[ESLint](https://eslint.org/) [Prettier](https://github.com/prettier/prettier)

Uses AirBnB ESLint config.

### Notification System

If any Quiz was tried in a day, at 8 PM local time the app will display notification in the system to remind the user to study at least one Quiz.

If an User plays a Quiz the notification will be canceled and reschedule for tomorrow.

Code for notification is in `utlis/helpers.js`
