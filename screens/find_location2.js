import React, { useState, useEffect } from "react";
import {
  Text,
  Box,
  HStack,
  ScrollView,
  Pressable,
  Image,
  Center,
  CheckIcon,
  Select,
} from "native-base";
import { Alert, TouchableOpacity, Linking } from "react-native";
import * as Location from "expo-location";
import Ionicons from "@expo/vector-icons/Ionicons";
import Separator from "../components/separator";

const FindLocation2 = ({ navigation }) => {
  const [service, setService] = useState("");
  const [isFetchingLocation, setIsFetchingLocation] = useState(true);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "Wait, we are fetching your location... "
  );

  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, []);

  const CheckIfLocationEnabled = async () => {
    const enabled = await Location.hasServicesEnabledAsync();
    setLocationServiceEnabled(enabled);
  };

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false }
      );
      setIsFetchingLocation(false);
      return;
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      setLatitude(latitude);
      setLongitude(longitude);

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      let address = response
        .map(
          (item) =>
            `${item.street} ${item.name}, ${item.city}, ${item.postalCode}`
        )
        .join("\n");
      setDisplayCurrentAddress(address);
      setIsFetchingLocation(false);
    }
  };

  const handleAddressPress = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      displayCurrentAddress
    )}`;

    Linking.canOpenURL(mapsUrl)
      .then((supported) => {
        if (!supported) {
          console.log("Opening Google Maps is not supported on this device.");
        } else {
          return Linking.openURL(mapsUrl);
        }
      })
      .catch((error) => console.error("Error opening Google Maps:", error));
  };

  return (
    <Box flex={1} bg="#FFFFFF" safeArea={true}>
      <ScrollView px={"20px"} py={"30px"}>
        <Center>
          <Text fontSize={"26px"} color="#3E4450" textAlign="center">
            Panic Button
          </Text>
          <Separator height={"5"} />
        </Center>
        <Box w={"88%"} h={"6%"}>
          <HStack space={"5px"}>
            <Ionicons name="ios-location-sharp" size={23} color="black" />
            <Box justifyContent={"center"}>
              <TouchableOpacity onPress={handleAddressPress}>
                <Text fontSize={"12px"} color="#3E4450" textAlign="left">
                  {displayCurrentAddress}
                </Text>
              </TouchableOpacity>
            </Box>
          </HStack>
        </Box>
        <Box w={"88%"} h={"5%"}>
          <HStack space={"5px"}>
            <Ionicons name="md-locate-sharp" size={23} color="black" />
            <Box py={"5px"}>
              {isFetchingLocation ? (
                <Text fontSize={"12px"} color="#3E4450" textAlign="left">
                  Wait, we are fetching your location...
                </Text>
              ) : (
                <Text fontSize={"12px"} color="#3E4450" textAlign="left">
                  {latitude}, {longitude}
                </Text>
              )}
            </Box>
          </HStack>
        </Box>
        <TouchableOpacity onPress={handleAddressPress}>
          <Text ml={"30px"} fontSize={"12px"} color="#007DFE" textAlign="left">
            Buka maps untuk melihat koordinat lokasi
          </Text>
        </TouchableOpacity>
        <Center>
          <Separator height={"8"} />
          <Box w={"98%"} h={"40px"} borderRadius="md">
            <Select
              selectedValue={service}
              accessibilityLabel="Choose Service"
              placeholder="Pilih keadaan darurat"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="s" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="Kebakaran" value="Kebakaran" />
              <Select.Item label="Kecelakaan" value="Kecelakaan" />
              <Select.Item label="Darurat Medis" value="Darurat_Medis" />
              <Select.Item label="Tindak Kejahatan" value="Tindak_Kejahatan" />
              <Select.Item label="Bencana Alam" value="Bencana_Alam" />
              <Select.Item
                label="Pencarian Pertolongan"
                value="Pencarian_Pertolongan"
              />
              <Select.Item label="Hewan Buas" value="Hewan_Buas" />
              <Select.Item label="Lainnya" value="Lainnya" />
            </Select>
          </Box>
          <Separator height={"10"} />
          <Separator height={"5"} />
          <Center>
            <Pressable onPress={() => navigation.navigate("FindLocation3")}>
              <Box bg="#FEF6F7" w={"223px"} h={"223px"} borderRadius="full">
                <Box
                  bg="#FCE2E4"
                  w={"183px"}
                  h={"183px"}
                  borderRadius="full"
                  m={"20px"}
                >
                  <Box
                    bg="#F8B5BB"
                    w={"143px"}
                    h={"143px"}
                    borderRadius="full"
                    m={"20px"}
                  ></Box>
                </Box>
              </Box>
            </Pressable>
          </Center>
          <Separator height={"10"} />
          <Separator height={"3"} />
          <Text w={"85%"} fontSize={"12px"} color="#3E4450" textAlign="center">
            Klik tombol Tambahkan Bukti untuk menambahkan gambar kejadian
          </Text>
          <Separator height={"4"} />
          <Pressable onPress={() => navigation.navigate("CobaCamera")}>
            <Box
              mt={"10px"}
              w={"200px"}
              h={"40px"}
              borderRadius={"11px"}
              bg="#007DFE"
              p={"7px"}
            >
              <HStack space={"10px"} justifyContent={"center"}>
                <Ionicons name="camera" size={22} color="#FFFFFF" />
                <Text
                  fontSize={"14px"}
                  color="#FFFFFF"
                  textAlign="center"
                  fontWeight="medium"
                  py={"2px"}
                >
                  Tambahkan bukti
                </Text>
              </HStack>
            </Box>
          </Pressable>
          <Separator height={"10"} />
        </Center>
      </ScrollView>
    </Box>
  );
};

export default FindLocation2;