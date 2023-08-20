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
  TextArea,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Separator from '../components/separator';

class Data extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <ScrollView px={'20px'} py={'20px'}>
          <Text fontSize={'26px'} color="#3E4450" textAlign="center">
            Data Pelapor
          </Text>
          <Separator height={'2'} />
          <Text fontSize={'14px'} color="#ACACAC" textAlign="center">
            Isikan data lanjutan dibawah agar kami dapat mengetahui anda lebih
            jauh
          </Text>
          <Separator height={'5'} />
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
              Nama Kejadian
            </Text>
            <Input
              w={'100%'}
              h={'40px'}
              borderRadius={'13px'}
              bg="#F5F5F5"
              alignSelf="center"
            />
            <Text p={'5px'} fontSize={'12px'} color="#3E4450" textAlign="left">
              Lokasi Kejadian
            </Text>
            <Input
              w={'100%'}
              h={'40px'}
              borderRadius={'13px'}
              bg="#F5F5F5"
              alignSelf="center"
            />
            <Text p={'5px'} fontSize={'12px'} color="#3E4450" textAlign="left">
              Waktu Kejadian
            </Text>
            <Input
              w={'100%'}
              h={'40px'}
              borderRadius={'13px'}
              bg="#F5F5F5"
              alignSelf="center"
            />
            <Text p={'5px'} fontSize={'12px'} color="#3E4450" textAlign="left">
              Keterangan
            </Text>
            <TextArea
              w={'100%'}
              h={'70px'}
              borderRadius={'13px'}
              bg="#F5F5F5"
              alignSelf="center"
            />
            <Text p={'5px'} fontSize={'12px'} color="#3E4450" textAlign="left">
              Gambar
            </Text>
            <Pressable
              w={'50%'}
              h={'30px'}
              borderRadius={'11px'}
              bg="#AAAAAA"
              alignSelf="left">
              <Text
                p={'5px'}
                fontSize={'12px'}
                color="#FFFFFF"
                textAlign="center">
                Ambil Gambar
              </Text>
            </Pressable>
          </VStack>
          <Separator height={'10'} />
          <Center>
            <Pressable onPress={() => navigation.navigate('DataSubmitted')}>
              <Box
                mt={'10px'}
                w={'200px'}
                h={'40px'}
                borderRadius={'11px'}
                bg="#007DFE"
                p={'7px'}>
                <Text
                  fontSize={'16px'}
                  color="#FFFFFF"
                  textAlign="center"
                  fontWeight="medium">
                  Submit
                </Text>
              </Box>
            </Pressable>
          </Center>
        </ScrollView>
      </Box>
    );
  }
}

export default Data;
