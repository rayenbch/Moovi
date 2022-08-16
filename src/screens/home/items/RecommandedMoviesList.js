import React, { useEffect, useState } from "react";
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

  const renderItem = ({ item }) => {
    const pictureUri = `https://image.tmdb.org/t/p/original${item.poster_path}`;
    console.log("picture");
    return (
      <TouchableOpacity>
        <Image style={styles.styleFilm} source={{ uri: pictureUri }} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.SectionHeader}>
        <Text style={styles.TextRecommanded}>Recommandes</Text>
        <Text style={styles.TextList}>Voir tout</Text>
      </View>
      <View style={styles.ContainerFilm}>
        <FlatList
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
