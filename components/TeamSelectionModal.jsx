import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Modal,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Star, Heart } from 'lucide-react-native';

const { width: screenWidth } = Dimensions.get('window');

// Глобальные переменные для интеграции с бекендом
let SELECTED_TEAM_MEMBERS = [];
let TEAM_CONTRACTS_SIGNED = [];
let TEAM_HIRED_MEMBERS = [];

// Моковые данные подобранной команды
const MOCK_TEAM = [
  {
    id: 1,
    name: 'Артем Асташ',
    specialization: 'Дизайнер',
    rating: 5.0,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png',
    isFavorite: false
  },
  {
    id: 2,
    name: 'Артем Асташ',
    specialization: 'Монтажер',
    rating: 5.0,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png',
    isFavorite: false
  },
  {
    id: 3,
    name: 'Артем Асташ',
    specialization: 'Сценарист',
    rating: 5.0,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png',
    isFavorite: false
  },
  {
    id: 4,
    name: 'Артем Асташ',
    specialization: 'Съемщик',
    rating: 5.0,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png',
    isFavorite: false
  },
  {
    id: 5,
    name: 'Артем Асташ',
    specialization: 'SMM',
    rating: 5.0,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png',
    isFavorite: false
  },
  {
    id: 6,
    name: 'Артем Асташ',
    specialization: 'Таргетолог',
    rating: 5.0,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png',
    isFavorite: false
  }
];

export default function TeamSelectionModal({ visible, onClose, onSuccess, projectDescription }) {
  const [teamMembers, setTeamMembers] = useState(MOCK_TEAM);

  const handleContract = (memberId) => {
    // Обновляем глобальные переменные
    if (!TEAM_CONTRACTS_SIGNED.includes(memberId)) {
      TEAM_CONTRACTS_SIGNED.push(memberId);
    }
    
    // TODO: Здесь будет логика заключения договора
    // Данные доступны в переменной: TEAM_CONTRACTS_SIGNED
    
    console.log(`Договор с участником ${memberId}`);
  };

  const handleHire = (memberId) => {
    // Обновляем глобальные переменные
    if (!TEAM_HIRED_MEMBERS.includes(memberId)) {
      TEAM_HIRED_MEMBERS.push(memberId);
    }
    
    // TODO: Здесь будет логика найма участника
    // Данные доступны в переменной: TEAM_HIRED_MEMBERS
    
    console.log(`Нанят участник ${memberId}`);
  };

  const handleFavoriteToggle = (memberId) => {
    setTeamMembers(prevMembers => 
      prevMembers.map(member => 
        member.id === memberId 
          ? { ...member, isFavorite: !member.isFavorite }
          : member
      )
    );
  };

  const handleClose = () => {
    // Обновляем глобальные переменные
    SELECTED_TEAM_MEMBERS = teamMembers;
    
    // TODO: Здесь будет логика сохранения выбранной команды
    // Данные доступны в переменных:
    // - SELECTED_TEAM_MEMBERS
    // - TEAM_CONTRACTS_SIGNED
    // - TEAM_HIRED_MEMBERS
    
    if (onSuccess) {
      onSuccess('Команда подобрана!', 'ИИ успешно подобрал команду для вашего проекта');
    }
    
    // Небольшая задержка для корректного закрытия на мобильных
    setTimeout(() => {
      onClose();
    }, 100);
  };

  const renderTeamMember = (member) => (
    <View key={member.id} style={styles.memberCard}>
      <Image source={{ uri: member.avatar }} style={styles.memberAvatar} />
      
      {/* Rating */}
      <View style={styles.memberRating}>
        <Star size={12} color="#FFD700" fill="#FFD700" />
        <Text style={styles.ratingText}>{member.rating}</Text>
      </View>

      {/* Member Info - positioned at bottom */}
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.9)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.memberInfoOverlay}
      >
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>{member.name}</Text>
          
          <View style={styles.memberActions}>
            <View style={styles.memberSpecialization}>
              <Text style={styles.specializationText}>{member.specialization}</Text>
            </View>
            
            <TouchableOpacity 
              style={styles.hireButton}
              onPress={() => handleHire(member.id)}
            >
              <Text style={styles.hireButtonText}>Нанять</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );

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
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.handleBar} />
          </View>

          {/* Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>ВАША КОМАНДА</Text>
          </View>

          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Team Grid */}
            <View style={styles.teamGrid}>
              <View style={styles.teamRow}>
                {teamMembers.slice(0, 2).map(member => renderTeamMember(member))}
              </View>
              <View style={styles.teamRow}>
                {teamMembers.slice(2, 4).map(member => renderTeamMember(member))}
              </View>
              <View style={styles.teamRow}>
                {teamMembers.slice(4, 6).map(member => renderTeamMember(member))}
              </View>
            </View>

            <View style={styles.bottomSpacing} />
          </ScrollView>

          {/* Close Button - Fixed at bottom */}
          <View style={styles.closeButtonContainer}>
            <LinearGradient
              colors={['#4A9EFF', '#0066FF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.closeButtonGradient}
            >
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={handleClose}
              >
                <Text style={styles.closeButtonText}>ЗАКРЫТЬ</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </ImageBackground>
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
    marginBottom: 40,
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
  teamGrid: {
    gap: 16,
  },
  teamRow: {
    flexDirection: 'row',
    gap: 16,
  },
  memberCard: {
    flex: 1,
    height: 280,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
    position: 'relative',
  },
  memberAvatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  memberRating: {
    position: 'absolute',
    top: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 4,
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Codec-Pro-Bold',
    marginTop: 4,
  },
  memberInfoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 60,
  },
  memberInfo: {
    padding: 16,
  },
  memberName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
    marginBottom: 8,
  },
  memberSpecialization: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 8,
    flex: 1,
    alignItems: 'center',
    marginRight: 8,
  },
  specializationText: {
    color: '#000000',
    fontSize: 11,
    fontFamily: 'Codec-Pro-Bold',
  },
  memberActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
  },
  hireButton: {
    flex: 1,
    backgroundColor: '#0066FF',
    borderRadius: 12,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hireButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: 'Codec-Pro-Bold',
  },
  closeButtonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  closeButtonGradient: {
    borderRadius: 25,
    padding: 2,
  },
  closeButton: {
    backgroundColor: '#0066FF',
    borderRadius: 25,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
  },
  bottomSpacing: {
    height: 40,
  },
});