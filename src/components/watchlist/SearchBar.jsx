// eslint-disable-next-line react/prop-types
const SearchBar = ({ onChange, handleSearch, value, buttonVisible, placeholder }) => {
 
  return (
    <form className="d-flex w-100">
      <input type="search" placeholder={placeholder ? placeholder : "search here"} value={value} onChange={onChange} className="form-control w-100" />
       { buttonVisible &&
       <button className="btn btn-danger" onClick={handleSearch}> Search</button>
       }
    </form>
  )
}

export default SearchBar
