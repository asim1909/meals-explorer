import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../utils/data/dummy-data";
import UnOrderedList from "../components/UnOrderedList";

const DishDetail = ({ route }) => {
  const { id } = route.params;
  const meal = MEALS.find((item) => item.id == id);

  if (!meal) {
    return (
      <View style={styles.centered}>
        <Text>Dish not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: meal.imageUrl }} />
        <View style={styles.content}>
          <Text style={styles.title}>{meal.title}</Text>
          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Duration</Text>
              <Text style={styles.detailValue}>{meal.duration} min</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Complexity</Text>
              <Text style={styles.detailValue}>{meal.complexity}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Affordability</Text>
              <Text style={styles.detailValue}>{meal.affordability}</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <UnOrderedList data={meal.ingredients} />
          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>Steps</Text>
          <UnOrderedList data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f7",
  },
  scrollContent: {
    paddingBottom: 32,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 22,
    margin: 18,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 220,
    backgroundColor: "#e0e0e0",
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 22,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#222",
    marginBottom: 18,
    letterSpacing: 0.2,
    textAlign: "left",
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
    marginTop: 2,
    gap: 8,
  },
  detailItem: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 2,
  },
  detailLabel: {
    fontSize: 13,
    color: "#aaa",
    marginBottom: 2,
    fontWeight: "500",
  },
  detailValue: {
    fontSize: 15,
    fontWeight: "600",
    color: "#444",
  },
  divider: {
    height: 1,
    backgroundColor: "#ececec",
    marginVertical: 18,
    borderRadius: 1,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 10,
    color: "#888",
    letterSpacing: 0.1,
    textAlign: "left",
  },
});

export default DishDetail;