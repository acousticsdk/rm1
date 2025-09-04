import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { router } from 'expo-router';
import { Minus, ChevronLeft } from 'lucide-react-native';
import Button from '@/components/ui/Button';

// Глобальные переменные для интеграции с бекендом
let SERVICES_LIST = [];
let SERVICES_CURRENT_PAGE = 1;

// Моковые данные услуг
const MOCK_SERVICES = [
  {
    id: 1,
    title: 'РАЗРАБОТКА ДИЗАЙНА ПОД КЛЮЧ',
    price: 'ОТ 100$',
  },
  {
    id: 2,
    title: 'ЛЕНДИНГ',
    price: 'ОТ 100$',
  },
  {
    id: 3,
    title: 'ПРИ-ЛЕНДИНГ',
    price: 'ОТ 100$',
  },
  {
    id: 4,
    title: 'МНОГОСТРАНИЧНЫЙ САЙТ',
    price: 'ОТ 100$',
  },
  {
    id: 5,
    title: 'БАННЕРА',
    price: 'ОТ 100$',
  },
  {
    id: 6,
    title: 'ВИДЕО МОНТАЖ',
    price: 'ОТ 150$',
  },
  {
    id: 7,
    title: 'МИНИ-АППКА',
    price: 'ОТ 100$',
  }
];

// Константы для пагинации
const SERVICES_PER_PAGE = 5;

export default function ServicesScreen() {
  const [services, setServices] = useState(MOCK_SERVICES);
  const [currentPage, setCurrentPage] = useState(1);

  const handleBack = () => {
    router.back();
  };

  const handleAddService = () => {
    // Обновляем глобальную переменную
    SERVICES_LIST = services;
    
    // TODO: Здесь будет логика добавления новой услуги
    // Данные доступны в переменной: SERVICES_LIST
    
    console.log('Добавить услугу');
  };

  const handleDeleteService = (serviceId) => {
    setServices(prevServices => prevServices.filter(s => s.id !== serviceId));
    // Обновляем глобальную переменную
    SERVICES_LIST = services.filter(s => s.id !== serviceId);
  };

  const handlePagePress = (page) => {
    setCurrentPage(page);
    SERVICES_CURRENT_PAGE = page;
  };

  // Динамическое разбиение на страницы
  const getServicesForPage = (page) => {
    const startIndex = (page - 1) * SERVICES_PER_PAGE;
    const endIndex = startIndex + SERVICES_PER_PAGE;
    return services.slice(startIndex, endIndex);
  };

  // Вычисляем общее количество страниц
  const getTotalPages = () => {
    return Math.ceil(services.length / SERVICES_PER_PAGE);
  };

  // Генерируем массив номеров страниц
  const getPageNumbers = () => {
    const totalPages = getTotalPages();
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  const renderServiceItem = (service) => (
    <View key={service.id} style={styles.serviceItem}>
      <View style={styles.serviceContent}>
        <Text style={styles.serviceTitle}>{service.title}</Text>
        <View style={styles.serviceActions}>
          <View style={styles.servicePriceContainer}>
            <Text style={styles.servicePrice}>{service.price}</Text>
          </View>
          <TouchableOpacity 
            style={styles.deleteButton}
            onPress={() => handleDeleteService(service.id)}
          >
            <Minus size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <ImageBackground 
      source={{ uri: 'https://alfacta.online/100k/main-bg.png' }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Services Title */}
          <View style={styles.servicesTitleContainer}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <ChevronLeft size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.servicesTitle}>УСЛУГИ</Text>
          </View>

          {/* Services List */}
          <View style={styles.servicesContainer}>
            {getServicesForPage(currentPage).map((service) => renderServiceItem(service))}
          </View>

          {/* Pagination */}
          <View style={styles.paginationContainer}>
            {getPageNumbers().map((pageNumber) => (
              <TouchableOpacity 
                key={pageNumber}
                style={[
                  styles.pageButton,
                  currentPage === pageNumber && styles.activePageButton
                ]}
                onPress={() => handlePagePress(pageNumber)}
              >
                <Text style={[
                  styles.pageButtonText,
                  currentPage === pageNumber && styles.activePageButtonText
                ]}>
                  {pageNumber}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.spacer} />
        </ScrollView>
        
        {/* Add Service Button - Fixed at bottom */}
        <View style={styles.addServiceButtonContainer}>
          <Button 
            title="ДОБАВИТЬ УСЛУГУ" 
            onPress={handleAddService}
            variant="primary"
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#070707',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollView: {
    flex: 1,
  },
  servicesTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
    marginBottom: 40,
    paddingHorizontal: 24,
  },
  backButton: {
    position: 'absolute',
    left: 24,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  servicesTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Codec-Pro-Bold',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 15,
    backgroundColor: 'transparent',
  },
  servicesContainer: {
    paddingHorizontal: 24,
    gap: 12,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#131313',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  serviceContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  serviceTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'Codec-Pro-Bold',
    flex: 1,
  },
  serviceActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  servicePriceContainer: {
    backgroundColor: '#0066FF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  servicePrice: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Codec-Pro-Bold',
  },
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FF4444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreButton: {
    paddingLeft: 12,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginTop: 30,
    marginBottom: 20,
  },
  pageButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activePageButton: {
    backgroundColor: '#0066FF',
  },
  pageButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Codec-Pro-Bold',
  },
  activePageButtonText: {
    color: '#FFFFFF',
  },
  addServiceButtonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  spacer: {
    flex: 1,
  },
});