import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  Text,
  Box,
  ScrollView,
  HStack,
  Button,
  Pressable,
  Center,
} from 'native-base';
import Separator from '../components/separator';
import * as ImagePicker from 'expo-image-picker';

class CobaCamera extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pickedImagePath: '',
    };
  }

  showImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    console.log(result);

    if (!result.cancelled) {
      this.setState({ pickedImagePath: result.uri });
      console.log(result.uri);
    }
  }

  openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    console.log(result);

    if (!result.cancelled) {
      this.setState({ pickedImagePath: result.uri });
      console.log(result.uri);
    }
  }

  render() {
    const { pickedImagePath } = this.state;
    const { navigation } = this.props;

    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <ScrollView px={'20px'} py={'50px'}>
          <Text fontSize={'20px'} color="#2F2F2F" textAlign="center">
            Upload Gambar 
          </Text>
          <Separator height={'2'} />
          <Text fontSize={'12px'} color="#ACACAC" textAlign="center">
            Anda dapat menambahkan dan menghapus gambar yang ditambahkan
          </Text>
          <View>
            <Separator height={'5'} />
            <HStack space={'5'} justifyContent={'center'}>
              <Button bg='#007DFE' borderRadius={'11px'} onPress={this.showImagePicker}>
                Select an image
              </Button>
              <Button bg='#007DFE' borderRadius={'11px'} onPress={this.openCamera}>
                Open camera
              </Button>
            </HStack>
            <Separator height={'5'} />
            <Box>
              {pickedImagePath !== '' && (
                <Image source={{ uri: pickedImagePath }} style={styles.image} />
              )}
            </Box>
          </View>
          <Separator height={'10'} />
          <Center>
            <Pressable onPress={() => this.props.navigation.navigate('FindLocation3')}>
              <Box mt={'10px'} w={'200px'} h={'40px'} borderRadius={'11px'} bg="#007DFE" p={'7px'}>
                <HStack justifyContent={'center'}>
                  <Text fontSize={'14px'} color="#FFFFFF" textAlign="center" fontWeight="medium">
                    Selanjutnyaaaa
                  </Text>
                </HStack>
              </Box>
            </Pressable>
          </Center>
        </ScrollView>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
    borderRadius: 11,
  },
});

export default CobaCamera;
