import React from 'react';
import Movie from './movie';

export default class MovieList extends React.Component {
    render() {
        return (
            <div className="container">
                <Movie {...
                    {id: 1,
                        key: 1,
                        title: 'To Wong Foo, Thanks for Everything! Julie Newmar', 
                        summary: 'Three drag queens travel cross-country until their car breaks down, leaving them stranded in a small town.',
                        poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgVnwLW472T5rzyGyuIH8dBFtrbObWTBhjjcWKJDJlOHwZ6MqB'}} />
                <Movie {...
                    {id: 2,
                        key: 2,
                        title: 'Kill Bill: Volume 1', 
                        summary: 'After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.',
                        poster: 'https://upload.wikimedia.org/wikipedia/pt/6/6d/Kill_Bill_poster.jpg'}} />
                <Movie {...
                    {id: 3,
                        key: 3,
                        title: 'Alien', 
                        summary: 'The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.',
                        poster: 'https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg'}} />
                <Movie {...
                    {id: 4,
                        key: 4,
                        title: 'The Addams Family', 
                        summary: 'Con artists plan to fleece an eccentric family using an accomplice who claims to be their long-lost uncle.',
                        poster: 'https://m.media-amazon.com/images/M/MV5BMzYxZTUzODYtYjQwYi00NGYzLTkxZjEtNjYwZWZlYmM0ZDg3XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg'}} />   
            </div>
        );
    }
}

