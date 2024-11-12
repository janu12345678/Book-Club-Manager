import React from "react";
import Nav from "../layout/Nav";
import Card from "./Card";
import clubs from "../../data/BookClubs";
import SearchBar from "../SearchBar"

function Manage(){
    return(
        <>
            <Nav/>
            <SearchBar/>
                <div className="flex items-center flex-col">
                    {clubs.map((club) => {
                        return (
                            <Card
                                key={club.bookClubName}
                                bookClubName={club.bookClubName}
                                description={club.description}
                                organizer={club.organizer}
                                bookName={club.bookName}
                                noOfAttendees={club.noOfAttendees}
                                cadence={club.cadence}
                                status={club.status}
                            />
                        );
                    })}
                </div>
        </>
    );
}

export default Manage;