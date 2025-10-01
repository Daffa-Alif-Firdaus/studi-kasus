// src/pages/Team.jsx

import React from 'react';

const teamMembers = [
    { name: 'Jane Doe', title: 'CEO & Founder', imageUrl: 'https://i.pravatar.cc/150?img=1' },
    { name: 'John Smith', title: 'Head of Marketing', imageUrl: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Emily White', title: 'Lead Developer', imageUrl: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Michael Brown', title: 'UI/UX Designer', imageUrl: 'https://i.pravatar.cc/150?img=4' },
];

function Team() {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Meet Our Team</h2>

      <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
        {teamMembers.map((member, index) => (
          <div className="col text-center" key={index}>
            <div className="team-member">
              <img src={member.imageUrl} alt={member.name} className="rounded-circle mb-3" />
              <h4>{member.name}</h4>
              <p className="text-muted">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;