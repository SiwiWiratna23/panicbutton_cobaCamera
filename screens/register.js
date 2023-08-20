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
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <ScrollView px={'20px'} py={'60px'}>
          <Text
            fontSize={'20px'}
            color="#3E4450"
            textAlign="center"
            fontWeight="Bold">
            Register
          </Text>
          <Separator height={'10'} />
          <Center>
            <Image
              bg="#FFFFFF"
              w={'220px'}
              h={'220px'}
              borderRadius={'10px'}
              source={require('../assets/Register.png')}
            />
          </Center>
          <Separator height={'5'} />
          <VStack>
            <Text p={'5px'} fontSize={'12px'} color="#3E4450" textAlign="left">
              Email
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
                    size={20}
                    mr={'10px'}
                    color="muted.400"
                  />
                </Pressable>
              }
            />
          </VStack>
          <Separator height={'5'} />
          <HStack space={'3px'} alignSelf="center">
            <Text fontSize={'12px'} color="#3E4450" textAlign="center">
              Sudah punya akun?
            </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text fontSize={'12px'} color="#007DFE" textAlign="center">
                Login
              </Text>
            </Pressable>
          </HStack>
          <Separator height={'10'} />
          <Center>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Box
                mt={'10px'}
                w={'120px'}
                h={'40px'}
                borderRadius={'11px'}
                bg="#007DFE"
                p={'7px'}>
                <Text
                  fontSize={'16px'}
                  color="#FFFFFF"
                  textAlign="center"
                  fontWeight="medium">
                  Register
                </Text>
              </Box>
            </Pressable>
          </Center>
        </ScrollView>
      </Box>
    );
  }
}

export default Register;
