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

class Login extends Component {
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
          px={'20px'} py={'20px'}>
          <VStack space={"2px"}>
            <Text
              fontSize={'26px'}
              color="#3E4450"
              textAlign="left"
              fontWeight="bold">
              Masuk
            </Text>
            <Text fontSize={'12px'} color="#3E4450" textAlign="left">
            Masuk untuk melanjutkan
            </Text>
          </VStack>
          <Separator height={'10'} />
          <VStack>
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
          <Separator height={'5'} />
            <Pressable onPress={() => navigation.navigate('LoginSucced_Submitted')}>
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
                  Masuk
                </Text>
              </Box>
            </Pressable>
            <Separator height={'6'} />
            <Center>
              <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
                <Text fontSize={'12px'} color="#ACACAC">
                  Lupa password?
                </Text>
              </Pressable> 
            </Center>
            <Separator height={'5'} />
            <Pressable onPress={() => navigation.navigate('Register')}>
              <Box
                mt={'10px'}
                w={'100%'}
                h={'42px'}
                borderRadius={'11px'}
                bg="#FFFFFF"
                borderWidth="1" 
                borderColor="#8A8A8A"
                shadow="2"
                p={'7px'}>
                <Text
                  fontSize={'16px'}
                  color="#000000"
                  textAlign="center"
                  fontWeight="medium">
                  Daftar
                </Text>
              </Box>
            </Pressable>
        </ScrollView>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    // resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '896%',
  },
});

export default Login;
