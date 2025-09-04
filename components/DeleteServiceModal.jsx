import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Modal,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

const { width: screenWidth } = Dimensions.get('window');

// Глобальные переменные для интеграции с бекендом
let DELETE_SERVICE_ID = '';
let DELETE_SERVICE_CONFIRMED = false;

export default function DeleteServiceModal({ visible, onClose, onConfirm, serviceName }) {

  const handleConfirmDelete = () => {
    // Обновляем глобальные переменные
    DELETE_SERVICE_CONFIRMED = true;
    
    // TODO: Здесь будет логика удаления услуги на сервере
    // Данные доступны в переменных: DELETE_SERVICE_ID, DELETE_SERVICE_CONFIRMED
    
    console.log('Услуга удалена:', DELETE_SERVICE_ID);
    
    // Вызываем callback для удаления из списка
    if (onConfirm) {
      onConfirm();
    }
    
    // Закрываем модалку
    onClose();
  };

  const handleCancel = () => {
    // Обновляем глобальные переменные
    DELETE_SERVICE_CONFIRMED = false;
    
    // Закрываем модалку
    onClose();
  };

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
              УДАЛЕНИЕ УСЛУГИ
            </Text>
            
            {/* Description */}
            <Text style={styles.modalDescription}>
              Вы действительно хотите удалить данную услугу?
            </Text>
            
            {/* Service Name */}
            {serviceName && (
              <View style={styles.serviceNameContainer}>
                <Text style={styles.serviceName}>"{serviceName}"</Text>
              </View>
            )}
            
            {/* Buttons */}
            <View style={styles.buttonsContainer}>
              {/* Yes Button */}
              <TouchableOpacity 
                style={styles.confirmButton}
                onPress={handleConfirmDelete}
              >
                <LinearGradient
                  colors={['#EF4444', '#DC2626']}
                  style={styles.confirmButtonGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text style={styles.confirmButtonText}>ДА</Text>
                </LinearGradient>
              </TouchableOpacity>
              
              {/* No Button */}
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={handleCancel}
              >
                <Text style={styles.cancelText}>НЕТ</Text>
              </TouchableOpacity>
            </View>
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
    padding: 32,
    width: '100%',
    maxWidth: 400,
    borderWidth: 1,
    borderColor: '#333333',
    alignItems: 'center',
  },
  modalTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  modalDescription: {
    color: '#CCCCCC',
    fontSize: 16,
    fontFamily: 'Codec-Pro-News',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  serviceNameContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#333333',
  },
  serviceName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Codec-Pro-Bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
  },
  confirmButton: {
    flex: 1,
    borderRadius: 25,
    overflow: 'hidden',
  },
  confirmButtonGradient: {
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Codec-Pro-Bold',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 25,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Codec-Pro-Bold',
  },
});