import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Carousel_Slide from './CarouselSlide';
// project images
import trainPic from './../../assets/projectPics/Train.jpg';
import gifPic from './../../assets/projectPics/GIF.png';
import friendsPic from './../../assets/projectPics/friends.png';
import qaPic from './../../assets/projectPics/q_and_a.jpg';
import lockPic from './../../assets/projectPics/lock.jpg';
import hangmanPic from './../../assets/projectPics/Hangman.png';
import greedyPic from './../../assets/projectPics/GreedyBastards2.png';
import eyeballPic from './../../assets/projectPics/eyeBall.png';
import scrabblePic from './../../assets/projectPics/scrabble.jpg';
import burgerPic from './../../assets/projectPics/burger.png';
// technology images
import bootPic from './../../assets/projectPics/bootstrap.png';
import cssPic from './../../assets/projectPics/css3.png';
import htmlPic from './../../assets/projectPics/html.png';
import jqueryPic from './../../assets/projectPics/jquery.png';
import jsPic from './../../assets/projectPics/js.png';
import materializePic from './../../assets/projectPics/materialize.png';
import mysqlPic from './../../assets/projectPics/mysql.png';
import nodePic from './../../assets/projectPics/node.png';
import octoCatPic from './../../assets/projectPics/Octocat.png';
import herokuPic from './../../assets/projectPics/heroku.png';
import reactPic from './../../assets/projectPics/react.png';
import expressPic from './../../assets/projectPics/express.png';
import mongoPic from './../../assets/projectPics/mongo.jpg';
import firebasePic from './../../assets/projectPics/firebase.png';
import linkedInPic from './../../assets/projectPics/In.png';
import handlebarsPic from './../../assets/projectPics/handlebars.png';
import bcryptPic from './../../assets/projectPics/bcrypt.jpg';

export const ProjectCarousel = props => {
    let trainTech = [
        bootPic,
        jsPic,
        cssPic,
        htmlPic,
        nodePic,
        octoCatPic,
        herokuPic,
        jqueryPic,
        firebasePic
    ];
    let gifTech = [
        jqueryPic,
        jsPic,
        htmlPic,
        cssPic,
    ];
    let friendsTech = [
        jsPic,
        htmlPic,
        cssPic,
        expressPic,
    ];
    let qaTech = [
        nodePic,
        jsPic,
        octoCatPic
    ];
    let lockTech = [
        jsPic,
        herokuPic,
        nodePic,
        cssPic,
        htmlPic,
        bcryptPic,
        handlebarsPic,
        mysqlPic,
        octoCatPic
    ];
    let hangmanTech = [
        octoCatPic,
        jsPic,
        cssPic,
        htmlPic,
        herokuPic
    ];
    let greedyTech = [
        mongoPic,
        expressPic,
        reactPic,
        nodePic,
        materializePic,
        herokuPic,
        octoCatPic,
        cssPic,
        htmlPic,
        jsPic,
    ];
    let eyeballTech = [
        reactPic,
        materializePic,
        jsPic,
        cssPic,
        htmlPic,
    ];
    // GIF
    // utilizes APIs
    // good comments
    // initial exploration of state
    let scrabbleTech = [
        jsPic,
        nodePic,
        octoCatPic
    ];
    let burgerTech = [
        jsPic,
        nodePic,
        octoCatPic,
        mysqlPic,
        expressPic,
        jqueryPic
    ]
    // ********************************************************
    // carousel text
    // ********************************************************

    let train = {
        title: "Train Scheduler",
        text: "This project was mainly used to get comfortable with forms and api calls. It uses Firebase for storage but the data does not persist past a refresh. The project is hosted on GitHub",
        tech: trainTech,
        src: trainPic,
        alt: "an image of a train",
        class: "train-slide",
        url: 'https://thefreck.github.io/trainSchedule/'
    };
    let gif = {
        title: "GIF Finder",
        text: "This project searches Giphy for GIFs according to user entered themes. It was practice using API's and demonstrates a minimalist clean design",
        tech: gifTech,
        src: gifPic,
        alt: "a snapshot image of the application",
        class: "gif-slide",
        url: 'https://thefreck.github.io/gifmantasticification/'
    };
    let friends = {
        title: "Friend Finder",
        text: "This is a very simple dating app. It essentially asks the user questions and matches them to others in the system. The goal was to practice server logic and display it to the client. Future development on this would be to include a database so that the effects could match people to others who have signed up instead of the dummy accounts I have created",
        tech: friendsTech,
        src: friendsPic,
        alt: "an image of animal friends",
        class: "friends-slide",
        url: 'https://thefreck.github.io/be-my-friend'
    };
    let qa = {
        title: "Hangman Console Game",
        text: "This is similar to the other hangman game. This was written purely in node and does not have a GUI outside of the command line but it does render a hangman using normal ASCII characters",
        tech: qaTech,
        src: qaPic,
        alt: "an image of the letters Q & A",
        class: "qa-slide",
        url: 'https://github.com/TheFreck/word-game'
    };
    let lock = {
        title: "Secure And Accessible",
        text: "This is a boilerplate login application. It uses MySQL to store users and their credentials. All credentials are encrypted using bcrypt and Passport handles authentication.",
        tech: lockTech,
        src: lockPic,
        alt: "an image of a padlock",
        class: "lock-slide",
        url: 'https://login-template-shen.herokuapp.com/'
    };
    let hangman = {
        title: "Hangman",
        text: "This is a game of hangman. Try to guess the name of the music group before the guesses run out. The images are .png files that are displayed or hidden using JQuery",
        tech: hangmanTech,
        src: hangmanPic,
        alt: "an image depicting the game of hangman",
        class: "hangman-slide",
        url: 'https://thefreck.github.io/wordGuessGame/'
    };
    let greed = {
        title: "Greedy Bastards Gift Exchange",
        text: "This is a gift exchange application. A user might sign up and post descriptions of gifts they'd like. They can then send the application to friends and family. It could be used as a wedding registry not tied to a specific store. When a friend or family member decides to purchase a gift they can mark the gift registry to ensure another friend does not get the same gift",
        tech: greedyTech,
        src: greedyPic,
        alt: "a clip-art splat with the title of the project",
        class: "greedy-slide",
        url: 'https://greedy-bastages.herokuapp.com/'
    };
    let eyeball = {
        title: "The Eyeball Memory Game",
        text: "This is an application written entirely in React and does not have a back end component. After each guess the eyeballs are mixed up. Try to see how many guesses you can get",
        tech: eyeballTech,
        src: eyeballPic,
        alt: "an image of an eyeball",
        class: "eyeball-slide",
        url: 'https://eye-ball-memory-game.herokuapp.com/'
    };
    let scrabble = {
        title: "Scrabble High Score",
        text: "This console app was created to solve the 538 dot com weekly riddler. The goal was to find the highest score word that can be made out of all 100 scrabble tiles. This means that if a word is made up of smaller words then the constituent words are also counted and scored.",
        tech: scrabbleTech,
        src: scrabblePic,
        alt: "an image displaying all the scrabble tiles",
        class: "scrabble-slide",
        url: 'https://github.com/TheFreck/ScrabbleWinner/'
    };
    let burger = {
        title: "Burger Restaurant Ordering System",
        text: "This is an application mimicing the process of ordering a burger in a restaurant. There is a kitchen and a dining room. When an order is placed it starts in the kitchen. It is either thrown away as burnt (removed from the DB) or it is sent to the dining room (moved to the other DB table). Once it reaches the kitchen it can either be consumed (removed from the DB) or sent back to the kitchen (moved back to the kitchen table)",
        tech: burgerTech,
        src: burgerPic,
        alt: "an image of a hamburger",
        class: "burger-slide",
        url: 'https://burgers-and-more-burgers.herokuapp.com/'
    };

    let carouselItems = [
        train, gif, /*friends needs to be fixed*/, qa, lock, hangman, greed, eyeball, scrabble, burger
    ];

    return (
        <div className="element-body">
                <h1 className="section-title" >Projects I've Developed</h1>
            <Carousel className="carousel-slide">
                {carouselItems.map(item => (
                    <Carousel.Item key={item.title} interval={100000}>
                        <Carousel_Slide
                            title={item.title}
                            text={item.text}
                            tech={item.tech}
                            src={item.src}
                            alt={item.alt}
                            className={item.class}
                            url={item.url}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default ProjectCarousel;