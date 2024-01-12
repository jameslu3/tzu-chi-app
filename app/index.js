import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPreExistingAccount from "./screens/login/login";
import ForgotPassword from "./screens/login/forgotpassword";
import RegistrationCreatingAccount from "./screens/login/registration";
const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginPreExistingAccount} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Registration" component={RegistrationCreatingAccount} />
    </Stack.Navigator>
  );
}

export default function App() {
    return (
        <AppStack/>
    );
  }