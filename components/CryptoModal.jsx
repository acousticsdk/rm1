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
import FinancialManagerModal from './FinancialManagerModal';

// Глобальные переменные для интеграции с бекендом
let CRYPTO_WITHDRAWAL_AMOUNT = '900';
let CRYPTO_WITHDRAWAL_METHOD = 'USDT';
let CRYPTO_NETWORK = 'TRC-20';
let CRYPTO_WALLET_ADDRESS = '';

export default function CryptoModal({ visible, onClose, onSuccess }) {
  const [withdrawalAmount, setWithdrawalAmount] = useState('900');
  const [withdrawalMethod, setWithdrawalMethod] = useState('USDT');
  const [network, setNetwork] = useState('TRC-20');
  const [walletAddress, setWalletAddress] = useState('');
  const [financialManagerModalVisible, setFinancialManagerModalVisible] = useState(false);
  
  const methodDropdownHeight = useSharedValue(0);
  const methodDropdownOpacity = useSharedValue(0);
  const methodDropdownPadding = useSharedValue(0);
  
  const networkDropdownHeight = useSharedValue(0);
  const networkDropdownOpacity = useSharedValue(0);
  const networkDropdownPadding = useSharedValue(0);

  const handleMethodSelect = (method) => {
    setWithdrawalMethod(method);
    closeMethodDropdown();
    CRYPTO_WITHDRAWAL_METHOD = method;
  };

  const handleNetworkSelect = (selectedNetwork) => {
    setNetwork(selectedNetwork);
    closeNetworkDropdown();
    CRYPTO_NETWORK = selectedNetwork;
  };

  const handleAmountChange = (amount) => {
    setWithdrawalAmount(amount);
    CRYPTO_WITHDRAWAL_AMOUNT = amount;
  };

  const handleWalletAddressChange = (address) => {
    setWalletAddress(address);
    CRYPTO_WALLET_ADDRESS = address;
  };

  const handleContinue = () => {
    // Обновляем глобальные переменные
    CRYPTO_WITHDRAWAL_AMOUNT = withdrawalAmount;
    CRYPTO_WITHDRAWAL_METHOD = withdrawalMethod;
    CRYPTO_NETWORK = network;
    CRYPTO_WALLET_ADDRESS = walletAddress;
    
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

  const openMethodDropdown = () => {
    methodDropdownHeight.value = withTiming(80, { duration: 300 });
    methodDropdownOpacity.value = withTiming(1, { duration: 300 });
    methodDropdownPadding.value = withTiming(23, { duration: 300 });
  };

  const closeMethodDropdown = () => {
    methodDropdownHeight.value = withTiming(0, { duration: 300 });
    methodDropdownOpacity.value = withTiming(0, { duration: 300 });
    methodDropdownPadding.value = withTiming(0, { duration: 300 });
  };

  const toggleMethodDropdown = () => {
    if (methodDropdownHeight.value <= 0) {
      openMethodDropdown();
    } else {
      closeMethodDropdown();
    }
  };

  const openNetworkDropdown = () => {
    networkDropdownHeight.value = withTiming(80, { duration: 300 });
    networkDropdownOpacity.value = withTiming(1, { duration: 300 });
    networkDropdownPadding.value = withTiming(23, { duration: 300 });
  };

  const closeNetworkDropdown = () => {
    networkDropdownHeight.value = withTiming(0, { duration: 300 });
    networkDropdownOpacity.value = withTiming(0, { duration: 300 });
    networkDropdownPadding.value = withTiming(0, { duration: 300 });
  };

  const toggleNetworkDropdown = () => {
    if (networkDropdownHeight.value <= 0) {
      openNetworkDropdown();
    } else {
      closeNetworkDropdown();
    }
  };

  const animatedMethodDropdownStyle = useAnimatedStyle(() => {
    return {
      height: methodDropdownHeight.value,
      opacity: methodDropdownOpacity.value,
      paddingTop: methodDropdownPadding.value,
      paddingBottom: methodDropdownPadding.value,
    };
  });

  const animatedNetworkDropdownStyle = useAnimatedStyle(() => {
    return {
      height: networkDropdownHeight.value,
      opacity: networkDropdownOpacity.value,
      paddingTop: networkDropdownPadding.value,
      paddingBottom: networkDropdownPadding.value,
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

            {/* Crypto Title */}
            <View style={styles.cryptoTitleContainer}>
              <Text style={styles.cryptoTitle}>КРИПТО</Text>
            </View>

            <View style={styles.content}>
              {/* Crypto Section */}
              <View style={styles.cryptoSection}>
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

                {/* Withdrawal Method Section */}
                <View style={styles.methodSection}>
                  <Text style={styles.methodLabel}>Способ вывода</Text>
                  
                  <View style={styles.methodSectionContainer}>
                    <TouchableOpacity style={styles.methodDropdown} onPress={toggleMethodDropdown}>
                      <Text style={styles.methodDropdownText}>
                        {withdrawalMethod}
                      </Text>
                      <ChevronDown size={20} color="#666666" />
                    </TouchableOpacity>
                    
                    {/* Кнопки выбора способа вывода */}
                    <Animated.View style={[styles.methodButtonsContainer, animatedMethodDropdownStyle]}>
                      <View style={styles.methodButtonsRow}>
                        <TouchableOpacity 
                          style={[
                            styles.methodButton,
                            styles.methodButtonHalf,
                            withdrawalMethod === 'USDT' && styles.methodButtonSelected
                          ]}
                          onPress={() => handleMethodSelect('USDT')}
                        >
                          <Text style={[
                            styles.methodButtonText,
                            withdrawalMethod === 'USDT' && styles.methodButtonTextSelected
                          ]}>
                            USDT
                          </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                          style={[
                            styles.methodButton,
                            styles.methodButtonHalf,
                            withdrawalMethod === 'BTC' && styles.methodButtonSelected
                          ]}
                          onPress={() => handleMethodSelect('BTC')}
                        >
                          <Text style={[
                            styles.methodButtonText,
                            withdrawalMethod === 'BTC' && styles.methodButtonTextSelected
                          ]}>
                            BTC
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </Animated.View>
                  </View>
                </View>

                {/* Network Section */}
                <View style={styles.networkSection}>
                  <Text style={styles.networkLabel}>Сеть</Text>
                  
                  <View style={styles.networkSectionContainer}>
                    <TouchableOpacity style={styles.networkDropdown} onPress={toggleNetworkDropdown}>
                      <Text style={styles.networkDropdownText}>
                        {network}
                      </Text>
                      <ChevronDown size={20} color="#666666" />
                    </TouchableOpacity>
                    
                    {/* Кнопки выбора сети */}
                    <Animated.View style={[styles.networkButtonsContainer, animatedNetworkDropdownStyle]}>
                      <View style={styles.networkButtonsRow}>
                        <TouchableOpacity 
                          style={[
                            styles.networkButton,
                            styles.networkButtonHalf,
                            network === 'TRC-20' && styles.networkButtonSelected
                          ]}
                          onPress={() => handleNetworkSelect('TRC-20')}
                        >
                          <Text style={[
                            styles.networkButtonText,
                            network === 'TRC-20' && styles.networkButtonTextSelected
                          ]}>
                            TRC-20
                          </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                          style={[
                            styles.networkButton,
                            styles.networkButtonHalf,
                            network === 'ERC-20' && styles.networkButtonSelected
                          ]}
                          onPress={() => handleNetworkSelect('ERC-20')}
                        >
                          <Text style={[
                            styles.networkButtonText,
                            network === 'ERC-20' && styles.networkButtonTextSelected
                          ]}>
                            ERC-20
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </Animated.View>
                  </View>
                </View>

                {/* Wallet Address Section */}
                <View style={styles.walletSection}>
                  <Text style={styles.walletLabel}>Кошелёк</Text>
                  <View style={styles.walletInputRow}>
                    <TextInput
                      style={styles.walletInput}
                      value={walletAddress}
                      onChangeText={handleWalletAddressChange}
                      placeholder="TLU34F...Gh3tH"
                      placeholderTextColor="#666666"
                    />
                    <TouchableOpacity style={styles.checkWalletButton}>
                      <Text style={styles.checkWalletText}>ПРОВЕРИТЬ КОШЕЛЕК</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.walletNote}>
                    *оплата должна быть обязательно с выше добавленного кошелька
                  </Text>
                </View>

                {/* Agreement Section */}
                <View style={styles.agreementSection}>
                  <TouchableOpacity style={styles.agreementRow}>
                    <View style={styles.checkbox} />
                    <Text style={styles.agreementText}>
                      Соглашаюсь с публичной офертой
                    </Text>
                  </TouchableOpacity>
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
                  <Text style={styles.continueButtonText}>ПЕРЕЙТИ К ОПЛАТЕ</Text>
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
  cryptoSection: {
    flex: 1,
  },
  cryptoTitleContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  cryptoTitle: {
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
  amountSection: {
    marginBottom: 40,
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
  methodSection: {
    marginBottom: 40,
  },
  methodLabel: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
    marginBottom: 15,
  },
  methodSectionContainer: {
    marginBottom: 20,
  },
  methodDropdown: {
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
  methodDropdownText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Codec-Pro-News',
  },
  methodButtonsContainer: {
    borderWidth: 1,
    borderColor: '#444444',
    borderTopWidth: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#131313',
    paddingHorizontal: 25,
    overflow: 'hidden',
    marginTop: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  methodButtonsRow: {
    flexDirection: 'row',
    gap: 15,
  },
  methodButton: {
    borderWidth: 1,
    borderColor: '#666666',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  methodButtonHalf: {
    flex: 1,
  },
  methodButtonSelected: {
    borderColor: '#0088FF',
    backgroundColor: '#0088FF20',
  },
  methodButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Codec-Pro-Bold',
  },
  methodButtonTextSelected: {
    color: '#0088FF',
  },
  networkSection: {
    marginBottom: 40,
  },
  networkLabel: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
    marginBottom: 15,
  },
  networkSectionContainer: {
    marginBottom: 20,
  },
  networkDropdown: {
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
  networkDropdownText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Codec-Pro-News',
  },
  networkButtonsContainer: {
    borderWidth: 1,
    borderColor: '#444444',
    borderTopWidth: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#131313',
    paddingHorizontal: 25,
    overflow: 'hidden',
    marginTop: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  networkButtonsRow: {
    flexDirection: 'row',
    gap: 15,
  },
  networkButton: {
    borderWidth: 1,
    borderColor: '#666666',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  networkButtonHalf: {
    flex: 1,
  },
  networkButtonSelected: {
    borderColor: '#0088FF',
    backgroundColor: '#0088FF20',
  },
  networkButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Codec-Pro-Bold',
  },
  networkButtonTextSelected: {
    color: '#0088FF',
  },
  walletSection: {
    marginBottom: 40,
  },
  walletLabel: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Codec-Pro-Bold',
    marginBottom: 15,
  },
  walletInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },
  walletInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#444444',
    borderRadius: 15,
    backgroundColor: '#131313',
    paddingHorizontal: 25,
    paddingVertical: 18,
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Codec-Pro-News',
  },
  checkWalletButton: {
    backgroundColor: '#333333',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  checkWalletText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Codec-Pro-Bold',
  },
  walletNote: {
    color: '#666666',
    fontSize: 12,
    fontFamily: 'Codec-Pro-News',
    fontStyle: 'italic',
  },
  agreementSection: {
    marginBottom: 40,
  },
  agreementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#666666',
    borderRadius: 4,
    backgroundColor: 'transparent',
  },
  agreementText: {
    color: '#666666',
    fontSize: 14,
    fontFamily: 'Codec-Pro-News',
    flex: 1,
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