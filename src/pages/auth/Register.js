import { useRef, useEffect } from "react";
import { ScrollView, Dimensions, Keyboard } from "react-native";

import RegisterForm from "../../components/RegisterForm";
import AuthLayout from "../../layout/AuthLayout";

const Register = () => {
  const windowHeight = Dimensions.get("window").height - 540;
  const scrollRef = useRef();

  const scrollHandler = () => {
    scrollRef.current?.scrollTo({
      y: windowHeight,
      animated: true,
    });
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        scrollHandler();
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        //console.log("Keyboard closed");
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <AuthLayout>
      <ScrollView ref={scrollRef}>
        <RegisterForm />
      </ScrollView>
    </AuthLayout>
  );
};

export default Register;
