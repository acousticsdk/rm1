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
import { ChevronDown } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FinancialManagerModal from './FinancialManagerModal';

// Глобальные переменные для интеграции с бекендом
let BANK_SELECTED_CURRENCY = 'EURO';
let BANK_WITHDRAWAL_AMOUNT = '900';

// Мемоизированный компонент для инпута суммы - вынесен наружу
const AmountInput = React.memo(({ value, onChangeText }) => (
  <LinearGradient
    colors={['#4A9EFF', '#0066FF']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.amountInputContainer}
  >
    <TextInput
      style={styles.amountInput}
      value={value}
      onChangeText={onChangeText}
      placeholder="900"
      placeholderTextColor="#FFFFFF80"
      keyboardType="numeric"
      autoFocus={false}
      blurOnSubmit={false}
      {...(Platform.OS === 'web' && {
        onFocus: (e) => {
          // Предотвращаем потерю фокуса на веб
          e.target.style.outline = 'none';
        }
      })}
    />
  </LinearGradient>
));

export default function BankModal({ visible, onClose, onSuccess }) {
  const [selectedCurrency, setSelectedCurrency] = useState('EURO');
  const [withdrawalAmount, setWithdrawalAmount] = useState('900');
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [financialManagerModalVisible, setFinancialManagerModalVisible] = useState(false);

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setShowCurrencyDropdown(false);
    BANK_SELECTED_CURRENCY = currency;
  };

  const handleAmountChange = (amount) => {
    setWithdrawalAmount(amount);
    BANK_WITHDRAWAL_AMOUNT = amount;
  };

  const handleContinue = () => {
    // Обновляем глобальные переменные
    BANK_SELECTED_CURRENCY = selectedCurrency;
    BANK_WITHDRAWAL_AMOUNT = withdrawalAmount;
    
    // Показываем модалку с финансовым менеджером
    setFinancialManagerModalVisible(true);
  };

  const handleFinancialManagerComplete = () => {
    // Закрываем модалку финансового менеджера
    setFinancialManagerModalVisible(false);
    // Небольшая задержка для корректного закрытия на мобильных
    setTimeout(() => {
      onClose();
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
            // Не закрывать клавиатуру, если тап по самому инпуту
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

            {/* Bank Title */}
            <View style={styles.bankTitleContainer}>
              <Text style={styles.bankTitle}>БАНК</Text>
            </View>

            <View style={styles.content}>
              {/* Bank Section */}
              <View style={styles.bankSection}>
                {/* Currency Section */}
                <View style={styles.currencySection}>
                  <Text style={styles.currencyLabel}>Валюта</Text>
                  
                  <View style={styles.currencySectionContainer}>
                    <TouchableOpacity 
                      style={styles.currencyDropdown} 
                      onPress={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                    >
                      <Text style={styles.currencyDropdownText}>
                        {selectedCurrency}
                      </Text>
                      <ChevronDown size={20} color="#666666" />
                    </TouchableOpacity>
                    
                    {showCurrencyDropdown && (
                      <View style={styles.currencyButtonsContainer}>
                        <View style={styles.currencyButtonsRowSingle}>
                          <TouchableOpacity 
                            style={[
                              styles.currencyButton,
                              styles.currencyButtonThird,
                              selectedCurrency === 'EURO' && styles.currencyButtonSelected
                            ]}
                            onPress={() => handleCurrencySelect('EURO')}
                          >
                            <Text style={[
                              styles.currencyButtonText,
                              selectedCurrency === 'EURO' && styles.currencyButtonTextSelected
                            ]}>
                              EURO
                            </Text>
                          </TouchableOpacity>
                          
                          <TouchableOpacity 
                            style={[
                              styles.currencyButton,
                              styles.currencyButtonThird,
                              selectedCurrency === 'PLN' && styles.currencyButtonSelected
                            ]}
                            onPress={() => handleCurrencySelect('PLN')}
                          >
                            <Text style={[
                              styles.currencyButtonText,
                              selectedCurrency === 'PLN' && styles.currencyButtonTextSelected
                            ]}>
                              PLN
                            </Text>
                          </TouchableOpacity>
                          
                          <TouchableOpacity 
                            style={[
                              styles.currencyButton,
                              styles.currencyButtonThird,
                              selectedCurrency === 'USD' && styles.currencyButtonSelected
                            ]}
                            onPress={() => handleCurrencySelect('USD')}
                          >
                            <Text style={[
                              styles.currencyButtonText,
                              selectedCurrency === 'USD' && styles.currencyButtonTextSelected
                            ]}>
                              USD
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )}
                  </View>
                </View>

                {/* Amount Section */}
                <View style={styles.amountSection}>
                  <Text style={styles.amountLabel}>Сумма</Text>
                  <AmountInput 
                    value={withdrawalAmount}
                    onChangeText={handleAmountChange}
                  />
                </View>
              </View>
            </View>

            {/* Continue Button - Fixed at bottom */}
            <View style={styles.continueButtonContainer}>
              <LinearGradient
                colors={['#4A9EFF', '#0066FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.continueButtonGradient}
              >
                <TouchableOpacity 
                  style={styles.continueButton}
                  onPress={handleContinue}
                >
                  <Text style={styles.continueButtonText}>ПРОДОЛЖИТЬ</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
      
      {/* Financial Manager Modal */}
      <FinancialManagerModal
        visible={financialManagerModalVisible}
        onClose={handleFinancialManagerComplete}
        onSuccess={onSuccess}
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
  bankSection: {
    flex: 1,
  },
  currencySection: {
    marginBottom: 40,
  },
  currencyLabel: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
    marginBottom: 15,
  },
  currencySectionContainer: {
    marginBottom: 20,
  },
  currencyDropdown: {
    borderWidth: 1,
    borderColor: '#444444',
    borderRadius: 15,
    backgroundColor: '#131313',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 18,
    zIndex: 10,
  },
  currencyDropdownText: {
    color: '#666666',
    fontSize: 16,
    fontFamily: 'Codec-Pro-News',
  },
  currencyButtonsContainer: {
    borderWidth: 1,
    borderColor: '#444444',
    borderTopWidth: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#131313',
    paddingHorizontal: 25,
    marginTop: -10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 23,
    paddingBottom: 23,
  },
  currencyButtonsRowSingle: {
    flexDirection: 'row',
    gap: 15,
  },
  currencyButton: {
    borderWidth: 1,
    borderColor: '#666666',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyButtonThird: {
    flex: 1,
  },
  currencyButtonSelected: {
    borderColor: '#0088FF',
    backgroundColor: '#0088FF20',
  },
  currencyButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Codec-Pro-Bold',
  },
  currencyButtonTextSelected: {
    color: '#0088FF',
  },
  amountSection: {
    marginBottom: 60,
  },
  amountLabel: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
    marginBottom: 15,
  },
  amountInputContainer: {
    borderRadius: 25,
    padding: 2,
  },
  amountInput: {
    backgroundColor: '#0066FF',
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 20,
    color: '#FFFFFF',
    fontSize: 32,
    fontFamily: 'Codec-Pro-Bold',
    textAlign: 'left',
  },
  continueButtonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  continueButtonGradient: {
    borderRadius: 25,
    padding: 2,
  },
  continueButton: {
    backgroundColor: '#0066FF',
    borderRadius: 25,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
  },
  bankTitleContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  bankTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Codec-Pro-Bold',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 15,
    backgroundColor: 'transparent',
  },
});