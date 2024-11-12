import React from 'react';
import Nav from "../layout/Nav";
import Card from "../cards/Card";
import clubs from "../../data/BookClubs";
import user from "../../data/UserData"

function Home() {

  return (
    <>
      <Nav />
      <h2 className="mt-2 text-2xl text-center font-bold text-gray-900 mb-6">View All Your Enrolled Book Clubs:</h2>
      <div className="-mt-3 flex items-center flex-col">
      {clubs.map((club) => {
        const isEnrolled = user.enrolledBookClubs.includes(club.bookClubName);
        return (
          isEnrolled && (
            <Card
              key={club.id}
              bookClubName={club.bookClubName}
              description={club.description}
              organizer={club.organizer}
              bookName={club.bookName}
              noOfAttendees={club.noOfAttendees}
              cadence={club.cadence}
              status={club.status}
              enrollmentState={isEnrolled ? "Enrolled" : "Enroll"}
              isEnrolled={isEnrolled}
            />
          )
        );
      })}
      </div>
    </>
  );
}

export default Home;