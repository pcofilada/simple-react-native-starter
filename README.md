# React Native Boilerplate
Simple react-native boilerplate for mobile development.

## Getting Started
1. Ensure you've followed the [React Native - Get Started Guide](https://facebook.github.io/react-native/docs/getting-started.html)
1. Clone this project `git clone https://github.com/pcofilada/react-native-boilerplate.git`
1. Run `npm install` from root directory
1. Start the app in [an emulator](/docs/quick-tips.md#running-in-an-emulator)

## Stack
- [React Native](https://facebook.github.io/react-native/) for building mobile apps using Javascript
- [Redux](http://rackt.github.io/redux/index.html) a predictable state container for Javascript apps
- [Redux Thunk](https://github.com/gaearon/redux-thunk) middleware for Redux
- [Babel](http://babeljs.io/) for ES6+ support
- [Ex Navigation](https://github.com/exponent/ex-navigation) route-centric navigation for React Native

## File Structure
- `/android` - Android native stuff
- `/ios` - iOS native stuff
- `/src` - Contains our React Native App codebase
  - `/actions` - Action Types and Action Creators
  - `/components` - Dumb components
    - `/common` - Shared components
  - `/containers` - Smart components
  - `/reducers` - Reducers
  - `/App.js` - Base component
  - `/Router.js` - App navigation
  - `/Store.js` - Store
