import { View, Text, Image, StyleSheet, FlatList, Pressable } from "react-native";
import React from "react";
import { MEALS } from "../utils/data/dummy-data";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const DishListScreen = ({ route }) => {
  const navigation = useNavigation();
  const data = MEALS.filter((item) =>
    item.categories.includes(route.params.categoryId)
  );

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate("DishDetail", { id: item.id })}
      android_ripple={{ color: "#ececec" }}
    >
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={22} color="#bbb" style={styles.chevron} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
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
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  image: {
    width: 54,
    height: 54,
    borderRadius: 10,
    marginRight: 16,
    backgroundColor: "#e0e0e0",
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 17,
    color: "#222",
  },
  chevron: {
    marginLeft: 8,
  },
  separator: {
    height: 10,
    backgroundColor: "transparent",
  },
});

export default DishListScreen;