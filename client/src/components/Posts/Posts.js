import React from 'react';
import { useSelector } from "react-redux";
import Post from './Post/Post.js';
import useStyle from './styles.js';
import { Grid, CircularProgress } from '@material-ui/core';

function Posts( { setCurrentId } ) {
    const posts = useSelector((state) => state.posts);
    const classes = useStyle();

    console.log('hello', posts);
    
    console.log("kiem tra search:", posts);
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}> 
                {
                    posts.map(post => (
                        <Grid key={post.id} item xs={12} sm={12} md={6} lg={3}> 
                            <Post post={post} setCurrentId={ setCurrentId } />
                        </Grid>
                    ))
                }
            </Grid>
        )
    );
}

export default Posts;