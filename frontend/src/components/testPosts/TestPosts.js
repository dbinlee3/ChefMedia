import React from 'react';
import { useSelector } from 'react-redux';

import TestPost from './testpost/TestPost'

function TestPosts() {
    const posts = useSelector((state) => state.posts);

    console.log(posts);
    return (
        <div>
            Here are Posts
            <TestPost />
            <TestPost />
            <TestPost />
        </div>
    )
}

export default TestPosts
