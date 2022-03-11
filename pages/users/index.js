import Link from 'next/link';
import React from 'react';

const index = ({users}) =>{
    return(
        <>
        <h1>This is users page: {users.length}</h1>
        {
            users.map(user => <p key={user.id}>{user.name}<Link href={`users/${user.id}`}><button>Explore</button></Link></p>)
        }
        </>
    )
}

export default index;

export async function getStaticProps () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return {
        props: {users}
    }
}