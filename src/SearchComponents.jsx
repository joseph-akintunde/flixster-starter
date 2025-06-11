 function SearchComponents({DataSubmit}){
    function submitFunc(event){
        event.preventDefault();
        const submittedData = event.target.element.inputForm.value
        DataSubmit(submittedData)
    }
    return(
    <form onSubmit={submitFunc} className="Submit">
       <input name = "inputForm" type="text" placeholder="Search for movies"/>
       <button className="searchBtn" type="submit">Search</button>
       <button className="clearBtn">Clear</button>
    </form>
    )
}
export default SearchComponents