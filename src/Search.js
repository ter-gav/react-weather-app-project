import React from "react"

export default function Search() {
    return <div className="Search">
        <form>
            <input type="search" placeholder="Enter a city"></input>

        </form>
        <button className="btn btn-primary">Search</button>
    </div>
}