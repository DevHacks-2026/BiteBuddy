import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const tabs = [
  { key: 'home', label: 'Home', icon: 'home-outline' as const },
  { key: 'friends', label: 'Friends', icon: 'account-multiple-outline' as const },
  { key: 'findmate', label: 'Find Mate', icon: 'account-search-outline' as const },
  { key: 'chats', label: 'Chats', icon: 'chat-outline' as const },
  { key: 'profile', label: 'Profile', icon: 'account-circle-outline' as const },
];

const ACTIVE = '#C83B3B';
const INACTIVE = '#8E9EAB';

const BottomBar = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tabItem}
            onPress={() => setActiveTab(tab.key)}
          >
            <MaterialCommunityIcons
              name={tab.icon}
              size={24}
              color={isActive ? ACTIVE : INACTIVE}
            />
            <Text style={[styles.tabText, isActive && styles.activeText]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#8E9EAB',
    marginTop: 4,
  },
  activeText: {
    color: '#C83B3B',
  },
});

export default BottomBar;
