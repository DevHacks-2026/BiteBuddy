import { Feather, MaterialIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const COLORS = {
  white: '#FFFFFF',
  bg: '#F1F5F9',
  textMain: '#0F172A',
  textSub: '#64748B',
  primary: '#BA281E',
  icon: '#94A3B8',
  green: '#22C55E',
  border: '#CBD5E1',
  orange10: 'rgba(238, 140, 43, 0.1)',
};

const friendsData = [
  {
    id: '1',
    name: 'Alex Chen',
    major: 'Computer Science',
    isOnline: true,
    avatar: require('../../../assets/default-avator.png')
  },
  {
    id: '2',
    name: 'Sarah Miller',
    major: 'Graphic Design',
    isOnline: true,
    avatar: require('../../../assets/default-avator.png')
  },
  {
    id: '3',
    name: 'Jordan Kim',
    major: 'Mechanical Engineering',
    isOnline: false,
    avatar: require('../../../assets/default-avator.png')
  },
];

const groupsData = [
  { id: '1', title: 'Sushi party', desc: 'Sushi lovers', members: 5 },
  { id: '2', title: 'Burger Party', desc: 'BurgerKing only', members: 8 },
  { id: '3', title: 'Pizza Night', desc: 'Pepperoni fans only!', members: 5 },
];

export default function FriendsScreen() {
  const [activeTab, setActiveTab] = useState('All Friends');
  const [searchQuery, setSearchQuery] = useState('');

  const searchInputRef = useRef<TextInput>(null);

  const handleSearchPress = () => {
    searchInputRef.current?.focus();
  };

  const renderFriend = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.avatarWrapper}>
          <Image
            source={item.avatar}
            style={styles.avatar}
          />
          <View style={[
            styles.dot,
            { backgroundColor: item.isOnline ? COLORS.green : COLORS.icon }
          ]} />
        </View>
        <View>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.subText}>{item.major}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.chatIconBox}>
        <Feather name="message-square" size={18} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );

  const renderGroup = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <View>
          <View style={styles.groupTitleRow}>
            <Text style={styles.nameText}>{item.title}</Text>
            <View style={styles.badge}>
              <MaterialIcons name="people" size={14} color={COLORS.textMain} />
              <Text style={styles.badgeText}>{item.members}</Text>
            </View>
          </View>
          <Text style={styles.subText}>{item.desc}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.chatIconBox}>
        <Feather name="message-square" size={18} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.circleBtn}>
            <Feather name="chevron-left" size={24} color={COLORS.textMain} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Friends</Text>
          <TouchableOpacity style={[
            styles.circleBtn,
            { backgroundColor: COLORS.orange10 }
          ]}>
            <Feather name="user-plus" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <Pressable
          style={styles.searchBar}
          onPress={handleSearchPress}
        >
          <Feather
            name="search"
            size={20}
            color={COLORS.icon}
          />
          <TextInput
            ref={searchInputRef}
            placeholder="Search friends by name or ID"
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            returnKeyType="search"
          />
        </Pressable>

        <View style={styles.tabTrack}>
          <TouchableOpacity
            onPress={() => setActiveTab('All Friends')}
            style={[styles.tabBtn, activeTab === 'All Friends' && styles.activeTab]}
          >
            <Text style={[
              styles.tabText,
              activeTab === 'All Friends' && styles.activeTabText
            ]}>
              All Friends
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('Groups')}
            style={[styles.tabBtn, activeTab === 'Groups' && styles.activeTab]}
          >
            <Text style={[
              styles.tabText,
              activeTab === 'Groups' && styles.activeTabText
            ]}>
              Groups
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'Groups' ? (
          <FlatList
            data={groupsData}
            keyExtractor={item => item.id}
            renderItem={renderGroup}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <FlatList
            data={friendsData}
            keyExtractor={item => item.id}
            renderItem={renderFriend}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF'
  },

  container: {
    flex: 1,
    paddingHorizontal: 20
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textMain
  },

  circleBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },

  searchBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.bg,
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    alignItems: 'center'
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 15
  },

  tabTrack: {
    flexDirection: 'row',
    backgroundColor: COLORS.bg,
    borderRadius: 15,
    padding: 4,
    marginBottom: 20
  },

  tabBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 12
  },

  activeTab: {
    backgroundColor: '#FFF'
  },

  tabText: {
    color: COLORS.textSub,
    fontWeight: '600'
  },

  activeTabText: {
    color: COLORS.textMain
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 12
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  avatarWrapper: {
    marginRight: 15
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24
  },

  dot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#FFF'
  },

  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textMain
  },

  subText: {
    color: COLORS.textSub,
    fontSize: 13,
    marginTop: 2
  },

  groupTitleRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.bg,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    marginLeft: 8
  },

  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 3
  },

  chatIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center'
  }
});