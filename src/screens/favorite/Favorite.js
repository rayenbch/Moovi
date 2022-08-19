import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import defaultStyles from "../../config/styles";
import * as action from "../../store/actions/favoriteActions";
import * as favoriteMoviesAction from "../../store/actions/favoriteActions";
import { useSelector, useDispatch } from "react-redux";

const Favorite = () => {
  const { favoriteMovies } = useSelector((state) => state.movies);
  const [isLoadingImg, setIsLoadingImg] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.toggleFavoriteFilm());
  }, []);
  const renderItem = () => {
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
          <AddFavorite />
        </ImageBackground>

        {isLoadingImg && (
          <View style={styles.imageLoader}>
            <ActivityIndicator size="large" color={defaultStyles.colors.red} />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.ContainerFilmFavorite}>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={favoriteMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      {isLoadingImg && (
        <View style={styles.imageLoader}>
          <ActivityIndicator size="large" color={defaultStyles.colors.red} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: defaultStyles.colors.black1,
    flex: 1,
  },
  textStyle: {
    backgroundColor: defaultStyles.colors.white,
  },
  ContainerFilmFavorite: { flexDirection: "row" },
});

export default Favorite;
