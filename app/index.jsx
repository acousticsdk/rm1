import { useEffect } from 'react';
import { router } from 'expo-router';

export default function IndexScreen() {
  useEffect(() => {
    // Сразу переходим на первый экран
    router.replace('/(start)/screen1');
  }, []);

  return null;
}