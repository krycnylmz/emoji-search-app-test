
function Searchbar({searchedEmoji, setSearchedEmoji}) {
  
  
  const onChangeHandler = (e) =>{
    setSearchedEmoji(e.target.value)
  };

  return (
    <div className="flex justify-center my-4 ">
      <input type="text" className="p-3 bg-violet-100 rounded w-96 max-w-sm text-dark " onChange={onChangeHandler} value={searchedEmoji}  name='search' placeholder='Search emoji...'/>
    </div>
  )
}

export default Searchbar