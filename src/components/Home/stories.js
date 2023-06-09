import * as React from 'react';
import { useContext } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { StoryContext } from '../../context/storiescontext';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 12,
        slidesToSlide: 3,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8,
        slidesToSlide: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 6,
        slidesToSlide: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 6,
        slidesToSlide: 3,
    }
};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    width: '60px',
    height: '60px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.text.secondary,
    borderRadius: '100%',
    margin: '2px 8px',
    padding: '1.5px',
    border: '2px solid green',
    boxShadow: '1.5px 1px 3px green',
    boxSizing: 'content-box',
}));



const Story = () => {
    const { stories } = useContext(StoryContext)
    return (
        <Box sx={{
            paddingLeft: {
                xs: '25px',
                sm: '150px',
                lg: '30vw'
            },
            padding: '25px'
        }}>
            <div style={{ width: "100%", maxWidth: "630px" }}>
                <Carousel responsive={responsive}>
                    {stories.map((item, index) => (
                        <Item>
                            <img style={{ width: '100%', borderRadius: '100%' }} src={`${item.user_img}`} />
                            <p>{item.username}</p>
                        </Item>
                    ))}
                </Carousel>
            </div>
        </Box>
    )
}

export default Story

