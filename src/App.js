import React, { Component } from 'react';
import './App.css';
import {ingredients, base, spices} from "./cooking_sets";

class App extends Component {
    shuffle(xs) {
        let index = 0;
        let shuffled = [];
        xs.forEach(value => {
            let rand = Math.floor(Math.random() * index++);
            shuffled[index - 1] = shuffled[rand];
            shuffled[rand] = value;
        });
        return shuffled;
    };


    random_sample = (n, xs) => {
        return this.shuffle(xs).slice(0, n);
    };

    pick = (xs) => {
        return (n) => {
            return this.random_sample(n, xs).forEach((a) => {
                console.log("* ", a, "\n");
            });
        };
    };

    componentDidMount() {
        console.log('Curry needs a wet base. Following base would be nice: ');
        this.pick(base)(1);
        console.log('Curry gets now roasted in a pan. There is a selection of spices premade for you: ');
        this.pick(spices)(5);
        console.log('There is only one main ingredient, for your cury it will be: ');
        this.pick(ingredients)(1);
    }

    render() {
        return (
            <p>Have a look at the console tools :)</p>
        );
    }
}

export default App;
