import React from 'react';

const User = ({user}) =>{
    const {name, email, phone} = user;
    return(
        <>
        <h3>User:{name}</h3>
        <p>Email:{email}</p>
        <p>Phone:{phone}</p>
        </>
    )
}

export default User;

export async function getStaticPaths(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    const paths = users.map((user) => ({
        params: {id: user.id.toString()},
    }));
    return {paths, fallback: false}
}

export async function getStaticProps({params}){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();
    return {
        props:{user}
    }
}