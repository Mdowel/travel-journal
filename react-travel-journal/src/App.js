import React from "react";
import Header from "./Header"
import Card from "./Card"
import data from "./data"


export default function App() {
  
  const cardElements = data.map(card => {
    return <Card 
      img={card.imageURL}
      alt={card.alt}
      location={card.location}
      link={card.googleMapsUrl}
      title={card.title}
      startDate={card.startDate}
      endDate={card.endDate}
      description={card.description}
      />

    })
    return (
      <div>
        <Header />
        {cardElements}
      </div>
  )
}


