import React from "react";
import {questions, index} from "../app"



export default class Question extends React.Component {
    render() {
        return (
            <main className="m-10">
                <div className="flex justify-center text-center items-center h-[300px]">
                    <p className="text-pcolor text-xl font-bold">{questions[index]}</p>
                </div>
            </main>
        )
    }
}