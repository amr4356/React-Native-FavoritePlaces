import { Image, Pressable, StyleSheet, View } from "react-native";

export default function PlaceItem({ place, onSelect }) {
  return (
    <Pressable onPress={onSelect} >
      <Image source={{ uri: place.imageUri }} />
      <View>
        <View>{place.title}</View>
        <View>{place.address}</View>
      </View>
    </Pressable>
  );
}

const styles=StyleSheet.create({

});
