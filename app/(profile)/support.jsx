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
import { ChevronRight } from 'lucide-react-native';
import Button from '@/components/ui/Button';

// Глобальные переменные для интеграции с бекендом
let SUPPORT_FAQ_OPENED = false;
let SUPPORT_CONTACT_REQUESTED = false;

export default function SupportScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleFAQPress = () => {
    // Обновляем глобальную переменную
    SUPPORT_FAQ_OPENED = true;
    
    // TODO: Здесь будет логика открытия FAQ
    // Данные доступны в переменной: SUPPORT_FAQ_OPENED
    
    console.log('Открыть FAQ');
  };

  const handleContactSupport = () => {
    // Обновляем глобальную переменную
    SUPPORT_CONTACT_REQUESTED = true;
    
    // TODO: Здесь будет логика связи с техподдержкой
    // Данные доступны в переменной: SUPPORT_CONTACT_REQUESTED
    
    console.log('Связаться с техподдержкой');
  };

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
              <Text style={styles.title}>ПРОФИЛЬ</Text>
            </View>
          </View>

          {/* Support Title */}
          <View style={styles.supportTitleContainer}>
            <Text style={styles.supportTitle}>ТЕХ-ПОДДЕРЖКА</Text>
          </View>

          {/* FAQ Section */}
          <View style={styles.faqSection}>
            <Text style={styles.faqLabel}>FAQ</Text>
            
            <TouchableOpacity 
              style={styles.faqButton}
              onPress={handleFAQPress}
            >
              <Text style={styles.faqButtonText}>Часто задаваемые вопросы</Text>
              <ChevronRight size={20} color="#666666" />
            </TouchableOpacity>
          </View>

          {/* Contact Section */}
          <View style={styles.contactSection}>
            <Text style={styles.contactLabel}>Связь с тех-поддержкой</Text>
            
            <TouchableOpacity 
              style={styles.contactButton}
              onPress={handleContactSupport}
            >
              <Text style={styles.contactButtonText}>Написать</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.spacer} />

          {/* Close Button */}
          <View style={styles.closeButtonContainer}>
            <Button 
              title="ЗАКРЫТЬ" 
              onPress={handleBack}
              variant="primary"
            />
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
    marginBottom: 40,
  },
  titleContainer: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 12,
    backgroundColor: '#000000',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Benzin-Bold',
    letterSpacing: 2,
  },
  supportTitleContainer: {
    alignItems: 'center',
    marginBottom: 60,
    paddingHorizontal: 24,
  },
  supportTitle: {
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
  faqSection: {
    paddingHorizontal: 24,
    marginBottom: 40,
  },
  faqLabel: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
    marginBottom: 15,
  },
  faqButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#131313',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  faqButtonText: {
    color: '#666666',
    fontSize: 16,
    fontFamily: 'Codec-Pro-News',
    flex: 1,
  },
  contactSection: {
    paddingHorizontal: 24,
    marginBottom: 40,
  },
  contactLabel: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
    marginBottom: 15,
  },
  contactButton: {
    backgroundColor: '#0066FF',
    borderRadius: 25,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
  },
  spacer: {
    flex: 1,
    minHeight: 200,
  },
  closeButtonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  bottomSpacing: {
    height: 20,
  },
});