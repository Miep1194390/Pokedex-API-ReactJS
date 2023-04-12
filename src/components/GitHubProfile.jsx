import React, { useState, useEffect } from 'react';

function GithubProfile() {
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState([]);

  const githubUsername = 'miep1194390';

  useEffect(() => {
    async function fetchData() {
      const [userResponse, repoResponse] = await Promise.all([
        fetch(`https://api.github.com/users/${githubUsername}`),
        fetch(`https://api.github.com/users/${githubUsername}/repos`),
      ]);

      const userData = await userResponse.json();
      const repoData = await repoResponse.json();

      setUserData(userData);
      setRepoData(repoData);
    }

    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className='font-p2'>Repositories</h1>
      <ul>
        {repoData.map((repo) => (
          <li className='repoNameList' key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GithubProfile;
