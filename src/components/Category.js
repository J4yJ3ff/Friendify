import React from "react"
const category = "Category";


export default class Category extends React.Component {
    render() {
        return (
            <div className="flex flex-col justify-center text-center items-center w-full mt-10 mb-10">
                <h1 className="text-6xl font-bold text-accent">{category}</h1>
                <p className="pt-2 text-xl text-pcolor">Start Awesome Conversations with Friends or Loved Ones</p>
            </div>

        )
    }
}