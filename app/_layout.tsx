import { Stack } from 'expo-router/stack';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

function Layout() {
  return (
    <SafeAreaProvider initialWindowMetrics={initialWindowMetrics}>
      <Stack />
    </SafeAreaProvider>
  );
}

export default Layout;