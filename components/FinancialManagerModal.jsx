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
import { router } from 'expo-router';
import Notification from '@/components/ui/Notification';
import { useNotification } from '@/hooks/useNotification';
import Notification from '@/components/ui/Notification';
import { useNotification } from '@/hooks/useNotification';

const { width: screenWidth } = Dimensions.get('window');

// Глобальные переменные для интеграции с бекендом
let FINANCIAL_MANAGER_REQUEST_SENT = false;

export default function FinancialManagerModal({ visible, onClose }) {
  const { notification, showSuccess, hideNotification } = useNotification();

  const { notification, showSuccess, hideNotification } = useNotification();

  const handleCreateRequest = () => {
    // Обновляем глобальную переменную
    FINANCIAL_MANAGER_REQUEST_SENT = true;
    
    // TODO: Здесь будет логика отправки заявки на связь с финансовым менеджером
    // Данные доступны в переменной: FINANCIAL_MANAGER_REQUEST_SENT
    
    // Показываем успешный нотификейшн
    showSuccess('Заявка создана!', 'Финансовый менеджер свяжется с вами в течение 12 часов');
    
    // Показываем успешный нотификейшн
    showSuccess('Заявка создана!', 'Финансовый менеджер свяжется с вами в течение 12 часов');
    
    console.log('Заявка на связь с финансовым менеджером отправлена');
    // Закрываем все модалки полностью
    onClose();
  };

  const handleCancel = () => {
    // Просто закрываем модалку финансового менеджера, возвращаемся к банковской
    onClose();
  };

  return (
    <>
      <Notification
        visible={notification.visible}
        type={notification.type}
        title={notification.title}
        message={notification.message}
        onHide={hideNotification}
      />
    <>
      <Notification
        visible={notification.visible}
        type={notification.type}
        title={notification.title}
        message={notification.message}
        onHide={hideNotification}
      />
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
              С ВАМИ СВЯЖЕТСЯ ФИН. МЕНЕДЖЕР
            </Text>
            
            {/* Description */}
            <Text style={styles.modalDescription}>
              В течение 12 часов с вами свяжется наш финансовый менеджер и 
              отправит реквизиты и Invoice для оплаты. Пожалуйста, оставайтесь на 
              связи до завершения оформления. Если готовы — нажмите кнопку 
              ниже, чтобы создать заявку.
            </Text>
            
            {/* Create Request Button */}
            <TouchableOpacity 
              style={styles.createRequestButton}
              onPress={handleCreateRequest}
            >
              <LinearGradient
                colors={['#0066FF', '#0088FF']}
                style={styles.createRequestGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.createRequestText}>СОЗДАТЬ ЗАЯВКУ</Text>
              </LinearGradient>
            </TouchableOpacity>
            
            {/* Cancel Button */}
            <TouchableOpacity 
              style={styles.cancelButton}
              onPress={handleCancel}
            >
              <Text style={styles.cancelText}>ОТМЕНИТЬ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </>
    </>
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
    marginBottom: 24,
    lineHeight: 24,
  },
  modalDescription: {
    color: '#CCCCCC',
    fontSize: 14,
    fontFamily: 'Codec-Pro-News',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 32,
  },
  createRequestButton: {
    width: '100%',
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 16,
  },
  createRequestGradient: {
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createRequestText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Codec-Pro-Bold',
  },
  cancelButton: {
    width: '100%',
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