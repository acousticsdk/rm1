import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, Platform, View } from 'react-native';

export default function DragScrollView({ 
  children, 
  style, 
  contentContainerStyle,
  horizontal = true,
  showsHorizontalScrollIndicator = false,
  ...props 
}) {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (Platform.OS === 'web' && scrollRef.current) {
      const element = scrollRef.current;
      
      // Добавляем обработчики мыши для drag-скролла
      const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - element.offsetLeft);
        setScrollLeft(element.scrollLeft);
        element.style.cursor = 'grabbing';
        element.style.userSelect = 'none';
      };

      const handleMouseLeave = () => {
        setIsDragging(false);
        element.style.cursor = 'grab';
        element.style.userSelect = 'auto';
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        element.style.cursor = 'grab';
        element.style.userSelect = 'auto';
      };

      const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - element.offsetLeft;
        const walk = (x - startX) * 2; // Скорость скролла
        element.scrollLeft = scrollLeft - walk;
      };

      // Устанавливаем стили
      element.style.cursor = 'grab';
      element.style.overflowX = 'auto';
      element.style.overflowY = 'hidden';
      element.style.scrollBehavior = 'smooth';
      
      // Скрываем скроллбар
      element.style.scrollbarWidth = 'none';
      element.style.msOverflowStyle = 'none';
      
      // Добавляем CSS для webkit браузеров
      const styleSheet = document.createElement('style');
      styleSheet.textContent = `
        .drag-scroll-view::-webkit-scrollbar {
          display: none;
        }
      `;
      document.head.appendChild(styleSheet);
      element.classList.add('drag-scroll-view');

      // Добавляем обработчики событий
      element.addEventListener('mousedown', handleMouseDown);
      element.addEventListener('mouseleave', handleMouseLeave);
      element.addEventListener('mouseup', handleMouseUp);
      element.addEventListener('mousemove', handleMouseMove);

      // Очистка при размонтировании
      return () => {
        element.removeEventListener('mousedown', handleMouseDown);
        element.removeEventListener('mouseleave', handleMouseLeave);
        element.removeEventListener('mouseup', handleMouseUp);
        element.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isDragging, startX, scrollLeft]);

  if (Platform.OS === 'web') {
    return (
      <div 
        ref={scrollRef}
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
          paddingRight: '24px',
          ...style
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <ScrollView
      ref={scrollRef}
      horizontal={horizontal}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      style={style}
      contentContainerStyle={contentContainerStyle}
      {...props}
    >
      {children}
    </ScrollView>
  );
}