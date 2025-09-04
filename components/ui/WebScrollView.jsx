import React, { useRef, useEffect } from 'react';
import { View, Platform } from 'react-native';

export default function WebScrollView({ children, style, contentContainerStyle }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (Platform.OS === 'web' && scrollRef.current) {
      const element = scrollRef.current;
      
      // Добавляем CSS стили для горизонтального скролла
      element.style.overflowX = 'auto';
      element.style.overflowY = 'hidden';
      element.style.scrollBehavior = 'smooth';
      element.style.display = 'flex';
      element.style.flexDirection = 'row';
      element.style.gap = '8px';
      element.style.paddingRight = '24px';
      
      // Скрываем скроллбар
      element.style.scrollbarWidth = 'none';
      element.style.msOverflowStyle = 'none';
      
      // Добавляем стили для webkit браузеров
      const style = document.createElement('style');
      style.textContent = `
        .web-scroll-view::-webkit-scrollbar {
          display: none;
        }
      `;
      document.head.appendChild(style);
      element.classList.add('web-scroll-view');
    }
  }, []);

  if (Platform.OS === 'web') {
    return (
      <div ref={scrollRef} style={{ ...style, ...contentContainerStyle }}>
        {children}
      </div>
    );
  }

  return (
    <View style={[style, contentContainerStyle]}>
      {children}
    </View>
  );
}