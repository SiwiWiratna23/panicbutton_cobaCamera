import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  Text,
  Box,
  ScrollView,
  HStack,
  Button,
  Pressable,
  Center,
} from "native-base";
import Separator from "../components/separator";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/FontAwesome";


class CobaCamera extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pickedImagePaths: [], // Inisialisasi sebagai array kosong
    };
  }

  showImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState((prevState) => ({
        pickedImagePaths: prevState.pickedImagePaths.concat(result.uri),
      }));
      console.log(result.uri);
    }
  };

  openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    console.log(result);

    if (!result.cancelled) {
      this.setState((prevState) => ({
        pickedImagePaths: prevState.pickedImagePaths.concat(result.uri),
      }));
      console.log(result.uri);
    }
  };

  removeImage = (index) => {
    this.setState((prevState) => {
      const updatedImagePaths = [...prevState.pickedImagePaths];
      updatedImagePaths.splice(index, 1);
      return { pickedImagePaths: updatedImagePaths };
    });
  };

  render() {
    const { pickedImagePaths } = this.state;
    const { navigation } = this.props;

    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <Separator height={"5"} />
        <View px={"20px"} py={"20px"}>
          <Text fontSize={"20px"} color="#2F2F2F" textAlign="center">
            Unggah Gambar
          </Text>
          <Separator height={"2"} />
          <Text fontSize={"12px"} color="#ACACAC" textAlign="center">
            Anda dapat menambahkan dan menghapus gambar yang ditambahkan
          </Text>
          <View>
            <Separator height={"5"} />
            <HStack space={"5"} justifyContent={"center"}>
              <Button
                bg="#007DFE"
                borderRadius={"11px"}
                onPress={this.showImagePicker}
              >
                Pilih gambar
              </Button>
              <Button
                bg="#007DFE"
                borderRadius={"11px"}
                onPress={this.openCamera}
              >
                Buka camera
              </Button>
            </HStack>
            <Separator height={"5"} />
          </View>
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
        >
          <View style={styles.imageContainer}>
            {pickedImagePaths.map((imagePath, index) => (
              <View key={index} style={styles.imageWrapper}>
                <Image source={{ uri: imagePath }} style={styles.image} />
                <Pressable
                  style={styles.removeButton}
                  onPress={() => this.removeImage(index)}
                >
                  <Icon name="times-circle" size={22} color="white" />
                </Pressable>
              </View>
            ))}
          </View>
        </ScrollView>
        <Center pt={"20px"} pb={"30px"}>
          <Pressable
            onPress={() => this.props.navigation.navigate("FindLocation3")}
          >
            <Box
              mt={"10px"}
              w={"200px"}
              h={"40px"}
              borderRadius={"11px"}
              bg="#007DFE"
              p={"7px"}
            >
              <HStack justifyContent={"center"}>
                <Text
                  fontSize={"14px"}
                  color="#FFFFFF"
                  textAlign="center"
                  fontWeight="medium"
                >
                  Selanjutnya
                </Text>
              </HStack>
            </Box>
          </Pressable>
        </Center>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  imageWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
    // paddingHorizontal: 8,
  },
  removeButton: {
    position: "absolute",
    top: 2,
    right: 2,
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  removeText: {
    color: "white",
    fontSize: 18,
  },
  // scrollContent: {
  //   flexGrow: 1, // Menyebabkan konten memanjang sejauh layar
  // },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 11,
    margin: 5,
  },
});

export default CobaCamera;