import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";

const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.forgotPassword}>
      <View style={[styles.signInButton, styles.signLayout]}>
        <LinearGradient
          style={[styles.signInButton1, styles.emailIconLayout]}
          locations={[0, 0.16, 1]}
          colors={["#006c3d", "#177a45", "#8cc56e"]}
          useAngle={true}
          angle={-80.16}
        />
        <Text style={[styles.resetPassword, styles.cancelFlexBox]}>
          Reset Password
        </Text>
      </View>
      <Pressable
        style={[styles.signInButton2, styles.signLayout]}
        onPress={() => {
            navigation.navigate("Login");
        }}
      >
        <View style={[styles.signInButton3, styles.signInButton3Layout]} />
        <Text style={[styles.cancel, styles.cancelFlexBox]}>Cancel</Text>
      </Pressable>
      <View style={styles.usernamepasswordInput}>
        <View
          style={[styles.usernamePasswordBoxes, styles.signInButton3Layout]}
        />
        <Text style={[styles.emailAddress, styles.emailAddressTypo]}>
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
          <Text style={[styles.forgotPassword1, styles.logoBoxPosition]}>
            Forgot Password
          </Text>
        </View>
      </View>
      <View style={[styles.logo, styles.logoLayout]}>
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
  signLayout: {
    width: 148,
    height: 50,
  },
  emailIconLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  cancelFlexBox: {
    height: 21,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.sFPro,
    fontSize: FontSize.size_mini,
    alignItems: "flex-end",
    display: "flex",
    left: 0,
    width: 148,
    position: "absolute",
  },
  signInButton3Layout: {
    height: 52,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    left: -1,
    top: -1,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  emailAddressTypo: {
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.sFPro,
  },
  userLoginLayout: {
    height: 26,
    width: 168,
    position: "absolute",
  },
  boxBg: {
    display: "none",
    backgroundColor: Color.colorGainsboro_100,
  },
  logoBoxPosition: {
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  logoLayout: {
    width: 149,
    position: "absolute",
  },
  signInButton1: {
    backgroundColor: "transparent",
    left: 0,
    top: 0,
    height: 50,
    width: 148,
  },
  resetPassword: {
    fontWeight: "700",
    color: Color.colorWhite,
    top: 15,
  },
  signInButton: {
    top: 414,
    left: 205,
    height: 50,
    position: "absolute",
  },
  signInButton3: {
    borderColor: Color.colorSeagreen,
    width: 150,
  },
  cancel: {
    top: 14,
    fontWeight: "600",
    color: Color.colorSeagreen,
  },
  signInButton2: {
    top: 415,
    left: 40,
    height: 50,
    position: "absolute",
  },
  usernamePasswordBoxes: {
    borderColor: "#e7e7e7",
    width: 315,
  },
  emailAddress: {
    top: 20,
    left: 47,
    fontSize: 12,
    color: "#c6c6c6",
    width: 145,
    height: 10,
    position: "absolute",
  },
  emailIcon: {
    left: 12,
    width: 24,
    height: 24,
    top: 15,
  },
  usernamepasswordInput: {
    top: 334,
    width: 313,
    left: 40,
    height: 50,
    position: "absolute",
  },
  signUpTitleBox: {
    top: -25,
    left: 5,
    height: 37,
    width: 149,
    position: "absolute",
  },
  forgotPassword1: {
    fontSize: 20,
    color: "#000",
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.sFPro,
    alignItems: "flex-end",
    display: "flex",
    top: "0%",
    height: "100%",
  },
  userLogin: {
    left: 0,
    top: 0,
  },
  signUpTitle: {
    top: 278,
    left: 40,
  },
  logoBox: {
    right: "0%",
    bottom: "0%",
    display: "none",
    backgroundColor: Color.colorGainsboro_100,
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
    left: 122,
    height: 88,
  },
  forgotPassword: {
    backgroundColor: "#f1f1f1",
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default ForgotPassword;