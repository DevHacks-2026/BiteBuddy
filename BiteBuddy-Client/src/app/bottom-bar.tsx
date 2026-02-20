import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BottomBar = () => {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.tabItem}>
        <MaterialCommunityIcons name="view-grid-outline" size={28} color="#C83B3B" />
        <Text style={[styles.tabText, styles.activeText]}>DASHBOARD</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem}>
        <MaterialCommunityIcons name="account-multiple-outline" size={28} color="#8E9EAB" />
        <Text style={styles.tabText}>FRIENDS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="chat-outline" size={28} color="#8E9EAB" />
          <View style={styles.badge} />
        </View>
        <Text style={styles.tabText}>CHATS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem}>
        <MaterialCommunityIcons name="account-circle-outline" size={28} color="#8E9EAB" />
        <Text style={styles.tabText}>PROFILE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 8,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: -2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#C83B3B',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  tabText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#8E9EAB',
    marginTop: 4,
    letterSpacing: 0.5,
  },
  activeText: {
    color: '#C83B3B',
  },
});

export default BottomBar;
