import React, { 
  Fragment, 
  useState 
} from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([])

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome, Thiago Costa
        </Text>
       
        <TextInput 
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"  
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.title, {marginVertical: 50}]}>
          My Skills
        </Text>

        {
          mySkills.map(skill => (
            <SkillCard skill={skill} />
          ))
        }
        
      </View>
    </Fragment>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7
  }
})