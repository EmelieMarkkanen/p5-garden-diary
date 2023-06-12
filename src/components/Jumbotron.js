import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import styles from "../styles/Jumbotron.module.css";
import { Link } from "react-router-dom";

const JumboTron = () => {
    return (
        <Jumbotron className={`${styles.Jumbotron} p-3 p-sm-4 p-md-5`}>
            <div>
                <h1 className="h2 h-md1">Welcome to Garden Diaries!</h1>
                <p className="fs-5 fs-md-6">Garden Diaries is a vibrant and engaging social media platform designed exclusively for individuals who have a passion for gardening.
                    Whether you're a seasoned green thumb or just starting out,
                    this online community provides a nurturing space where you can connect with like-minded individuals and share your gardening journey. <br /> <br />
                    With Garden Diaries, you can create and share captivating diary posts, documenting the progress of your garden, from planting seeds to blooming flowers and bountiful harvests. Showcase your beautiful garden plants through captivating images,
                    and receive feedback and inspiration from fellow members who appreciate the wonders of nature. <br /> <br />
                    Stay organized and on top of your gardening tasks by creating personalized to-do lists and shopping lists.
                    Seamlessly add items and tasks for your garden and check them off as you go, ensuring you never forget anything crucial.
                    <br /> <br />
                    <Link className={styles.Link} to="/signup">
                        Join Garden Diaries today
                    </Link> and immerse yourself in a friendly and
                        dynamic digital garden where your love for plants can blossom alongside a community that shares your passion.
                </p>
            </div>
        </Jumbotron>
    );
};

export default JumboTron;
