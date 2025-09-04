import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Modal,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

const { width: screenWidth } = Dimensions.get('window');

// Глобальные переменные для интеграции с бекендом
let SPECIALIST_OPERATIONS = [];
let SELECTED_SPECIALIST_ID = '';

// Моковые данные операций по специалисту
const MOCK_OPERATIONS = [
  {
    id: 1,
    title: 'Реферальная программа',
    time: 'Сегодня, 14:30',
    amount: -350,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 2,
    title: 'Реферальная программа',
    time: 'Сегодня, 14:30',
    amount: -350,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 3,
    title: 'Реферальная программа',
    time: 'Сегодня, 14:30',
    amount: -350,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 4,
    title: 'Реферальная программа',
    time: 'Сегодня, 14:30',
    amount: -350,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 5,
    title: 'Реферальная программа',
    time: 'Сегодня, 14:30',
    amount: +350,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

export default function SpecialistOperationsModal({ visible, onClose, specialistName = 'Специалист' }) {

  const handleClose = () => {
    // Обновляем глобальные переменные
    SPECIALIST_OPERATIONS = MOCK_OPERATIONS;
    
    // TODO: Здесь будет логика сохранения данных о просмотре операций
    // Данные доступны в переменных: SPECIALIST_OPERATIONS, SELECTED_SPECIALIST_ID
    
    onClose();
  };

  const renderOperation = (operation) => (
    <View key={operation.id} style={styles.operationItem}>
      <View style={styles.operationLeft}>
        <Image source={{ uri: operation.avatar }} style={styles.operationAvatar} />
        <View style={styles.operationInfo}>
          <Text style={styles.operationTitle}>{operation.title}</Text>
          <Text style={styles.operationTime}>{operation.time}</Text>
        </View>
      </View>
      <Text style={[
        styles.operationAmount,
        operation.amount > 0 ? styles.positiveAmount : styles.negativeAmount
      ]}>
        {operation.amount > 0 ? '+' : ''}{operation.amount}$
      </Text>
    </View>
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
            <Text style={styles.modalTitle}>
              ПОСЛЕДНИЕ ОПЕРАЦИИ{'\n'}ПО СПЕЦИАЛИСТУ
            </Text>
            
            {/* Operations List */}
            <ScrollView 
              style={styles.operationsList}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.operationsContent}
            >
              {MOCK_OPERATIONS.map((operation) => renderOperation(operation))}
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
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  operationsList: {
    maxHeight: 400,
    marginBottom: 24,
  },
  operationsContent: {
    paddingBottom: 10,
  },
  operationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333333',
  },
  operationLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  operationAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  operationInfo: {
    flex: 1,
  },
  operationTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Codec-Pro-Bold',
    marginBottom: 4,
  },
  operationTime: {
    color: '#666666',
    fontSize: 14,
    fontFamily: 'Codec-Pro-News',
  },
  operationAmount: {
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
  },
  negativeAmount: {
    color: '#EF4444',
  },
  positiveAmount: {
    color: '#10B981',
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