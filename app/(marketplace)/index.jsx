import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  Dimensions,
  Platform
} from 'react-native';
import { router } from 'expo-router';
import { Search, Heart, Calendar, Video, Palette, Play, Zap, ChevronDown, ChevronUp, Star, MessageCircle, Camera, Code } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DragScrollView from '@/components/ui/DragScrollView';
import { useRef } from 'react';
import { ScenarioIcon, MontageIcon, DesignIcon, ShootingIcon, SmmIcon, AdsIcon, ForShootingIcon, ItIcon } from '@/components/ui/Icons';

const { width: screenWidth } = Dimensions.get('window');

// Глобальные переменные для интеграции с бекендом
let MARKETPLACE_SEARCH_QUERY = '';
let MARKETPLACE_SELECTED_CATEGORY = '';
let MARKETPLACE_ACTIVE_TAB = 'top100k';

// Моковые данные пользователей
const MOCK_USERS = [
  {
    id: 1,
    name: 'Артем Асташ',
    specialization: 'Дизайнер',
    category: 'design',
    rating: 4.9,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 2,
    name: 'Мария Козлова',
    specialization: 'Монтажер',
    category: 'montage',
    rating: 4.9,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 3,
    name: 'Дмитрий Петров',
    specialization: 'Сценарист',
    category: 'scenario',
    rating: 4.9,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 4,
    name: 'Анна Сидорова',
    specialization: 'Съемщик',
    category: 'shooting',
    rating: 4.9,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 5,
    name: 'Иван Иванов',
    specialization: 'SMM-менеджер',
    category: 'smm',
    rating: 4.8,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 6,
    name: 'Елена Васильева',
    specialization: 'Рекламщик',
    category: 'ads',
    rating: 4.7,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 7,
    name: 'Максим Орлов',
    specialization: 'Фотограф',
    category: 'photo',
    rating: 4.9,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 8,
    name: 'Ольга Смирнова',
    specialization: 'IT-разработчик',
    category: 'it',
    rating: 4.6,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 9,
    name: 'Андрей Николаев',
    specialization: 'Копирайтер',
    category: 'scenario',
    rating: 4.8,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 10,
    name: 'Виктория Попова',
    specialization: 'Графический дизайнер',
    category: 'design',
    rating: 4.9,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 11,
    name: 'Сергей Волков',
    specialization: 'Видеограф',
    category: 'shooting',
    rating: 4.7,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 12,
    name: 'Татьяна Белова',
    specialization: 'Контент-менеджер',
    category: 'smm',
    rating: 4.8,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 13,
    name: 'Алексей Морозов',
    specialization: 'Таргетолог',
    category: 'ads',
    rating: 4.9,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 14,
    name: 'Наталья Кузнецова',
    specialization: 'Фотограф',
    category: 'photo',
    rating: 4.6,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 15,
    name: 'Павел Соколов',
    specialization: 'Веб-разработчик',
    category: 'it',
    rating: 4.8,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 16,
    name: 'Юлия Романова',
    specialization: 'Режиссер монтажа',
    category: 'montage',
    rating: 4.9,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 17,
    name: 'Роман Лебедев',
    specialization: 'Сценарист',
    category: 'scenario',
    rating: 4.7,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 18,
    name: 'Екатерина Новикова',
    specialization: 'UX/UI дизайнер',
    category: 'design',
    rating: 4.8,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 19,
    name: 'Михаил Федоров',
    specialization: 'Оператор',
    category: 'shooting',
    rating: 4.6,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  },
  {
    id: 20,
    name: 'Светлана Зайцева',
    specialization: 'Продюсер',
    category: 'smm',
    rating: 4.9,
    avatar: 'https://alfacta.online/100k/simple-ava-black.png'
  }
];

const CATEGORIES = [
  { id: 'scenario', title: 'Сценарий', icon: ScenarioIcon },
  { id: 'montage', title: 'Монтаж', icon: MontageIcon },
  { id: 'design', title: 'Дизайн', icon: DesignIcon },
  { id: 'shooting', title: 'Съемка', icon: ShootingIcon },
  { id: 'smm', title: 'SMM', icon: SmmIcon },
  { id: 'ads', title: 'Реклама', icon: AdsIcon },
  { id: 'photo', title: 'Для Съемки', icon: ForShootingIcon },
  { id: 'it', title: 'IT', icon: ItIcon }
];

const TABS = [
  { id: 'top100k', title: 'ТОП 100К' },
  { id: 'online', title: 'В СЕТИ' },
  { id: 'reviews', title: 'ОТЗЫВЫ' },
  { id: 'rating', title: 'РЕЙТИНГ' }
];

export default function MarketplaceScreen() {
  const scrollViewRef = useRef(null);
  const categoryRefs = useRef({});
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('top100k');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const [top100kExpanded, setTop100kExpanded] = useState(true);
  const [ratingExpanded, setRatingExpanded] = useState(true);
  const [scenarioExpanded, setScenarioExpanded] = useState(true);
  const [montageExpanded, setMontageExpanded] = useState(true);
  const [designExpanded, setDesignExpanded] = useState(true);
  const [shootingExpanded, setShootingExpanded] = useState(true);
  const [smmExpanded, setSmmExpanded] = useState(true);
  const [adsExpanded, setAdsExpanded] = useState(true);
  const [photoExpanded, setPhotoExpanded] = useState(true);
  const [itExpanded, setItExpanded] = useState(true);

  const handleSearch = (query) => {
    setSearchQuery(query);
    MARKETPLACE_SEARCH_QUERY = query;
  };

  const handleTabPress = (tabId) => {
    setActiveTab(tabId);
    MARKETPLACE_ACTIVE_TAB = tabId;
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    MARKETPLACE_SELECTED_CATEGORY = categoryId;
    
    // Скроллим к соответствующей секции
    setTimeout(() => {
      if (categoryRefs.current[categoryId]) {
        categoryRefs.current[categoryId].measureLayout(
          scrollViewRef.current,
          (x, y) => {
            scrollViewRef.current?.scrollTo({ y: y - 100, animated: true });
          }
        );
      }
    }, 100);
  };

  const handleHireUser = (userId) => {
    // TODO: Логика найма пользователя
    router.push(`/(chat)/conversation/${userId}`);
  };

  const getUsersByCategory = (category) => {
    return MOCK_USERS.filter(user => user.category === category);
  };

  // Функция для фильтрации пользователей по поисковому запросу
  const getFilteredUsers = () => {
    if (!searchQuery.trim()) {
      return [];
    }
    
    return MOCK_USERS.filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.specialization.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Рендер карточки пользователя для поиска (как в ИИ сборе команды)
  const renderSearchUserCard = (user) => (
    <View key={user.id} style={styles.searchUserCard}>
      <Image
        source={{ uri: user.avatar }}
        style={styles.searchUserAvatar}
      />
      
      {/* Rating */}
      <View style={styles.searchUserRating}>
        <Star size={12} color="#FFD700" fill="#FFD700" />
        <Text style={styles.searchRatingText}>{user.rating}</Text>
      </View>

      {/* User Info - positioned at bottom */}
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.9)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.searchUserInfoOverlay}
      >
        <View style={styles.searchUserInfo}>
          <Text style={styles.searchUserName}>{user.name}</Text>
          
          <View style={styles.searchUserActions}>
            <View style={styles.searchUserSpecialization}>
              <Text style={styles.searchSpecializationText}>{user.specialization}</Text>
            </View>
            
            <TouchableOpacity 
              style={styles.searchHireButton}
              onPress={() => handleHireUser(user.id)}
            >
              <Text style={styles.searchHireButtonText}>Нанять</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );

  const renderUserCard = ({ item, index }) => {
    // Получаем название категории для отображения
    const getCategoryName = (categoryId) => {
      const category = CATEGORIES.find(cat => cat.id === categoryId);
      return category ? category.title : 'Дизайн';
    };
    
    return (
      <View style={styles.userCard}>
        <Image
          source={{ uri: item.avatar }}
          style={styles.userAvatar}
        />
        
        {/* Rating */}
        <View style={styles.userRating}>
          <Star size={16} color="#FFD700" fill="#FFD700" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>

        {/* Heart Icon */}
        <TouchableOpacity style={styles.heartButton}>
          <Heart size={20} color="#666666" />
        </TouchableOpacity>

        {/* User Info */}
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']}
          style={styles.userInfoGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{item.name}</Text>
            
            <View style={styles.userActions}>
              <TouchableOpacity style={styles.specializationTag}>
                <Text style={styles.specializationText}>{getCategoryName(item.category)}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.hireButton}
                onPress={() => handleHireUser(item.id)}
              >
                <Text style={styles.hireButtonText}>Нанять</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  };

  const renderSection = (title, expanded, onToggle, data) => (
    <View style={styles.section}>
      <TouchableOpacity 
        style={styles.sectionHeader}
        onPress={onToggle}
      >
        <Text style={styles.sectionTitle}>{title}</Text>
        {expanded ? (
          <ChevronUp size={20} color="#FFFFFF" />
        ) : (
          <ChevronDown size={20} color="#FFFFFF" />
        )}
      </TouchableOpacity>
      
      {expanded && (
        <DragScrollView
          style={styles.horizontalScrollView}
        >
          {data.map((item, index) => (
            <View key={item.id} style={styles.userCardWrapper}>
              {renderUserCard({ item, index })}
            </View>
          ))}
        </DragScrollView>
      )}
    </View>
  );

  const renderCategorySection = (categoryId, title, expanded, onToggle) => (
    <View 
      style={styles.section}
      ref={(ref) => { categoryRefs.current[categoryId] = ref; }}
    >
      <TouchableOpacity 
        style={styles.sectionHeader}
        onPress={onToggle}
      >
        <Text style={styles.sectionTitle}>{title}</Text>
        {expanded ? (
          <ChevronUp size={20} color="#FFFFFF" />
        ) : (
          <ChevronDown size={20} color="#FFFFFF" />
        )}
      </TouchableOpacity>
      
      {expanded && (
        <DragScrollView
          style={styles.horizontalScrollView}
        >
          {getUsersByCategory(categoryId).map((item, index) => (
            <View key={item.id} style={styles.userCardWrapper}>
              {renderUserCard({ item, index })}
            </View>
          ))}
        </DragScrollView>
      )}
    </View>
  );

  const categoriesToShow = showCategories ? CATEGORIES : CATEGORIES.slice(0, 4);

  const renderCategoriesGrid = () => {
    if (showCategories) {
      // Развернутый вид: 2 ряда по 4 категории
      const firstRow = CATEGORIES.slice(0, 4);
      const secondRow = CATEGORIES.slice(4, 8);
      
      return (
        <View style={styles.categoriesGrid}>
          <View style={styles.categoriesRow}>
            {firstRow.map((category) => renderCategoryItem(category))}
          </View>
          <View style={styles.categoriesRow}>
            {secondRow.map((category) => renderCategoryItem(category))}
          </View>
        </View>
      );
    } else {
      // Свернутый вид: 1 ряд из 4 категорий
      const firstRow = CATEGORIES.slice(0, 4);
      
      return (
        <View style={styles.categoriesGrid}>
          <View style={styles.categoriesRow}>
            {firstRow.map((category) => renderCategoryItem(category))}
          </View>
        </View>
      );
    }
  };

  const renderCategoryItem = (category) => {
    const IconComponent = category.icon;
    const isSelected = selectedCategory === category.id;
    
    return (
      <View key={category.id} style={styles.categoryColumn}>
        <TouchableOpacity
          style={[
            styles.categoryItem,
            isSelected && styles.selectedCategory
          ]}
          onPress={() => handleCategorySelect(category.id)}
        >
          {isSelected && (
            <LinearGradient
              colors={['#0B5BFE', '#08A1FF']}
              style={styles.categoryGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <IconComponent 
                size={40} 
                color="#FFFFFF"
              />
            </LinearGradient>
          )}
          {!isSelected && (
            <IconComponent 
              size={40} 
              color="#FFFFFF"
            />
          )}
        </TouchableOpacity>
        <Text style={styles.categoryText}>
          {category.title}
        </Text>
      </View>
    );
  };

  // Рендер результатов поиска
  const renderSearchResults = () => {
    const filteredUsers = getFilteredUsers();
    
    if (searchQuery.trim() && filteredUsers.length === 0) {
      return (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>
            Ничего не найдено по запросу «{searchQuery}»
          </Text>
        </View>
      );
    }
    
    if (searchQuery.trim() && filteredUsers.length > 0) {
      return (
        <View style={styles.searchResultsContainer}>
          <Text style={styles.searchResultsTitle}>
            По запросу «{searchQuery}» найдено {filteredUsers.length} специалистов
          </Text>
          
          <View style={styles.searchResultsGrid}>
            {filteredUsers.map((user, index) => {
              if (index % 2 === 0) {
                const nextUser = filteredUsers[index + 1];
                return (
                  <View key={`row-${index}`} style={styles.searchResultsRow}>
                    {renderSearchUserCard(user)}
                    {nextUser && renderSearchUserCard(nextUser)}
                  </View>
                );
              }
              return null;
            })}
          </View>
        </View>
      );
    }
    
    return null;
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView 
          ref={scrollViewRef}
          style={styles.scrollView} 
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>МАРКЕТ</Text>
            </View>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
              <Search size={20} color="#666666" />
              <TextInput
                style={styles.searchInput}
                placeholder="Поиск"
                placeholderTextColor="#666666"
                value={searchQuery}
                onChangeText={handleSearch}
              />
            </View>
            <TouchableOpacity style={styles.heartIconButton}>
              <Heart size={24} color="#666666" />
            </TouchableOpacity>
          </View>

          {/* Tabs */}
          <View style={styles.tabsContainer}>
            {TABS.map((tab) => (
              <TouchableOpacity
                key={tab.id}
                style={[
                  styles.tab,
                  activeTab === tab.id && styles.activeTab
                ]}
                onPress={() => handleTabPress(tab.id)}
              >
                <Text style={[
                  styles.tabText,
                  activeTab === tab.id && styles.activeTabText
                ]}>
                  {tab.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Search Results */}
          {renderSearchResults()}

          {/* Categories and Sections - hide when searching */}
          {!searchQuery.trim() && (
            <>
          {/* Categories Header */}
          <View style={styles.categoriesHeader}>
            <Text style={styles.categoriesTitle}>Категории</Text>
            <TouchableOpacity onPress={() => setShowCategories(!showCategories)}>
              {showCategories ? (
                <ChevronUp size={20} color="#FFFFFF" />
              ) : (
                <ChevronDown size={20} color="#FFFFFF" />
              )}
            </TouchableOpacity>
          </View>

          {/* Categories Section */}
          <View style={styles.categoriesSection}>
            <View style={styles.categoriesContainer}>
              {renderCategoriesGrid()}
            </View>
          </View>

          {/* Spacing after categories */}
          <View style={styles.categoriesSpacing} />

          {/* Sections */}
          {renderSection('ТОП 100К', top100kExpanded, () => setTop100kExpanded(!top100kExpanded), MOCK_USERS)}
          {renderSection('РЕЙТИНГ', ratingExpanded, () => setRatingExpanded(!ratingExpanded), MOCK_USERS)}

          {/* Category Sections */}
          {renderCategorySection('scenario', 'СЦЕНАРИЙ', scenarioExpanded, () => setScenarioExpanded(!scenarioExpanded))}
          {renderCategorySection('montage', 'МОНТАЖ', montageExpanded, () => setMontageExpanded(!montageExpanded))}
          {renderCategorySection('design', 'ДИЗАЙН', designExpanded, () => setDesignExpanded(!designExpanded))}
          {renderCategorySection('shooting', 'СЪЕМКА', shootingExpanded, () => setShootingExpanded(!shootingExpanded))}
          {renderCategorySection('smm', 'SMM', smmExpanded, () => setSmmExpanded(!smmExpanded))}
          {renderCategorySection('ads', 'РЕКЛАМА', adsExpanded, () => setAdsExpanded(!adsExpanded))}
          {renderCategorySection('photo', 'ДЛЯ СЪЕМКИ', photoExpanded, () => setPhotoExpanded(!photoExpanded))}
          {renderCategorySection('it', 'IT', itExpanded, () => setItExpanded(!itExpanded))}
            </>
          )}

          <View style={styles.bottomSpacing} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#070707',
  },
  container: {
    flex: 1,
    backgroundColor: '#070707',
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  titleContainer: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 12,
    backgroundColor: '#000000',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Benzin-Bold',
    letterSpacing: 2,
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 20,
    gap: 12,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Codec-Pro-News',
  },
  heartIconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 25,
    backgroundColor: 'transparent',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
    marginHorizontal: 4,
  },
  activeTab: {
    backgroundColor: '#0066FF',
    borderColor: '#0066FF',
  },
  tabText: {
    color: '#666666',
    fontSize: 12,
    fontFamily: 'Codec-Pro-Bold',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  categoriesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  categoriesTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
  },
  categoriesSection: {
    marginBottom: 20,
  },
  categoriesContainer: {
    paddingHorizontal: 24,
  },
  categoriesGrid: {
    gap: 12, // Вертикальные отступы между рядами
  },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10, // Горизонтальные отступы между категориями
  },
  categoryColumn: {
    flex: 1,
    alignItems: 'center',
    gap: 12,
  },
  categoryItem: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: 'rgb(15, 15, 15)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333333',
    position: 'relative',
    overflow: 'hidden',
  },
  selectedCategory: {
    backgroundColor: 'transparent',
    borderColor: '#333333',
  },
  categoryGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Codec-Pro-Bold',
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 15,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
  },
  horizontalScrollView: {
    marginLeft: 24,
  },
  userCardWrapper: {
    width: 240, 
    marginRight: 12, // Отступ между карточками
  },
  userCard: {
    width: 240,
    height: 230,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
    position: 'relative',
  },
  userAvatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  userRating: {
    position: 'absolute',
    top: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
  heartButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfoGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 40,
  },
  userInfo: {
    padding: 16,
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
    marginBottom: 8,
  },
  userActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  specializationTag: {
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
  hireButton: {
    backgroundColor: '#0066FF',
    borderRadius: 12,
    paddingHorizontal: 5,
    paddingVertical: 8,
    flex: 1,
    alignItems: 'center',
  },
  hireButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: 'Codec-Pro-Bold',
  },
  bottomSpacing: {
    height: 120,
  },
  categoriesSpacing: {
    height: 20,
  },
  // Стили для результатов поиска
  noResultsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 60,
    alignItems: 'center',
  },
  noResultsText: {
    color: '#666666',
    fontSize: 16,
    fontFamily: 'Codec-Pro-News',
    textAlign: 'center',
  },
  searchResultsContainer: {
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  searchResultsTitle: {
    color: '#666666',
    fontSize: 16,
    fontFamily: 'Codec-Pro-News',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchResultsGrid: {
    gap: 16,
  },
  searchResultsRow: {
    flexDirection: 'row',
    gap: 16,
  },
  searchUserCard: {
    flex: 1,
    height: 280,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
    position: 'relative',
  },
  searchUserAvatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  searchUserRating: {
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
  searchRatingText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Codec-Pro-Bold',
    marginTop: 4,
  },
  searchUserInfoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 60,
  },
  searchUserInfo: {
    padding: 16,
  },
  searchUserName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
    marginBottom: 8,
  },
  searchUserActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchUserSpecialization: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 8,
    flex: 1,
    alignItems: 'center',
    marginRight: 8,
  },
  searchSpecializationText: {
    color: '#000000',
    fontSize: 11,
    fontFamily: 'Codec-Pro-Bold',
  },
  searchHireButton: {
    flex: 1,
    backgroundColor: '#0066FF',
    borderRadius: 12,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchHireButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: 'Codec-Pro-Bold',
  },
});