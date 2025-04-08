import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://glorious-disco-7vwwpv99rg7g3r54v-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Team Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{team.name}</td>
              <td>{team.members.map(member => member.username).join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
