import React, { useState } from "react"

export default function Card(props) {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    const truncateText = (text, limit) => {
        if (text.length <= limit) {
            return text
        }
        return text.substring(0,limit) + '...'
    }

    const formatDateRange = (startDate, endDate) => {
        if (startDate === endDate) {
            return startDate
        }
        return `${startDate} - ${endDate}`
    }

    return (
     <div className="card">
        <div className="img-container">
            <img src={props.img} alt={props.alt} className="card--img"/>
        </div>
        <div>
            <div className="location-container">
                <i class="fa-solid fa-location-dot"></i>
                <h3 className="card--location">{props.location}</h3>
                <a href={props.link} className="card--link">View on Google Maps</a>
            </div>
            <h2 className="card--title">{props.title}</h2>
            <h4 className="card--dates">{props.date}</h4>
            <p>
                {isExpanded ? props.description : truncateText(props.description, 190)}
                {props.description.length > 190 && (
                    <button onClick={toggleExpand} className="card--toggle-button">
                        {isExpanded ? "Show Less" : "Show More"}
                    </button>
                )}
            </p>
        </div>
     </div>
    )
}