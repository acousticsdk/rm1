import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Modal,
  TouchableOpacity,
  TextInput,
  ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '@/components/ui/Button';

// Глобальные переменные для интеграции с бекендом
let BANK_SELECTED_CURRENCY = 'EURO';
let BANK_WITHDRAWAL_AMOUNT = '900';

export default function BankModal({ visible, onClose }) {
  const [selectedCurrency, setSelectedCurrency] = useState('EURO');
  const [withdrawalAmount, setWithdrawalAmount] = useState('900');

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
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
            <View style={styles.titleContainer}>
              <Text style={styles.title}>КОШЕЛЕК</Text>
            </View>
          </View>

          <View style={styles.content}>
            {/* Bank Section */}
            <View style={styles.bankSection}>
              <View style={styles.bankTitleContainer}>
                <Text style={styles.bankTitle}>БАНК</Text>
              </View>

              {/* Currency Section */}
              <View style={styles.currencySection}>
                <Text style={styles.currencyLabel}>Валюта</Text>
                
                <TouchableOpacity style={styles.currencyDropdown}>
                  <Text style={styles.currencyDropdownText}>{selectedCurrency}</Text>
                  <View style={styles.triangleUp} />
                </TouchableOpacity>

                <View style={styles.currencyButtons}>
                  <TouchableOpacity 
                    style={[
                      styles.currencyButton,
                      selectedCurrency === 'EURO' && styles.currencyButtonActive
                    ]}
                    onPress={() => handleCurrencySelect('EURO')}
                  >
                    <Text style={[
                      styles.currencyButtonText,
                      selectedCurrency === 'EURO' && styles.currencyButtonTextActive
                    ]}>
                      EURO
                    </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={[
                      styles.currencyButton,
                      selectedCurrency === 'PLN' && styles.currencyButtonActive
                    ]}
                    onPress={() => handleCurrencySelect('PLN')}
                  >
                    <Text style={[
                      styles.currencyButtonText,
                      selectedCurrency === 'PLN' && styles.currencyButtonTextActive
                    ]}>
                      PLN
                    </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={[
                      styles.currencyButton,
                      selectedCurrency === 'USD' && styles.currencyButtonActive
                    ]}
                    onPress={() => handleCurrencySelect('USD')}
                  >
                    <Text style={[
                      styles.currencyButtonText,
                      selectedCurrency === 'USD' && styles.currencyButtonTextActive
                    ]}>
                      USD
                    </Text>
                  </TouchableOpacity>
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
    marginBottom: 20,
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
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  bankSection: {
    flex: 1,
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
  currencySection: {
    marginBottom: 40,
  },
  currencyLabel: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
    marginBottom: 15,
  },
  currencyDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#131313',
    borderWidth: 1,
    borderColor: '#444444',
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 18,
    marginBottom: 20,
  },
  currencyDropdownText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Codec-Pro-News',
  },
  triangleUp: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#666666',
  },
  currencyButtons: {
    flexDirection: 'row',
    backgroundColor: '#131313',
    borderWidth: 1,
    borderColor: '#444444',
    borderRadius: 25,
    padding: 8,
    gap: 8,
  },
  currencyButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  currencyButtonActive: {
    backgroundColor: '#0066FF',
  },
  currencyButtonText: {
    color: '#666666',
    fontSize: 16,
    fontFamily: 'Codec-Pro-Bold',
  },
  currencyButtonTextActive: {
    color: '#FFFFFF',
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