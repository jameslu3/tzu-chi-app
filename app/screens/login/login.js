import * as React from "react";
import { Text, StyleSheet, Pressable, View, Image, TouchableOpacity } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";

const LoginPreExistingAccount = ({navigation}) => {
  return (
    <View style={styles.loginPreExistingAccount}>
      <View style={[styles.signUpButton, styles.logoPosition]}>
        <Pressable style={styles.signUp} onPress={() => {
          navigation.navigate("Registration");
        }}>
          <Text style={[styles.signUp1, styles.signUp1Layout]}>Sign Up</Text>
        </Pressable>
        <Text style={[styles.dontHaveAn, styles.dontHaveAnTypo]}>
          Don’t have an account?
        </Text>
      </View>
      <TouchableOpacity>
        <Pressable style={styles.signInButton} onPress={() => {}}>
          <LinearGradient
            style={styles.signInButton1}
            locations={[0, 1]}
            colors={["#006c3d", "#8cc56e"]}
            useAngle={true}
            angle={-88.17}
          />
          <Text style={styles.signIn}>Sign In</Text>
        </Pressable>
      </TouchableOpacity>
      <Pressable
        style={[styles.forgotPassword, styles.signUp1Layout]}
        onPress={() => {
          navigation.navigate("ForgotPassword");
        }}
      >
        <View style={[styles.forgotPasswordBox, styles.boxBg]} />
        <Text style={[styles.forgotPassword1, styles.dontHaveAnTypo]}>
          Forgot Password?
        </Text>
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
            User Login
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
    </View>
  );
};

const styles = StyleSheet.create({
  logoPosition: {
    left: 122,
    width: 149,
    position: "absolute",
  },
  signUp1Layout: {
    height: 16,
    width: 109,
  },
  dontHaveAnTypo: {
    color: Color.colorBlack,
    fontWeight: "100",
    left: 0,
    top: 0,
    height: 16,
    textAlign: "center",
    fontFamily: FontFamily.sFPro,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  boxBg: {
    display: "none",
    backgroundColor: Color.colorGainsboro_200,
  },
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
    left: 47,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.sFPro,
    fontSize: FontSize.size_xs,
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
  logoBoxPosition: {
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  signUp1: {
    color: "#439755",
    textAlign: "center",
    fontFamily: FontFamily.sFPro,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    height: 16,
  },
  signUp: {
    left: 20,
    top: 24,
    position: "absolute",
  },
  dontHaveAn: {
    width: 149,
  },
  signUpButton: {
    top: 562,
    height: 53,
    width: 149,
    backgroundColor: Color.colorWhitesmoke,
    left: 122,
  },
  signInButton1: {
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
    height: 50,
    width: 313,
    left: 0,
    top: 0,
    position: "absolute",
  },
  signIn: {
    top: 16,
    color: Color.colorWhite,
    width: 70,
    height: 21,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.sFPro,
    fontWeight: "700",
    left: 122,
    position: "absolute",
  },
  signInButton: {
    top: 494,
    height: 50,
    width: 313,
    left: 40,
    position: "absolute",
  },
  forgotPasswordBox: {
    top: -5,
    left: -12,
    height: 22,
    width: 149,
    position: "absolute",
  },
  forgotPassword1: {
    width: 109,
    color: Color.colorBlack,
    fontWeight: "100",
  },
  forgotPassword: {
    top: 460,
    left: 143,
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
    fontWeight: "500",
    top: "0%",
    height: "100%",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.sFPro,
  },
  userLogin: {
    width: 108,
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
  loginPreExistingAccount: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke,
  },
});

export default LoginPreExistingAccount;