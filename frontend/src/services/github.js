const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_USERNAME = 'alekhya6767';

// GitHub API service for fetching repositories and user data
export class GitHubService {
  static async fetchUserProfile() {
    try {
      const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`);
      if (!response.ok) throw new Error('Failed to fetch user profile');
      return await response.json();
    } catch (error) {
      console.error('Error fetching GitHub profile:', error);
      return null;
    }
  }

  static async fetchRepositories() {
    try {
      const response = await fetch(
        `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
      );
      if (!response.ok) throw new Error('Failed to fetch repositories');
      const repos = await response.json();
      
      // Filter out forks and sort by stars/updated date
      return repos
        .filter(repo => !repo.fork)
        .sort((a, b) => {
          // Prioritize pinned repos (we'll handle this separately)
          if (a.stargazers_count !== b.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return new Date(b.updated_at) - new Date(a.updated_at);
        });
    } catch (error) {
      console.error('Error fetching repositories:', error);
      return [];
    }
  }

  static async fetchPinnedRepositories() {
    try {
      // GitHub doesn't provide a direct API for pinned repos, so we'll use GraphQL
      // For now, we'll return featured repositories based on your project descriptions
      const allRepos = await this.fetchRepositories();
      
      // Define featured projects based on your description
      const featuredRepoNames = [
        'restaurant-reservation-system',
        'finsage',
        'portfolio'
      ];
      
      return allRepos.filter(repo => 
        featuredRepoNames.some(name => 
          repo.name.toLowerCase().includes(name.toLowerCase())
        )
      );
    } catch (error) {
      console.error('Error fetching pinned repositories:', error);
      return [];
    }
  }

  static async fetchRepositoryLanguages(repoName) {
    try {
      const response = await fetch(
        `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}/languages`
      );
      if (!response.ok) throw new Error('Failed to fetch repository languages');
      return await response.json();
    } catch (error) {
      console.error('Error fetching repository languages:', error);
      return {};
    }
  }

  static async fetchRepositoryReadme(repoName) {
    try {
      const response = await fetch(
        `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}/readme`
      );
      if (!response.ok) throw new Error('Failed to fetch README');
      const data = await response.json();
      
      // Decode base64 content
      return atob(data.content);
    } catch (error) {
      console.error('Error fetching repository README:', error);
      return null;
    }
  }

  static getRepositoryUrl(repoName) {
    return `https://github.com/${GITHUB_USERNAME}/${repoName}`;
  }

  static getLiveUrl(repo) {
    // Check for common live URL patterns
    if (repo.homepage) return repo.homepage;
    if (repo.has_pages) {
      return `https://${GITHUB_USERNAME}.github.io/${repo.name}`;
    }
    return null;
  }

  static formatRepoData(repo) {
    return {
      id: repo.id,
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description,
      url: repo.html_url,
      liveUrl: this.getLiveUrl(repo),
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
      topics: repo.topics || [],
      isPrivate: repo.private,
      size: repo.size
    };
  }
}

// Enhanced project data with your specific projects
export const featuredProjects = [
  {
    id: 'restaurant-reservation',
    name: 'Django-Based Restaurant Reservation System',
    description: 'A full-stack restaurant booking system similar to OpenTable using Django, Python, and SQL. Features RESTful APIs, real-time table availability, and AJAX-based live updates.',
    technologies: ['Django', 'Python', 'SQL', 'JavaScript', 'AJAX', 'HTML/CSS'],
    highlights: [
      'Real-time table availability display',
      'User management and reservation system',
      'Performance optimization with caching and indexing (40% improvement)',
      'RESTful API design'
    ],
    timeline: 'March 2025 – May 2025',
    category: 'Full-Stack Web Development',
    status: 'In Development'
  },
  {
    id: 'finsage',
    name: 'FinSage – AI-Powered Personal Finance Application',
    description: 'A full-stack finance platform using Supabase (PostgreSQL), Next.js, and Groq AI API, processing 1,000+ daily transactions with LLM-powered expense categorization.',
    technologies: ['Next.js', 'Supabase', 'PostgreSQL', 'Groq AI API', 'React', 'TypeScript'],
    highlights: [
      'AI-powered expense categorization using LLM',
      'Processes 1,000+ transactions daily',
      'Real-time financial insights and analytics',
      'Secure user authentication and data management'
    ],
    timeline: 'January 2025 – Present',
    category: 'AI/ML & FinTech',
    status: 'Active Development'
  }
];

export default GitHubService;
