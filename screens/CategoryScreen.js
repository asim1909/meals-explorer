import { View, Text, Pressable, StyleSheet, FlatList, Animated } from "react-native";
import React, { useRef } from "react";
import { CATEGORIES } from "../utils/data/dummy-data";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Make sure expo/vector-icons is installed

const CategoryCard = ({ item, onPress }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.97,
      useNativeDriver: true,
      speed: 50,
      bounciness: 8,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 8,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        style={styles.categoryItem}
        onPress={onPress}
        android_ripple={{ color: "#ececec", borderless: false }}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Ionicons name="chevron-forward" size={22} color="#bbb" style={styles.chevron} />
      </Pressable>
    </Animated.View>
  );
};

const CategoryScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <CategoryCard
      item={item}
      onPress={() => navigation.navigate("DishList", { categoryId: item.id })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f7",
  },
  list: {
    paddingVertical: 16,
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    marginVertical: 1, // reduced from 4 to 1
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  title: {
    flex: 1,
    color: "#111",
    fontWeight: "600",
    fontSize: 19,
    letterSpacing: 0.2,
    textAlign: "left",
  },
  chevron: {
    marginLeft: 8,
  },
  separator: {
    height: 4, // reduced from 8 to 2
    backgroundColor: "transparent",
  },
});

export default CategoryScreen;