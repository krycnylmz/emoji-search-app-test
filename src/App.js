import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import List from './components/List';
import EmojiList from './emojiList.json'
function App() {

  //Main background color sets
  document.body.style.background = '#513e50';

  //This part calculate the screen. Then decided to how much item will be shown on the screen
  let screenHeight = window.screen.height;
  let itemNum = 100;
  if (window.screen.width > 728) {
    screenHeight = screenHeight - 350;
    screenHeight = screenHeight / 72;
    itemNum = Math.round(screenHeight);
  }

  const [searchedEmoji, setSearchedEmoji] = useState("")
  const [emojies, setEmojies] = useState(EmojiList)
  return (
    <div className="App">
      <Header />
      <Searchbar searchedEmoji={searchedEmoji} setSearchedEmoji={setSearchedEmoji}/> 
      <List itemNum={itemNum} emojies={emojies} setEmojies={setEmojies} searchedEmoji={searchedEmoji} />
   </div>
  );
}

export default App;
