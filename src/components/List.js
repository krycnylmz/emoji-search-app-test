import {useEffect} from 'react'
import ListItem from './ListItem'
import ListCard from './ListCard'
import EmojiList from '../emojiList.json'

function List({itemNum, emojies, setEmojies, searchedEmoji}) {

    useEffect(() => {
      const results = EmojiList.filter(emoji => {
        if (emoji.title.toLowerCase().includes(searchedEmoji.toLowerCase())) {
          return true;
        }
        if (emoji.keywords.includes(searchedEmoji)) {
          return true;
        }
        return false;
      })
      .slice(0, 50);
      setEmojies(results);
    }, [searchedEmoji])
    

  return (
          <div className="flex justify-center">
            <div className="w-96">
              {
                emojies.map((value, key, array) => {return (
                  <ListItem key={key} value={value} />
                )})
              }
              <ListCard />
            </div>
          </div>
  )
}

export default List