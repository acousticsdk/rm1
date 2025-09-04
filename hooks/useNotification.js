import { useState, useCallback, useRef, useEffect } from 'react';

export function useNotification() {
  const isMountedRef = useRef(true);
  const [notification, setNotification] = useState({
    visible: false,
    type: 'success',
    title: '',
    message: '',
  });

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const showNotification = useCallback((type, title, message = '') => {
    if (!isMountedRef.current) return;
    console.log('showNotification вызван:', { type, title, message });
    setNotification({
      visible: true,
      type,
      title,
      message,
    });
  }, []);

  const hideNotification = useCallback(() => {
    if (!isMountedRef.current) return;
    console.log('hideNotification вызван');
    setNotification(prev => ({
      ...prev,
      visible: false,
    }));
  }, []);

  const showSuccess = useCallback((title, message = '') => {
    console.log('showSuccess вызван:', { title, message });
    showNotification('success', title, message);
  }, [showNotification]);

  const showError = useCallback((title, message = '') => {
    console.log('showError вызван:', { title, message });
    showNotification('error', title, message);
  }, [showNotification]);

  return {
    notification,
    showSuccess,
    showError,
    hideNotification,
  };
}