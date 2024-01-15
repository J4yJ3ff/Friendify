import React from 'react';
import ReactDOM from "react-dom";
import Category from "./components/Category";
import Question from './components/Question';
import Nav from "./components/Nav";
import Button from './components/Button';



export const questions = [
    "If you could have tea with one fictional character, who would it be?",
    "If you could master any instrument on earth, what would it be?",
    "If you could sit down with your 15-year old self, What you tell him or her?",
    "Do you think you are currently operating at 100% capacity?",
    "Have you ever dreamt about starting a business?",
    "What does the word 'Success' mean to you",
    "What would be the absolute perfect day?",
    "if social media didn't exist, how would your life be different?",
    "What was the best part of your day so far?",
    "What are you most grateful for, right now in this moment?"
]



export let index = 0;
const handleNextClick = () => {
    index = (index + 1) % questions.length;
    render();
}


const handlePrevClick = () => {
    index = (index - 1 + questions.length) % questions.length;

    render();
}

const arrowLeft = (
    <i class="fa-solid fa-arrow-left fa-3x"></i>
)

const arrowRight = (
    <i class="fa-solid fa-arrow-right fa-3x"></i>
)

//////////////////////////
const render = () => {
    class Friendify extends React.Component {
        render() {
            return (
                <div className='bg-background py-10 px-20 m-0 overflow-hidden h-screen'>
                    <Nav />
                    <Category />
                    <div className='bg-cards rounded-2xl flex border-2 border-accent'>
                        <div className="border-accent border-r-2 grid grid-col-2 grid-row-2 w-2/3 items-center justify-center text-center">
                            <Question />

                        </div>
                        <div className='flex-row w-1/3'>
                            <div className='border-b-2 border-accent grid-row-2 h-1/2'>
                                <div className='flex flex-col h-full justify-end p-4'>
                                    <h1 className='text-pcolor'>Use the Arrows Below to move to the next/previous Question</h1>
                                </div>
                            </div>
                            <div className='flex h-1/2 justify-center text-center items-center'>
                                <div className='grid-col-2 w-1/2 h-full border-r-2 border-accent'>
                                    <div className='flex h-full justify-center text-center items-center'>
                                        <Button label={arrowLeft} handleClick={handlePrevClick} />
                                    </div>
                                </div>
                                <div className='w-1/2'>
                                    <div className='flex h-full justify-center text-center items-center'>
                                        <Button label={arrowRight} handleClick={handleNextClick} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* <div className='bg-cards rounded-2xl flex border-2 border-accent'>
                        <div className="border-accent border-r-2 grid grid-col-2 grid-row-1 w-2/3 items-center justify-center text-center">
                            

                        </div>
                        <div className='flex-row w-1/3'>
                            <div className='border-b-2 border-accent grid-row-2 h-1/2'>
                                <h1>Paragraph Here</h1>
                            </div>
                            <div className='flex h-1/2 justify-center text-center items-center'>
                                <div className='grid-col-2 w-1/2 h-full border-r-2 border-accent'>
                                    <div className='flex h-full justify-center text-center items-center'>
                                        <Button label={arrowLeft} handleClick={handlePrevClick} />
                                    </div>
                                </div>
                                <div className='w-1/2'>
                                    <div className='flex h-full justify-center text-center items-center'>
                                        <Button label={arrowRight} handleClick={handleNextClick} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> */}



                </div>
            )
        }

    };

    ReactDOM.render(<Friendify />, document.getElementById("app"));
}

render();






