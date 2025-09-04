import { Stack } from 'expo-router';

export default function WalletLayout() {
  return (
    <Stack screenOptions={{ 
      headerShown: false,
      contentStyle: { backgroundColor: '#070707' }
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}