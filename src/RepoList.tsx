import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { RepoDetails } from 'src/RepoDetails';

export const RepoList = () => {
  const handleGitUserNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setGitUserName(event.target.value);
  };
  const [repoList, setRepoList] = useState<Array<any>>([]);
  const [gitUserName, setGitUserName] = useState('');
  const [isValid, setIsValid] = useState(false);
  const addGitProfile = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${gitUserName}/repos`)
      .then((resp) => {
        setRepoList(resp.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={gitUserName}
          onChange={handleGitUserNameChange}
        />
        <input
          type="submit"
          onClick={addGitProfile}
          disabled={isValid === false}
          value="Link Git Profile"
        ></input>
      </form>
      <div className="repos">
        {repoList.map((repo) => {
          return <RepoDetails key={repo.id} repoDetails={repo} />;
        })}
      </div>
    </div>
  );
};
