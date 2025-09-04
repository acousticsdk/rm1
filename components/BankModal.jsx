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
  Keyboard
} from 'react-native';
import { ChevronDown } from 'lucide-react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

// Глобальные переменные для интеграции с бекендом
let BANK_SELECTED_CURRENCY = 'EURO';
let BANK_WITHDRAWAL_AMOUNT = '900';

export default function BankModal({ visible, onClose }) {
  const [selectedCurrency, setSelectedCurrency] = useState('EURO');
  const [withdrawalAmount, setWithdrawalAmount] = useState('900');
  
  const dropdownHeight = useSharedValue(0);
  const dropdownOpacity = useSharedValue(0);
  const dropdownPadding = useSharedValue(0);

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    closeDropdown();
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
    
    // TODO: Здесь будет логика вывода средств
    // Данные доступны в переменных:
    // - BANK_SELECTED_CURRENCY
    // - BANK_WITHDRAWAL_AMOUNT
    
    console.log(`Вывод ${withdrawalAmount} ${selectedCurrency}`);
    onClose();
  };

  const openDropdown = () => {
    dropdownHeight.value = withTiming(120, { duration: 300 });
    dropdownOpacity.value = withTiming(1, { duration: 300 });
    dropdownPadding.value = withTiming(23, { duration: 300 });
  };

  const closeDropdown = () => {
    dropdownHeight.value = withTiming(0, { duration: 300 });
    dropdownOpacity.value = withTiming(0, { duration: 300 });
    dropdownPadding.value = withTiming(0, { duration: 300 });
  };

  const toggleDropdown = () => {
    if (dropdownHeight.value <= 0) {
      openDropdown();
    } else {
      closeDropdown();
    }
  };

  const animatedDropdownStyle = useAnimatedStyle(() => {
    return {
      height: dropdownHeight.value,
      opacity: dropdownOpacity.value,
      paddingTop: dropdownPadding.value,
      paddingBottom: dropdownPadding.value,
    };
  });

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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.handleBar} />
            </View>

            <View style={styles.content}>
              {/* Bank Section */}
              <View style={styles.bankSection}>
                {/* Currency Section */}
                <View style={styles.currencySection}>
                  <Text style={styles.currencyLabel}>Валюта</Text>
                  
                  <View style={styles.currencySectionContainer}>
                    <TouchableOpacity style={styles.currencyDropdown} onPress={toggleDropdown}>
                      <Text style={styles.currencyDropdownText}>
                        {selectedCurrency}
                      </Text>
                      <ChevronDown size={20} color="#666666" />
                    </TouchableOpacity>
                    
                    {/* Кнопки выбора валюты */}
                    <Animated.View style={[styles.currencyButtonsContainer, animatedDropdownStyle]}>
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
                    </Animated.View>
                  </View>
                </View>

                {/* Amount Section */}
                <View style={styles.amountSection}>
                  <Text style={styles.amountLabel}>Сумма</Text>
                  <LinearGradient
                    colors={['#4A9EFF', '#0066FF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.amountInputContainer}
                  >
                    <TextInput
                      style={styles.amountInput}
                      value={withdrawalAmount}
                      onChangeText={handleAmountChange}
                      placeholder="900"
                      placeholderTextColor="#FFFFFF80"
                      keyboardType="numeric"
                    />
                  </LinearGradient>
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
    gap: 15,
    overflow: 'hidden',
    marginTop: -10,
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
});