import React from "react"

export default function Search() {
    return <div className="Search">
        <form>
            <input type="search" placeholder="Enter a city"></input>
            <input type="submit" value="Search"></input>
        </form>
    </div>
}