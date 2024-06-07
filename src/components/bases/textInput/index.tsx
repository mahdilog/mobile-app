import { useEffect, useRef, useState } from "react";
import { View, TextInput as Input, Animated, Text } from "react-native";
import { FormikTouched, useFormikContext } from "formik";
import { TProps } from "./type";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./style";

export const TextInput = (props: TProps) => {
  const {
    label,
    name,
    icon,
    iconColor = "#bbb",
    value,
    readonly = false,
  } = props;
  const { handleChange, handleBlur, errors } = useFormikContext();
  const [topLabel, setTopLabel] = useState(value ? true : false);
  const [showPassword, setShowPassword] = useState(false);
  const raiseLabel = useRef(new Animated.Value(value ? -15 : 5)).current;
  const labelSize = useRef(new Animated.Value(value ? 14 : 17)).current;

  const invalidValue = errors[name as keyof FormikTouched<unknown>];

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    if (value) {
      setTopLabel(true);
    } else {
      setTopLabel(false);
    }
  }, [value]);

  return (
    <View>
      <View style={[styles.container, invalidValue && { borderColor: "red" }]}>
        <MaterialCommunityIcons
          name={icon}
          style={{ color: iconColor }}
          size={25}
        />
        <Animated.Text
          style={[
            styles.label,
            { top: raiseLabel, zIndex: topLabel ? 2 : 0, fontSize: labelSize },
            invalidValue && { color: "red" },
          ]}
        >
          {label}
        </Animated.Text>
        <Input
          onChangeText={handleChange(name)}
          onFocus={() => {
            Animated.timing(raiseLabel, {
              toValue: -18,
              duration: 250,
              useNativeDriver: false,
            }).start();
            Animated.timing(labelSize, {
              toValue: 14,
              duration: 250,
              useNativeDriver: false,
            }).start();
            setTopLabel(true);
          }}
          onBlur={() => {
            if (!value) {
              Animated.timing(raiseLabel, {
                toValue: 5,
                duration: 250,
                useNativeDriver: false,
              }).start();
              Animated.timing(labelSize, {
                toValue: 17,
                duration: 250,
                useNativeDriver: false,
              }).start();
              setTimeout(() => setTopLabel(false), 50);
              handleBlur(name);
            } else {
              Animated.timing(raiseLabel, {
                toValue: -18,
                duration: 250,
                useNativeDriver: false,
              }).start();
              Animated.timing(labelSize, {
                toValue: 14,
                duration: 250,
                useNativeDriver: false,
              }).start();
            }
          }}
          value={value}
          style={styles.input}
          readOnly={readonly}
        />
      </View>
      {invalidValue && <Text style={styles.error}>{invalidValue}</Text>}
    </View>
  );
};
