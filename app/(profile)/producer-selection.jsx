import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native';
import { router } from 'expo-router';
import { Star } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '@/components/ui/Button';

const { width: screenWidth } = Dimensions.get('window');

// Глобальные переменные для интеграции с бекендом
let SELECTED_PRODUCER_ID = '';
let SELECTED_PRODUCER_TYPE = 'standard'; // 'standard' | 'premium'
let PRODUCER_SELECTION_ACTION = ''; // 'select' | 'contact'

// Моковые данные продюсеров
const MOCK_PRODUCERS = [
  {
    id: 1,
    name: 'МИХАИЛ ТАДЗИРОС',
    successfulLaunches: '10+ успешных запусков',
    price: '$1,000/МЕС',
    priceSubtitle: 'Ежемесячная оплата',
    rating: 4.9,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    type: 'standard'
  },
  {
    id: 2,
    name: 'МИХАИЛ ТАДЗИРОС',
    successfulLaunches: '10+ успешных запусков',
    price: '$1,000/МЕС',
    priceSubtitle: 'Ежемесячная оплата',
    rating: 4.9,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    type: 'standard'
  },
  {
    id: 3,
    name: 'МИХАИЛ ТАДЗИРОС',
    successfulLaunches: '10+ успешных запусков',
    price: '$1,000/МЕС',
    priceSubtitle: 'Ежемесячная оплата',
    rating: 4.9,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    type: 'standard'
  }
];

export default function ProducerSelectionScreen() {
  const [selectedProducerType, setSelectedProducerType] = useState('standard');
  const [producers] = useState(MOCK_PRODUCERS);

  const handleBack = () => {
    router.back();
  };

  const handleProducerTypeSelect = (type) => {
    setSelectedProducerType(type);
    SELECTED_PRODUCER_TYPE = type;
  };

  const handleSelectProducer = (producerId) => {
    // Обновляем глобальные переменные
    SELECTED_PRODUCER_ID = producerId;
    PRODUCER_SELECTION_ACTION = 'select';
    
    // TODO: Здесь будет логика выбора продюсера
    // Данные доступны в переменных:
    // - SELECTED_PRODUCER_ID
    // - SELECTED_PRODUCER_TYPE
    // - PRODUCER_SELECTION_ACTION
    
    console.log(`Выбран продюсер ${producerId} типа ${selectedProducerType}`);
    router.back();
  };

  const handleContactProducer = (producerId) => {
    // Обновляем глобальные переменные
    SELECTED_PRODUCER_ID = producerId;
    PRODUCER_SELECTION_ACTION = 'contact';
    
    // TODO: Здесь будет логика связи с продюсером
    // Данные доступны в переменных:
    // - SELECTED_PRODUCER_ID
    // - SELECTED_PRODUCER_TYPE
    // - PRODUCER_SELECTION_ACTION
    
    console.log(`Связаться с продюсером ${producerId}`);
    // Можно перейти в чат или открыть форму связи
    router.push(`/(chat)/conversation/${producerId}`);
  };

  const renderProducerCard = (producer) => (
    <View key={producer.id} style={styles.producerCard}>
      {/* Producer Info */}
      <View style={styles.producerHeader}>
        <View style={styles.producerAvatar}>
          <Image source={{ uri: producer.avatar }} style={styles.producerAvatarImage} />
        </View>
        
        <View style={styles.producerInfo}>
          <Text style={styles.producerName}>{producer.name}</Text>
          <Text style={styles.producerLaunches}>{producer.successfulLaunches}</Text>
        </View>
        
        <View style={styles.producerRating}>
          <Star size={20} color="#0066FF" fill="#0066FF" />
          <Text style={styles.ratingText}>{producer.rating}</Text>
        </View>
      </View>

      {/* Price Info */}
      <View style={styles.priceSection}>
        <Text style={styles.price}>{producer.price}</Text>
        <Text style={styles.priceSubtitle}>{producer.priceSubtitle}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={styles.selectButton}
          onPress={() => handleSelectProducer(producer.id)}
        >
          <Text style={styles.selectButtonText}>ВЫБРАТЬ</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.contactButton}
          onPress={() => handleContactProducer(producer.id)}
        >
          <LinearGradient
            colors={['#0066FF', '#0088FF']}
            style={styles.contactButtonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.contactButtonText}>НАПИСАТЬ</Text>
          </LinearGradient>
        </TouchableOpacity>
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
          {/* Header */}
          <View style={styles.titleWrapper}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>ВЫБЕРИТЕ ПРОДЮСЕРА</Text>
            </View>
          </View>

          {/* Subtitle */}
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Профессиональное управление проектом</Text>
          </View>

          {/* Producer Type Selector */}
          <View style={styles.typeSelectorContainer}>
            <View style={styles.typeSelector}>
              <TouchableOpacity 
                style={[
                  styles.typeButton,
                  styles.typeButtonLeft,
                  selectedProducerType === 'standard' && styles.typeButtonActive
                ]}
                onPress={() => handleProducerTypeSelect('standard')}
              >
                <Text style={[
                  styles.typeButtonText,
                  selectedProducerType === 'standard' && styles.typeButtonTextActive
                ]}>
                  STANDART
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[
                  styles.typeButton,
                  styles.typeButtonRight,
                  selectedProducerType === 'premium' && styles.typeButtonActive
                ]}
                onPress={() => handleProducerTypeSelect('premium')}
              >
                <Text style={[
                  styles.typeButtonText,
                  selectedProducerType === 'premium' && styles.typeButtonTextActive
                ]}>
                  PREMIUM
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Producers List */}
          <View style={styles.producersContainer}>
            {producers.map((producer) => renderProducerCard(producer))}
          </View>

          <View style={styles.bottomSpacing} />
        </ScrollView>
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
  titleWrapper: {
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 20,
  },
  titleContainer: {
    paddingHorizontal: 40,
    paddingVertical: 15,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Codec-Pro-Bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    alignItems: 'center',
    marginBottom: 40,
    paddingHorizontal: 24,
  },
  subtitle: {
    color: '#787878',
    fontSize: 16,
    fontFamily: 'Codec-Pro-News',
    textAlign: 'center',
  },
  typeSelectorContainer: {
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  typeSelector: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    borderRadius: 30,
    padding: 4,
    borderWidth: 1,
    borderColor: '#333333',
  },
  typeButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 26,
  },
  typeButtonLeft: {
    marginRight: 2,
  },
  typeButtonRight: {
    marginLeft: 2,
  },
  typeButtonActive: {
    backgroundColor: '#0066FF',
  },
  typeButtonText: {
    color: '#666666',
    fontSize: 16,
    fontFamily: 'Codec-Pro-Bold',
  },
  typeButtonTextActive: {
    color: '#FFFFFF',
  },
  producersContainer: {
    paddingHorizontal: 24,
    gap: 20,
  },
  producerCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 25,
    padding: 24,
    borderWidth: 1,
    borderColor: '#333333',
  },
  producerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  producerAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    marginRight: 16,
  },
  producerAvatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  producerInfo: {
    flex: 1,
  },
  producerName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
    marginBottom: 4,
  },
  producerLaunches: {
    color: '#787878',
    fontSize: 14,
    fontFamily: 'Codec-Pro-News',
  },
  producerRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
  },
  priceSection: {
    marginBottom: 20,
  },
  price: {
    color: '#FFFFFF',
    fontSize: 32,
    fontFamily: 'Codec-Pro-Bold',
    marginBottom: 4,
  },
  priceSubtitle: {
    color: '#787878',
    fontSize: 14,
    fontFamily: 'Codec-Pro-News',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  selectButton: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Codec-Pro-Bold',
  },
  contactButton: {
    flex: 1,
    borderRadius: 25,
    overflow: 'hidden',
  },
  contactButtonGradient: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Codec-Pro-Bold',
  },
  bottomSpacing: {
    height: 40,
  },
});