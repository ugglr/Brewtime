import React from 'react';
import {
  View,
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput as RNTextInput,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
  },
  error: {
    color: 'red',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    height: 40,
    paddingHorizontal: 16,
  },
  errorInput: {
    borderColor: 'red',
  },
});

type FormProps = {
  name: string;
  label: string;
  value: string;
  error: string | undefined;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  placeholder?: string | undefined;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T,
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  handleBlur: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
};

const TextInput = ({
  name,
  label,
  handleChange,
  handleBlur,
  value,
  error,
  keyboardType,
  placeholder,
  secureTextEntry,
}: FormProps) => {
  const hasError = !!error;
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.error}>{error}</Text>
      </View>
      <RNTextInput
        style={[styles.input, hasError && styles.errorInput]}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={value}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default TextInput;
