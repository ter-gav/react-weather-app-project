import React from "react"

export default function Search() {
    return <div className="Search">
        
        <form>
        <div className="row">
        <div className="col-9">
            <input type="search" placeholder="Enter a city"></input>
            </div>
            <div className="col-3">
            <input type="submit" value="Search"></input>
        </div>
        </div>
        </form>
    </div>
}