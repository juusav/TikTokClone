import React from "react";
import { FlatList, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Post from "../components/Post";
import posts from "../data/posts";
import Navigation from "../navigation/BottomNav";

const HomeScreen = () => {

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").height}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
      />
      <Navigation />
    </SafeAreaView>
  );
};

export default HomeScreen;
