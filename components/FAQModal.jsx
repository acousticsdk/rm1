import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Modal,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

const { width: screenWidth } = Dimensions.get('window');

// Глобальные переменные для интеграции с бекендом
let FAQ_OPENED_QUESTIONS = [];

// Моковые данные FAQ
const FAQ_DATA = [
  {
    id: 1,
    question: 'Можно ли вернуть деньги за оплаченный тариф?',
    answer: 'Деньги можно вернуть только в течение 14 дней.',
    isExpanded: false
  },
  {
    id: 2,
    question: 'Сколько хуев надо чтобы стать шлюхой?',
    answer: 'Бесконечность не предел братанчик',
    isExpanded: false
  },
  {
    id: 3,
    question: 'Сколько хуев надо чтобы стать шлюхой?',
    answer: 'Бесконечность не предел братанчик',
    isExpanded: false
  },
  {
    id: 4,
    question: 'Сколько хуев надо чтобы стать шлюхой?',
    answer: 'Бесконечность не предел братанчик',
    isExpanded: false
  },
  {
    id: 5,
    question: 'Сколько хуев надо чтобы стать шлюхой?',
    answer: 'Бесконечность не предел братанчик',
    isExpanded: false
  }
];

export default function FAQModal({ visible, onClose }) {
  const [faqItems, setFaqItems] = useState(FAQ_DATA);

  const handleQuestionPress = (questionId) => {
    setFaqItems(prevItems => 
      prevItems.map(item => 
        item.id === questionId 
          ? { ...item, isExpanded: !item.isExpanded }
          : item
      )
    );

    // Обновляем глобальную переменную
    const openedQuestions = faqItems
      .filter(item => item.id === questionId || item.isExpanded)
      .map(item => item.id);
    FAQ_OPENED_QUESTIONS = openedQuestions;
    
    console.log(`FAQ вопрос ${questionId} ${faqItems.find(item => item.id === questionId)?.isExpanded ? 'закрыт' : 'открыт'}`);
  };

  const handleClose = () => {
    // TODO: Здесь будет логика сохранения данных о просмотре FAQ
    // Данные доступны в переменной: FAQ_OPENED_QUESTIONS
    
    onClose();
  };

  const renderFAQItem = (item) => (
    <TouchableOpacity 
      key={item.id}
      style={styles.faqItem}
      onPress={() => handleQuestionPress(item.id)}
    >
      <Text style={styles.faqQuestion}>{item.question}</Text>
      {item.isExpanded && (
        <Text style={styles.faqAnswer}>{item.answer}</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <BlurView intensity={20} style={styles.blurOverlay}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Title */}
            <Text style={styles.modalTitle}>FAQ</Text>
            
            {/* FAQ List */}
            <ScrollView 
              style={styles.faqList}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.faqContent}
            >
              {faqItems.map((item) => renderFAQItem(item))}
            </ScrollView>
            
            {/* Close Button */}
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={handleClose}
            >
              <LinearGradient
                colors={['#0066FF', '#0088FF']}
                style={styles.closeButtonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.closeButtonText}>ЗАКРЫТЬ</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  blurOverlay: {
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#0F0F0F',
    borderRadius: 24,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    maxHeight: '80%',
    borderWidth: 1,
    borderColor: '#333333',
  },
  modalTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Codec-Pro-Bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  faqList: {
    maxHeight: 400,
    marginBottom: 24,
  },
  faqContent: {
    paddingBottom: 10,
  },
  faqItem: {
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    padding: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333333',
  },
  faqQuestion: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Codec-Pro-Bold',
    lineHeight: 22,
  },
  faqAnswer: {
    color: '#666666',
    fontSize: 14,
    fontFamily: 'Codec-Pro-News',
    marginTop: 12,
    lineHeight: 20,
  },
  closeButton: {
    width: '100%',
    borderRadius: 25,
    overflow: 'hidden',
  },
  closeButtonGradient: {
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Codec-Pro-Bold',
  },
});