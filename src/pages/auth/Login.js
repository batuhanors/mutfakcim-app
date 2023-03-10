import { useRef, useEffect } from "react";
import { View, ScrollView, Keyboard } from "react-native";
import LoginForm from "../../components/LoginForm";
import { Dimensions } from "react-native";
import AuthLayout from "../../layout/AuthLayout";

const Login = () => {
  const windowHeight = Dimensions.get("window").height;
  const scrollRef = useRef();

  const scrollHandler = () => {
    if (scrollRef.current?.scrollTo) {
      scrollRef.current?.scrollTo({
        y: windowHeight,
        animated: true,
      });
    }
  };

  // KEYBOARD LISTENER!
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
        scrollRef.current?.scrollTo({
          y: 0,
          animated: true,
        });
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
        <LoginForm />
      </ScrollView>
    </AuthLayout>
  );
};

export default Login;
