import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Login = ({ navigation }) => {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.middle}>
        <Text style={styles.LoginText}>Login</Text>
      </View>
      <View style={styles.register}>
        <Text>Don't have an account</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {/* mobile number, password */}
      <View style={styles.buttonStyle}>
        <View style={styles.mobileInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="mobile-alt" size={24} color="black" />}
                size="sm"
                m={2}
                _light={{
                  color: 'black',
                }}
                _dark={{
                  color: 'gray.300',
                }}
              />
            }
            variant="outline"
            placeholder="Enter mobile"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
        </View>
      </View>

      {/* password Input field */}
      <View style={styles.buttonStylesX}>
        <View style={styles.passwordInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
                _light={{
                  color: 'black',
                }}
                _dark={{
                  color: 'gray.300',
                }}
              />
            }
            variant="outline"
            secureTextEntry={true}
            placeholder="Enter Password"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
        </View>
      </View>
      {/* Button */}

      <View style={styles.buttonStyles}>
        <Button style={styles.buttonDesign}>Log in</Button>
      </View>

      {/* Line */}

      <View style={styles.lineStyles}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        <View>
          <Text style={{ width: 50, textAlign: 'center' }}>Or</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
      </View>

      {/* BOX */}

      {/* <View style={styles.boxStyles}>
        <Box
          onPress={() => navigation.navigate('#')}
          style={{ height: 80, width: 80, marginLeft: 20 }}
          shadow={3}
          _light={{
            backgroundColor: 'gray.50',
          }}
          _dark={{
            backgroundColor: 'gray.50',
          }}
        >
          <AspectRatio ratio={1 / 1}>
            <Image
              roundedTop="lg"
              source={{
                uri:
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
      </View> */}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  LoginText: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold',
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  register: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
  },
  signUpText: {
    fontWeight: 'bold',
  },
  mobileInput: {
    marginTop: 10,
    marginRight: 5,
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonStylesX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonDesign: {
    backgroundColor: '#7d0404',
  },
  lineStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
});

export default () => {
  <NativeBaseProvider>
    <Login />
  </NativeBaseProvider>;
};
