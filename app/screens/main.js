/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Animated,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const male = {
  lean: {
    name: 'Lean',
    meme: require('../assets/lean.gif'),
    quote:
      '“Don’t waste so much time thinking about how much you weigh. There is no more mind-numbing, boring, idiotic, self-destructive diversion from the fun of living.” — Meryl Streep',
  },
  athletic: {
    name: 'Athletic',
    meme: require('../assets/athletic.gif'),
    quote: '“Stop trying to fix your body. It was never broken.” — Eve Ensler',
  },
  fit: {
    name: 'Fit',
    meme: require('../assets/fit.gif'),
    quote:
      '“I don’t want to wait until I’m 73 to embrace my body. To look back and think of my beauty: How did I miss it? Let’s not wait another moment.” ― Ashley Asti',
  },
  thick: {
    name: 'Thick',
    meme: require('../assets/thick.gif'),
    quote:
      '“Hating our bodies is something that we learn, and it sure as hell is something that we can unlearn.” — Megan Jayne Crabbe',
  },
};

const female = {
  slim: {
    name: 'Slim',
    meme: require('../assets/slim.gif'),
    quote: '“Loving yourself is the greatest revolution.” — Anon',
  },
  slimthick: {
    name: 'Slim Thick',
    meme: require('../assets/slimthick.gif'),
    quote:
      '“To love yourself right now, just as you are, is to give yourself heaven. Don’t wait until you die. If you wait, you die now. If you love, you live now.” — Alan Cohen ',
  },
  thicc: {
    name: 'Thicc',
    meme: require('../assets/thicc.gif'),
    quote:
      '“To be beautiful means to be yourself. You don’t need to be accepted by others. You need to accept yourself.” — Thich Nhat Hanh ',
  },
  superthicc: {
    name: 'Super Thicc',
    meme: require('../assets/superthicc.gif'),
    quote:
      '“And I said to my body softly, ‘I want to be your friend.’ It took a long breath and replied, ‘I have been waiting my whole life for this.” — Nayyirah Waheed ',
  },
};

const Main = () => {
  const [gen, setGen] = useState('female');
  const [weight, setWeight] = useState();
  const [inches, setInches] = useState();
  const [feet, setFeet] = useState();
  const [bmi, setBmi] = useState(0);
  const [meme, setMeme] = useState();
  const [name, setName] = useState();
  const [quote, setQuote] = useState();
  const slideValue = new Animated.Value(675);

  function calculate() {
    setBmi(0);
    let height = parseInt(feet, 10) * 12 + parseInt(inches, 10);
    let conversion = (703 * weight) / height ** 2;
    setBmi(conversion.toFixed(2));
    if (bmi < 18) {
      if (gen === 'female') {
        setName(female.slim.name);
        setMeme(female.slim.meme);
        setQuote(female.slim.quote);
      } else {
        setName(male.lean.name);
        setMeme(male.lean.meme);
        setQuote(male.lean.quote);
      }
    } else if (bmi > 18.5 && bmi < 25) {
      if (gen === 'female') {
        setName(female.slimthick.name);
        setMeme(female.slimthick.meme);
        setQuote(female.slimthick.quote);
      } else {
        setName(male.athletic.name);
        setMeme(male.athletic.meme);
        setQuote(male.athletic.quote);
      }
    } else if (bmi > 25 && bmi < 30) {
      if (gen === 'female') {
        setName(female.thicc.name);
        setMeme(female.thicc.meme);
        setQuote(female.thicc.quote);
      } else {
        setName(male.fit.name);
        setMeme(male.fit.meme);
        setQuote(male.fit.quote);
      }
    } else if (bmi > 30) {
      if (gen === 'female') {
        setName(female.superthicc.name);
        setMeme(female.superthicc.meme);
        setQuote(female.superthicc.quote);
      } else {
        setName(male.thick.name);
        setMeme(male.thick.meme);
        setQuote(male.thick.quote);
      }
    }
    ani();
  }

  function ani() {
    Animated.timing(slideValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  function hideBMI() {
    Animated.timing(slideValue, {
      toValue: 675,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View
      style={{
        backgroundColor: '#262429',
        paddingVertical: 180,
        alignItems: 'center',
      }}>
      <Text style={[styles.mainText]}>Body Mass Calculator</Text>
      <View
        style={{
          flexDirection: 'row',
          height: 150,
          padding: 20,
        }}>
        <TouchableOpacity
          onPress={() => setGen('female')}
          style={{...styles.containers, marginRight: 40}}>
          <Image
            style={{
              height: 58,
              width: 40,
              tintColor: gen === 'female' ? '#8f72d4' : 'white',
            }}
            source={require('../assets/female.png')}
            onPress={() => setGen('female')}
          />
          <Text style={{paddingTop: 5, textAlign: 'center', color: 'white'}}>
            Female
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setGen('male')}
          style={[styles.containers]}>
          <Image
            style={{
              height: 45,
              width: 45,
              tintColor: gen === 'male' ? '#8f72d4' : 'white',
            }}
            source={require('../assets/male.png')}
            onPress={() => setGen('male')}
          />
          <Text style={{paddingTop: 15, textAlign: 'center', color: 'white'}}>
            Male
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          ...styles.containers,
          flexDirection: 'column',
          width: 300,
          justifyContent: 'center',
          alignItems: 'center',
          // marginLeft: 60,
        }}>
        <TextInput
          onChangeText={(text) => setWeight(text)}
          value={weight}
          keyboardType="numeric"
          style={{fontSize: 30, color: 'white', textAlign: 'center'}}
        />
        <Text style={{paddingTop: 15, textAlign: 'center', color: 'white'}}>
          Weight
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 150,
          padding: 20,
          justifyContent: 'space-evenly',
        }}>
        <View style={{...styles.containers, marginRight: 40}}>
          <TextInput
            style={{fontSize: 30, color: 'white', textAlign: 'center'}}
            onChangeText={(text) => setFeet(text)}
            value={feet}
            keyboardType={'numeric'}
            numeric
          />
          <Text style={{paddingTop: 15, textAlign: 'center', color: 'white'}}>
            Feet
          </Text>
        </View>
        <View style={[styles.containers]}>
          <TextInput
            style={{fontSize: 30, color: 'white', textAlign: 'center'}}
            onChangeText={(text) => setInches(text)}
            value={inches}
            keyboardType="numeric"
          />
          <Text style={{paddingTop: 15, textAlign: 'center', color: 'white'}}>
            Inches
          </Text>
        </View>
      </View>
      <TouchableHighlight style={[styles.button]} onPress={() => calculate()}>
        <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
          Calculate BMI
        </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => hideBMI()}>
        <Animated.View
          style={[
            styles.animatedView,
            {transform: [{translateY: slideValue}]},
          ]}>
          <Text
            style={{
              color: '#676464',
              fontSize: 45,
              textAlign: 'center',
            }}>
            {bmi}
          </Text>
          <Text
            style={{
              color: '#8f72d4',
              fontSize: 30,
              textAlign: 'center',
              paddingTop: 15,
              paddingBottom: 30,
            }}>
            {name}
          </Text>
          <Image style={{maxHeight: 260, maxWidth: 410}} source={meme} />
          <Text
            style={{
              color: 'white',
              paddingTop: 25,
              fontSize: 14,
              textAlign: 'center',
            }}>
            {quote}
          </Text>
        </Animated.View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  animatedView: {
    bottom: 590,
    backgroundColor: '#262429',
    height: 675,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowColor: '#676464',
    elevation: 4,
    shadowOpacity: 1.0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 180,
  },
  mainText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: 20,
  },
  containers: {
    height: 110,
    backgroundColor: '#262429',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 40,
    width: 130,
  },
  button: {
    backgroundColor: '#8f72d4',
    width: 200,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
    height: 40,
    marginBottom: 140,
  },
});

export default Main;
