import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";

const RegistrationCreatingAccount = ({navigation}) => {
  return (
    <View style={styles.registrationCreatingAccount}>
      <Pressable style={styles.signInButton} onPress={() => {}}>
        <LinearGradient
          style={styles.signInButton1}
          locations={[0, 1]}
          colors={["#006c3d", "#8cc56e"]}
          useAngle={true}
          angle={-88.17}
        />
        <Text style={styles.signUp}>Sign Up</Text>
      </Pressable>
      <View style={styles.usernamepasswordInput}>
        <View style={[styles.usernamePasswordBoxes, styles.usernameLayout]} />
        <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
        <Image
          style={[styles.icons8Lock961, styles.emailIconLayout]}
          resizeMode="cover"
          source={require("../../../assets/icons/password.png")}
        />
        <View style={[styles.usernamePasswordBoxes1, styles.usernameLayout]} />
        <Text style={[styles.emailAddress, styles.passwordTypo]}>
          Email Address
        </Text>
        <Image
          style={[styles.emailIcon, styles.emailIconLayout]}
          resizeMode="cover"
          source={require("../../../assets/icons/email.png")}
        />
      </View>
      <View style={[styles.signUpTitle, styles.userLoginLayout]}>
        <View style={[styles.signUpTitleBox, styles.boxBg]} />
        <View style={[styles.userLogin, styles.userLoginLayout]}>
          <Text style={[styles.userLogin1, styles.logoBoxPosition]}>
            Sign Up
          </Text>
        </View>
      </View>
      <View style={[styles.logo, styles.logoPosition]}>
        <View style={[styles.logoBox, styles.logoBoxPosition]} />
        <Image
          style={styles.image2Icon}
          resizeMode="cover"
          source={require("../../../assets/icons/tzuchilogo.png")}
        />
      </View>
      <Pressable style={[styles.signUpButton, styles.logoPosition]}
        onPress={() => {
            navigation.navigate("Login");
        }}>
        <Text style={[styles.loginHere, styles.loginHereTypo]}>Login Here</Text>
        <Text style={[styles.haveAnAccount, styles.loginHereTypo]}>
          Have an account?
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  usernameLayout: {
    height: 52,
    width: 315,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    left: -1,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  passwordTypo: {
    height: 10,
    width: 145,
    color: Color.colorSilver,
    fontSize: FontSize.size_xs,
    left: 47,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.sFPro,
    position: "absolute",
  },
  emailIconLayout: {
    height: 24,
    width: 24,
    left: 12,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  userLoginLayout: {
    height: 26,
    width: 108,
    position: "absolute",
  },
  boxBg: {
    display: "none",
    backgroundColor: Color.colorGainsboro_200,
  },
  logoBoxPosition: {
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  logoPosition: {
    left: 122,
    width: 149,
    position: "absolute",
  },
  loginHereTypo: {
    height: 16,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.sFPro,
    position: "absolute",
  },
  signInButton1: {
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    height: 50,
    width: 313,
    position: "absolute",
  },
  signUp: {
    top: 16,
    color: Color.colorWhite,
    width: 86,
    height: 21,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.sFPro,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    left: 122,
    position: "absolute",
  },
  signInButton: {
    top: 471,
    height: 50,
    width: 313,
    left: 40,
    position: "absolute",
  },
  usernamePasswordBoxes: {
    top: 56,
  },
  password: {
    top: 77,
  },
  icons8Lock961: {
    top: 70,
  },
  usernamePasswordBoxes1: {
    top: -1,
  },
  emailAddress: {
    top: 20,
  },
  emailIcon: {
    top: 15,
  },
  usernamepasswordInput: {
    top: 334,
    height: 107,
    width: 313,
    left: 40,
    position: "absolute",
  },
  signUpTitleBox: {
    top: -25,
    left: 5,
    height: 37,
    width: 149,
    position: "absolute",
  },
  userLogin1: {
    color: Color.colorBlack,
    fontWeight: "500",
    top: "0%",
    height: "100%",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.sFPro,
    fontSize: FontSize.size_xl,
  },
  userLogin: {
    left: 0,
    top: 0,
  },
  signUpTitle: {
    top: 278,
    left: 40,
    width: 108,
  },
  logoBox: {
    right: "0%",
    bottom: "0%",
    display: "none",
    backgroundColor: Color.colorGainsboro_200,
  },
  image2Icon: {
    top: -7,
    left: -2,
    width: 153,
    height: 101,
    position: "absolute",
  },
  logo: {
    top: 117,
    height: 88,
    width: 149,
  },
  loginHere: {
    top: 24,
    left: 20,
    color: "#439755",
    width: 109,
    fontWeight: "700",
    height: 16,
    textAlign: "center",
  },
  haveAnAccount: {
    fontWeight: "100",
    color: Color.colorBlack,
    width: 149,
    left: 0,
    top: 0,
  },
  signUpButton: {
    top: 551,
    height: 53,
    width: 149,
    backgroundColor: Color.colorWhitesmoke,
    left: 122,
  },
  registrationCreatingAccount: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke,
  },
});

export default RegistrationCreatingAccount;