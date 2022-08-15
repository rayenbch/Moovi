import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import defaultStyles from "../../../config/styles";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../../store/actions/moviActions";
const RecommandedMoviesList = () => {
  const { movies } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.getRecommendedMovies());
  }, []);
  const data = [
    {
      id: 1,
      image: require("../../../assets/img/captain-marvel-studio-film.jpg"),
    },
    { id: 2, image: require("../../../assets/img/filmDragon.jpg") },
    { id: 3, image: require("../../../assets/img/filmJohnnyEnglish.jpg") },
    { id: 4, image: require("../../../assets/img/filmVenom.jpg") },
    { id: 5, image: require("../../../assets/img/filmSpiderMan.jpg") },
  ];
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <Image style={styles.styleFilm} source={item.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.SectionHeader}>
        <Text style={styles.TextRecommanded}>Recommander</Text>
        <Text style={styles.TextList}>Voir tout</Text>
      </View>
      <View style={styles.ContainerFilm}>
        <FlatList
          vertical={true}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 30,
  },

  TextRecommanded: {
    color: defaultStyles.colors.white,
    fontSize: 25,
    marginHorizontal: 10,
    paddingLeft: 10,
  },
  TextList: {
    color: defaultStyles.colors.white,
    fontSize: 14,
  },
  ContainerFilm: {
    flexDirection: "row",
  },

  styleFilm: {
    width: 180,
    height: 250,
    margin: 10,
  },
});

export default RecommandedMoviesList;
