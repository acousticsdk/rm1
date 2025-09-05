import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Modal,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TeamSelectionModal from './TeamSelectionModal';

// Глобальные переменные для интеграции с бекендом
let AI_TEAM_PROJECT_DESCRIPTION = '';
let AI_TEAM_REQUEST_SENT = false;

export default function AITeamBuildingModal({ visible, onClose, onSuccess }) {
  const [projectDescription, setProjectDescription] = useState('');
  const [teamSelectionVisible, setTeamSelectionVisible] = useState(false);

  const handleConfirm = () => {
    if (!projectDescription.trim()) {
      return;
    }

    // Обновляем глобальные переменные
    AI_TEAM_PROJECT_DESCRIPTION = projectDescription;
    AI_TEAM_REQUEST_SENT = true;
    
    // TODO: Здесь будет логика отправки запроса к ИИ для подбора команды
    // Данные доступны в переменных: AI_TEAM_PROJECT_DESCRIPTION, AI_TEAM_REQUEST_SENT
    
    console.log('ИИ подбирает команду для проекта:', projectDescription);
    
    // Показываем экран с подобранной командой
    setTeamSelectionVisible(true);
  };

  const handleTeamSelectionClose = () => {
    setTeamSelectionVisible(false);
    // Небольшая задержка для корректного закрытия на мобильных
    setTimeout(() => {
      onClose();
    }, 100);
  };

  const handleTeamSelectionSuccess = (title, message) => {
    setTeamSelectionVisible(false);
    // Небольшая задержка для корректного закрытия на мобильных
    setTimeout(() => {
      onClose();
      if (onSuccess) {
        onSuccess(title, message);
      }
    }, 100);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <ImageBackground 
        source={{ uri: 'https://alfacta.online/100k/main-bg.png' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <TouchableWithoutFeedback
          onPress={(e) => {
            if (Platform.OS === 'web') {
              if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                Keyboard.dismiss();
              }
            } else {
              Keyboard.dismiss();
            }
          }}
          accessible={false}
        >
          <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.handleBar} />
            </View>

            {/* Title */}
            <View style={styles.titleContainer}>
              <Text style={styles.title}>ИИ СБОР КОМАНДЫ</Text>
            </View>

            <View style={styles.content}>
              {/* Description Section */}
              <View style={styles.descriptionSection}>
                <Text style={styles.descriptionLabel}>ОПИШИТЕ ВАШ ЗАПРОС</Text>
                
                <TextInput
                  style={styles.projectInput}
                  value={projectDescription}
                  onChangeText={setProjectDescription}
                  placeholder="ПРОЕКТ"
                  placeholderTextColor="#666666"
                  multiline
                  numberOfLines={6}
                  textAlignVertical="top"
                  autoFocus={false}
                  blurOnSubmit={false}
                />
              </View>
            </View>

            {/* Confirm Button - Fixed at bottom */}
            <View style={styles.confirmButtonContainer}>
              <LinearGradient
                colors={['#4A9EFF', '#0066FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.confirmButtonGradient}
              >
                <TouchableOpacity 
                  style={styles.confirmButton}
                  onPress={handleConfirm}
                >
                  <Text style={styles.confirmButtonText}>ПОДТВЕРДИТЬ</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
      
      {/* Team Selection Modal */}
      <TeamSelectionModal
        visible={teamSelectionVisible}
        onClose={handleTeamSelectionClose}
        onSuccess={handleTeamSelectionSuccess}
        projectDescription={projectDescription}
      />
    </Modal>
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
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  handleBar: {
    width: 40,
    height: 4,
    backgroundColor: '#666666',
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Codec-Pro-Bold',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 15,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  descriptionSection: {
    flex: 1,
  },
  descriptionLabel: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  projectInput: {
    borderWidth: 1,
    borderColor: '#444444',
    borderRadius: 20,
    backgroundColor: '#131313',
    paddingHorizontal: 25,
    paddingVertical: 20,
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Codec-Pro-News',
    height: 200,
    textAlignVertical: 'top',
  },
  confirmButtonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  confirmButtonGradient: {
    borderRadius: 25,
    padding: 2,
  },
  confirmButton: {
    backgroundColor: '#0066FF',
    borderRadius: 25,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
  },
});