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
import {
  ImageBackground,StyleSheet 
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Separator from '../components/separator';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };
  render() {
    const { navigation } = this.props;
    return (
      <Box flex={1} safeArea={true}>
          <ImageBackground
           source={require('../assets/LoginRegister.jpg')}
           style={styles.imageBackground}>
          </ImageBackground>
        <ScrollView
          mt={'250px'}
          bg="#FFFFFF"
          borderTopRadius={"30px"}
          shadow="9"
          px={'20px'} py={'20px'}
        >
          <VStack space={"2px"}>
          <Text
            fontSize={'26px'}
            color="#3E4450"
            textAlign="left"
            fontWeight="bold">
            Daftar
          </Text>
          <Text fontSize={'12px'} color="#3E4450" textAlign="left">
          Daftar untuk melanjutkan
          </Text>
          </VStack>
          <Separator height={'8'} />
          <VStack>
            <Text p={'5px'} fontSize={'12px'} color="#3E4450" textAlign="left">
              Nama
            </Text>
            <Input
              w={'100%'}
              h={'40px'}
              borderRadius={'13px'}
              bg="#F5F5F5"
              alignSelf="center"
            />
            <Text p={'5px'} fontSize={'12px'} color="#3E4450" textAlign="left">
              No Telepon
            </Text>
            <Input
              w={'100%'}
              h={'40px'}
              borderRadius={'13px'}
              bg="#F5F5F5"
              alignSelf="center"
            />
            <Text p={'5px'} fontSize={'12px'} color="#3E4450" textAlign="left">
              Password
            </Text>
            <Input
              w={{
                base: '100%',
                md: '25%',
              }}
              h={'40px'}
              borderRadius={'13px'}
              bg="#F5F5F5"
              alignSelf="center"
              type={this.state.show ? 'text' : 'password'}
              InputRightElement={
                <Pressable onPress={this.toggleShow}>
                  <Ionicons
                    as={Ionicons}
                    name={this.state.show ? 'eye' : 'eye-off'}
                    size={18}
                    marginRight={15}
                    color="muted.400"
                  />
                </Pressable>
              }
            />
          </VStack>
          <Separator height={'8'} />
          <Pressable onPress={() => navigation.navigate('OTP_Verification')}>
            <Box
              mt={'10px'}
              w={'100%'}
              h={'42px'}
              borderRadius={'11px'}
              bg="#007DFE"
              p={'7px'}>
              <Text
                fontSize={'16px'}
                color="#FFFFFF"
                textAlign="center"
                fontWeight="medium">
                Daftar
              </Text>
            </Box>
          </Pressable>
          <Separator height={'5'} />
          <HStack space={'5px'} alignSelf="center">
            <Text fontSize={'12px'} color="#3E4450" textAlign="center">
            Sudah mempunyai akun? 
            </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text fontSize={'12px'} color="#007DFE" textAlign="center">
              Masuk
              </Text>
            </Pressable>
          </HStack>
        </ScrollView>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '896%',
  },
});

export default Register;
