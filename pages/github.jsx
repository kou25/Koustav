import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  const contributionsTheme = {
    text: '#eee',
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user?.avatar_url}
            className={styles.avatar}
            alt={user?.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user?.login}</h3>
        </div>
        <div>
          <h3>{user?.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user?.followers} followers</h3>
        </div>
      </div>
      <h2>6 Latest Updated Repositories</h2>
      <div className={styles.container}>
        {repos.length > 0 && repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <GitHubCalendar
        username={'kou25'}
        theme={contributionsTheme}
        blockMargin={2}
        blockSize={20}
      />
    </>
  );
};

export async function getStaticProps() {
  const userRes = await fetch(
    `https://api.github.com/users/kou25`
  );
  const user = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/kou25/repos?sort=created_at&per_page=8`
  );
  const repos = await repoRes.json();

  return {
    props: { title: 'GitHub', repos, user },
    revalidate: 60,
  };
}

export default GithubPage;
