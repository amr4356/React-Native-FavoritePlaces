import { FlatList } from "react-native";

function renderPlaceItem() {}

export default function PlacesList({ places }) {
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={renderPlaceItem}
    />
  );
}
