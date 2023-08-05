import React, { useState } from 'react';
import Header from './Header';
import Searchbar from './Searchbar';
import Profile from './Profile';
import Footer from './Footer';

export default function App() {
    const [isSearch, setIsSearch] = useState(false);
    const [searchUsername, setSearchUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [userProfilepicurl, setUserProfilepicUrl] = useState(false);
    const [username, setUsername] = useState(false);
    const [userid, setUserid] = useState(false);
    const [userFollowers, setUserFollowers] = useState(false);
    const [userFollowing, setUserFollowing] = useState(false);
    const [userbio, setUserbio] = useState(false);
    const [userRepocount, setUserRepocount] = useState(false);
    const [userRepositories, setUserRepositories] = useState([]);

    const handleSortChange = async (event) => {
        const sortOption = event.target.value;

        if(sortOption === 'stars') {
            const arr = userRepositories.slice().sort((a, b) => b.stars - a.stars);
            setUserRepositories(arr);
        } else if(sortOption === 'forks') {
            const arr = userRepositories.slice().sort((a, b) => b.forks - a.forks);
            setUserRepositories(arr);
        } else {
            console.log('How tf you did this???????????');
        }
    };

    const getUserinfo = async () => {
        setIsLoading(true);

        try {
            const userResponse = await fetch(`https://api.github.com/users/${searchUsername}`);
            if (userResponse.ok) {
                const data = await userResponse.json();

                setUserProfilepicUrl(data.avatar_url);
                setUsername(data.name);
                setUserid(data.login);
                setUserbio(data.bio);
                setUserFollowers(data.followers);
                setUserFollowing(data.following);
                setUserRepocount(data.public_repos);

                setIsSearch(true);
            } else {
                console.error('Failed to fetch user data');
            }

            const repoResponse = await fetch(`https://api.github.com/users/${searchUsername}/repos`);
            if (repoResponse.ok) {
                const data = await repoResponse.json();
                const repositories = [];

                data.forEach(element => {
                    const repo = {
                        'id': element.id,
                        'name': element.name,
                        'description': element.description,
                        'stars': element.stargazers_count,
                        'forks': element.forks_count,
                        'language': element.language
                    }

                    repositories.push(repo)
                });

                setUserRepositories(repositories);

                setIsSearch(true);
            } else {
                console.error('Failed to fetch repositories');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        setIsLoading(false);
    }

    return (
        <>
            <Header />
            <Searchbar searchUsername={searchUsername} onSearchChange={(e) => setSearchUsername(e.target.value)} onSearchClick={getUserinfo} isLoading={isLoading} />
            <Profile showInfo={isSearch} profilepicurl={userProfilepicurl} name={username} id={userid} followers={userFollowers} following={userFollowing} bio={userbio} repocount={userRepocount} repositories={userRepositories} handleSortChange={handleSortChange} />
            <Footer />
        </>
    )
}
