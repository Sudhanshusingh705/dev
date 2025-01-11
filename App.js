// import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import AppNavigator from './src/navigation/AppNavigator';
// import 'react-native-gesture-handler';

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <AppNavigator />
//     </SafeAreaProvider>
//   );
// }





// import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { NavigationContainer } from '@react-navigation/native';
// import { LogBox } from 'react-native';
// import AppNavigator from './src/navigation/AppNavigator';
// import 'react-native-gesture-handler';

// // Ignore specific warnings (optional)
// LogBox.ignoreLogs([
//   'Warning: ...', // Add specific warning messages to ignore
// ]);

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <AppNavigator />
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }






// import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import AppNavigator from './src/navigation/AppNavigator';
// import 'react-native-gesture-handler';

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <AppNavigator />
//     </SafeAreaProvider>
//   );
// }










// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
// import AppNavigator from './AppNavigator'; // Update the path if AppNavigator is in a different folder

// const App = () => {
//   return (
//     <NavigationContainer>
//       <AppNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;







import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator'; // Update the path if AppNavigator is in a different folder

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#f4511e" />
      <AppNavigator />
    </>
  );
};

export default App;
