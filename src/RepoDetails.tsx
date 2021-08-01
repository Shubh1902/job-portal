import axios from 'axios';
import { useEffect, useState } from 'react';

interface Props {
  repoDetails: {
    id: number;
    name: string;
    language: string;
    languages_url: string;
  };
}
export const RepoDetails = (props: Props) => {
  const [languages, setLanguages] = useState<Array<string>>([]);
  useEffect(() => {
    axios.get(props.repoDetails.languages_url).then((resp) => {
      setLanguages(Object.keys(resp.data));
    });
  }, []);
  return (
    <div className="repo">
      <div className="repo-name">{props.repoDetails.name}</div>
      <div className="repo-lang">
        {languages.map((lang, index) => {
          return <div key={`${lang}${index}`}>{lang}</div>;
        })}
      </div>
    </div>
  );
};
