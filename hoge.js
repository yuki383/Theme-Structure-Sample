const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const url = 'https://api.github.com/orgs/react-native-community/repos';

(async () => {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });
  const json = await response.json();

  const result = json.reduce((acc, repo) => {
    return [
      ...acc,
      {
        name: repo.name,
        description: repo.description,
        owner_name: repo.owner.login,
        html_url: repo.html_url,
      },
    ];
  }, []);

  fs.writeFileSync(
    path.join(process.cwd(), 'src/repositories.json'),
    JSON.stringify(result),
  );
})();
