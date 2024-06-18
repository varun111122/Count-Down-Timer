import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
  
} from 'react-native';
import ReusableButton from './ReusableButton';
import Timer from './Timer';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Timer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;



// const App = () => {
//   const handlePress = () => {
//     alert(`Button Pressed`);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
     
//       <ReusableButton  title="Click Me" onPress={handlePress}  />
//       <ReusableButton title="Press Me" onPress={handlePress} />
  
     
//     </SafeAreaView>
//   );
  

  // const [seconds, setSeconds] = useState('');
  // const [timeLeft, setTimeLeft] = useState(0);
  // const [isRunning, setIsRunning] = useState(false);
  // const timerRef = useRef(null);

  // const handleInputChange = input => {
  //   // Validate that the input is a number
  //   if (/^\d{0,2}$/.test(input)) {
  //     setSeconds(input);
  //   }
  // };

  // const startTimer = () => {
  //   const time = parseInt(seconds, 10);
  //   if (!isRunning && time > 0) {
  //     setTimeLeft(time);
  //     setIsRunning(true);
  //     timerRef.current = setInterval(() => {
  //       setTimeLeft(prevTime => {
  //         if (prevTime <= 1) {
  //           clearInterval(timerRef.current);
  //           setIsRunning(false);
  //           return 0;
  //         }
  //         return prevTime - 1;
  //       });
  //     }, 1000);
  //   }
  // };

  // const stopTimer = () => {
  //   if (isRunning) {
  //     clearInterval(timerRef.current);
  //     setIsRunning(false);
  //   }
  // };

  // const resetTimer = () => {
  //   clearInterval(timerRef.current);
  //   setIsRunning(false);
  //   setTimeLeft(parseInt(seconds, 10) || 0);
  // };

  // useEffect(() => {
  //   return () => clearInterval(timerRef.current);
  // }, []);

  // return (
  //   <SafeAreaView style={styles.safeArea}>
  //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  //       <View style={styles.container}>
  //         {/* MARK: TEXT FIELD FOR INPUT DATA*/}
  //         <Text style={styles.inputTitle}>Input Seconds</Text>
  //         <TextInput
  //           style={styles.input}
  //           placeholder="Enter seconds..."
  //           keyboardType="numeric"
  //           value={seconds}
  //           onKeyPress={(event) => {
  //               console.log(event, 'Event occured');
  //           }}
  //           onChangeText={handleInputChange}
  //         />
  //         {seconds ? (
  //           <Text style={styles.output}>{seconds} seconds.</Text>
  //         ) : null}
  //         {/* MARK:BUTTON ACTIONS OF TIMER*/}
  //         <View style={styles.buttonContainer}>
  //           <TouchableOpacity
  //             style={[
  //               styles.button,
  //               {backgroundColor: 'rgba(113, 179, 100, 1.0)'},
  //             ]}
  //             onPress={startTimer}
  //             activeOpacity={0.7}>
  //             <Text style={styles.buttonText}>Start</Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity
  //             style={[
  //               styles.button,
  //               {backgroundColor: 'rgba(201, 92, 84, 1.0)'},
  //             ]}
  //             onPress={stopTimer}
  //             activeOpacity={0.7}>
  //             <Text style={styles.buttonText}>Stop</Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity
  //             style={[
  //               styles.button,
  //               {backgroundColor: 'rgba(230, 176, 94, 1.0)'},
  //             ]}
  //             onPress={resetTimer}
  //             activeOpacity={0.7}>
  //             <Text style={styles.buttonText}>Reset</Text>
  //           </TouchableOpacity>
  //         </View>
  //         {/* --------DISPLAY TIMER-------- */}
  //         <Text style={styles.timerText}>{timeLeft} seconds left</Text>
  //       </View>
  //     </TouchableWithoutFeedback>
  //   </SafeAreaView>
  // );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: 'black',
//   },
//   container: {
//     flex: 1,
//     paddingTop: 20,
//     paddingHorizontal: 20,
//     backgroundColor: 'white',
//     // justifyContent: 'center'
//   },
//   inputTitle: {
//     fontSize: 16,
//     fontWeight: 'medium',
//     color: 'black',
//     paddingBottom: 4,
//   },
//   input: {
//     height: 40,
//     borderColor: 'black',
//     borderWidth: 0.5,
//     borderRadius: 12,
//     marginBottom: 12,
//     paddingHorizontal: 8,
//   },
//   output: {
//     textAlign: 'center',
//     fontSize: 14,
//     paddingBottom: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingTop: 20,
//   },
//   button: {
//     borderRadius: 4,
//     flex: 0.33,
//     marginHorizontal: 4,
//     height: 45,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontWeight: 'bold',
//     color: 'white',
//     fontSize: 16,
//   },
//   timerText: {
//     textAlign: 'center',
//     fontSize: 26,
//     marginTop: 20,
//   },
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;
