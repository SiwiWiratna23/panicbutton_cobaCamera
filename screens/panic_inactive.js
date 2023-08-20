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


class PanicInactive extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <ScrollView px={'20px'} py={'60px'}>
          <Center>
            <Text fontSize={'26px'} color="#3E4450" textAlign="center">
              Panic Button diaktifkan
            </Text>
            <Separator height={'2'} />
            <Text
              fontSize={'14px'}
              color="#ACACAC"
              textAlign="center"
              px={'20px'}>
              Kami akan mengirimkan batuan ke lokasi anda
            </Text>
            <Separator height={'10'} />
            <Separator height={'10'} />
            <Separator height={'10'} />
            <Separator height={'10'} />
            <Separator height={'1px'} />
            <Center>
              <Pressable onPress={() => navigation.navigate('PanicActive')}>
                <Box bg="#FEF6F7" w={'223px'} h={'223px'} borderRadius="full">
                  <Box
                    bg="#FCE2E4"
                    w={'183px'}
                    h={'183px'}
                    borderRadius="full"
                    m={'20px'}>
                    <Box
                      bg="#F8B5BB"
                      w={'143px'}
                      h={'143px'}
                      borderRadius="full"
                      m={'20px'}></Box>
                  </Box>
                </Box>
              </Pressable>
            </Center>
            <Separator height={'10'} />
          <Separator height={'3'} />
          <HStack space="50px">
            <Ionicons name="camera" size={30} color="#AAAAAA" />
            <Ionicons name="videocam" size={30} color="#AAAAAA" />
          </HStack>
          <Separator height={'4'} />
            <Pressable onPress={() => navigation.navigate('Data')}>
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
                  Isi Data
                </Text>
              </Box>
            </Pressable>
          </Center>
        </ScrollView>
      </Box>
    );
  }
}

export default PanicInactive;
