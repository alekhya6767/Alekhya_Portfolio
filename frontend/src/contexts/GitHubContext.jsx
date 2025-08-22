import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const GitHubContext = createContext();

export const GitHubProvider = ({ children, username = 'alekhya6767' }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pinnedRepos, setPinnedRepos] = useState([]);

  // Function to fetch all repositories
  const fetchRepos = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
        {
          headers: {
            Authorization: import.meta.env.VITE_GITHUB_TOKEN ? `token ${import.meta.env.VITE_GITHUB_TOKEN}` : ''
          }
        }
      );
      
      // Filter out forked repositories and sort by stars
      const filteredRepos = response.data
        .filter(repo => !repo.fork && !repo.archived)
        .sort((a, b) => b.stargazers_count - a.stargazers_count);
      
      setRepos(filteredRepos);
      setError(null);
    } catch (err) {
      console.error('Error fetching GitHub repositories:', err);
      setError('Failed to fetch repositories. Please try again later.');
      setRepos([]);
    } finally {
      setLoading(false);
    }
  }, [username]);

  // Function to fetch pinned repositories using GitHub GraphQL API
  const fetchPinnedRepos = useCallback(async () => {
    try {
      const query = `
        query {
          user(login: "${username}") {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  name
                  description
                  url
                  stargazerCount
                  forkCount
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      `;

      const response = await axios.post(
        'https://api.github.com/graphql',
        { query },
        {
          headers: {
            'Authorization': `bearer ${import.meta.env.VITE_GITHUB_TOKEN || ''}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
      }

      const pinnedItems = response.data.data?.user?.pinnedItems?.nodes || [];
      setPinnedRepos(pinnedItems);
    } catch (err) {
      console.error('Error fetching pinned repositories:', err);
      // Fallback to regular API if GraphQL fails
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
      );
      const filteredRepos = response.data
        .filter(repo => !repo.fork && !repo.archived)
        .slice(0, 6);
      setPinnedRepos(filteredRepos);
    }
  }, [username]);

  // Fetch repositories on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          fetchRepos(),
          fetchPinnedRepos()
        ]);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setError('Failed to fetch GitHub data. Please try again later.');
      }
    };
    
    fetchData();
  }, [fetchRepos, fetchPinnedRepos]);

  return (
    <GitHubContext.Provider
      value={{
        repos,
        pinnedRepos,
        loading,
        error,
        refetch: fetchRepos,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export const useGitHub = () => {
  const context = useContext(GitHubContext);
  if (context === undefined) {
    throw new Error('useGitHub must be used within a GitHubProvider');
  }
  return context;
};

export default GitHubContext;
