import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import defaultStyles from "../../config/styles";
import * as action from "../../store/actions/favoriteActions";
import * as favoriteMoviesAction from "../../store/actions/favoriteActions";
import { useSelector, useDispatch } from "react-redux";

import IconHeart from "../../assets/svg/icon-heart.svg";
import IconHeartRed from "../../assets/svg/icon-heart-on-red.svg";
import FavorisHeader from "./FavorisHeader";

const Favorite = () => {
  const { favoriteMovies } = useSelector((state) => state.movies);
  const [isLoadingImg, setIsLoadingImg] = useState(true);
  const dispatch = useDispatch();

  const renderItem = (item) => {
    const pictureUri = `https://image.tmdb.org/t/p/original${item.poster_path}`;
    console.log(pictureUri);
    console.log("FavoriteMovies", favoriteMovies);
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
          {favoriteMovies && favoriteMovies?.findIndex((el) => el.id) !== -1 ? (
            <IconHeartRed />
          ) : (
            <IconHeart />
          )}
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.ContainerHeader}>
      <FavorisHeader />
      <View style={styles.ContainerFilmFavorite}>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={favoriteMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ContainerHeader: {
    alignContent: "center",

    flex: 1,
  },
  ContainerFilmFavorite: {
    flex: 1,
    backgroundColor: defaultStyles.colors.black,
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

export default Favorite;
