import React, { useState, createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserScreen from './UserScreen';
import AdminScreen from './AdminScreen';

const Stack = createStackNavigator();

// 주문 상태 관리를 위한 Context 생성
const OrderContext = createContext();

export default function App() {
  const [orderStatus, setOrderStatus] = useState('주문이 접수되었습니다.');
  const [estimatedTime, setEstimatedTime] = useState(10);
  const [waitingCustomers, setWaitingCustomers] = useState(5);

  return (
    <OrderContext.Provider
      value={{ orderStatus, setOrderStatus, estimatedTime, setEstimatedTime, waitingCustomers, setWaitingCustomers }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          {/* 사용자 화면 */}
          <Stack.Screen name="User" component={UserScreen} options={{ title: '사용자 화면' }} />
          {/* 관리자 화면 */}
          <Stack.Screen name="Admin" component={AdminScreen} options={{ title: '관리자 화면' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </OrderContext.Provider>
  );
}

// Context를 가져오는 custom hook
export function useOrder() {
  return useContext(OrderContext);
}
