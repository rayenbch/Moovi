import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import defaultStyles from "../../../config/styles";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../../store/actions/moviActions";
import * as favoriteMoviesAction from "../../../store/actions/favoriteActions";
import IconHeart from "../../../assets/svg/icon-heart.svg";
import IconHeartRed from "../../../assets/svg/icon-heart-on-red.svg";

const RecommandedMoviesList = () => {
  const { movies, favoriteMovies } = useSelector((state) => state.movies);
  const [isLoadingImg, setIsLoadingImg] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.getRecommendedMovies());
  }, []);

  const renderItem = ({ item }) => {
    const pictureUri = `https://image.tmdb.org/t/p/original${item.poster_path}`;
    console.log(pictureUri);

    return (
      <TouchableOpacity>
        <ImageBackground
          style={styles.styleFilm}
          source={{ uri: pictureUri }}
          onLoadEnd={() => setIsLoadingImg(false)}
        >
          <AddFavorite item={item} />
        </ImageBackground>

        {isLoadingImg && (
          <View style={styles.imageLoader}>
            <ActivityIndicator size="large" color={defaultStyles.colors.red} />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const AddFavorite = ({ item }) => {
    return (
      <View style={styles.IconHeart}>
        <TouchableOpacity
          onPress={() =>
            dispatch(favoriteMoviesAction.toggleFavoriteFilm(item))
          }
        >
          {favoriteMovies &&
          favoriteMovies?.findIndex((el) => el.id === item.id) !== -1 ? (
            <IconHeartRed />
          ) : (
            <IconHeart />
          )}
        </TouchableOpacity>
      </View>
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
  IconHeart: {
    paddingLeft: 160,
  },
});

export default RecommandedMoviesList;
