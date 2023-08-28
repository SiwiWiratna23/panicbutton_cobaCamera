import React, { Component } from 'react';
import {
  Text,
  Box,
  HStack,
  ScrollView,
  VStack,
  Pressable,
  FlatList,
  Image,
  View,
  Input,
  NBBox,
  Divider,
  Center,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Separator from '../components/separator';

class Start extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Image
              bg="#FFFFFF"
              w={'100%'}
              h={'100%'}
              source={require('../assets/Screen.png')}
            />
          </Pressable>
      </Box>
    );
  }
}

export default Start;
