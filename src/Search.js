import React from "react"
import "./Search.css"

export default function Search() {
    return <div className="Search">
        <form>
            <div className="row ps-5 pt-5">
                <div className="col-9">
            <input type="search" placeholder="Enter a city" className="form-control"></input>
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"></input>
            </div>
            </div>
        </form>
    </div>
}