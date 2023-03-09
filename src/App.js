import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import List from './components/List';
import EmojiList from './emojiList.json'
function App() {

  //Main background color sets
  document.body.style.background = '#513e50';


  const [searchedEmoji, setSearchedEmoji] = useState("");
  const [emojies, setEmojies] = useState(EmojiList);
  return (
    <div className="App">
      <Header />
      <Searchbar searchedEmoji={searchedEmoji} setSearchedEmoji={setSearchedEmoji}/> 
      <List emojies={emojies} setEmojies={setEmojies} searchedEmoji={searchedEmoji} />
   </div>
  );
}

export default App;
