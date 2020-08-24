# Simple React Native Starter

Simple ReactNative starter with an opinionated folder structure for mobile development.

## Getting Started

1. Ensure you've followed the [React Native - Get Started Guide](https://facebook.github.io/react-native/docs/getting-started.html)
1. Clone this project `git clone git@github.com:pcofilada/simple-react-native-starter.git`
1. Run `yarn install` from root directory
1. Run `yarn ios` or `yarn android` from root directory

## Folder Structure

- `android/` - Android native stuff
- `ios/` - iOS native stuff
- `src/` - Contains all of our react native codebase
  - `App.tsx` - Base react native component
  - `Router.ts` - App navigation
  - `Store.ts` - Store
  - `actions/` - Action Types and Action Creators
  - `api/` - Api call related functions
  - `assets/` - Images, fonts and other static files
  - `config/` - Config files
  - `containers/` - [Smart Components](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43)
  - `context/` - [React Context](https://reactjs.org/docs/context.html)
  - `reducers/` - Reducers
  - `types/` - Typescript related files or functions
  - `utils/` - Helper functions
  - `components/` - [Dumb Components](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43)
    - `common/` - Shared components
