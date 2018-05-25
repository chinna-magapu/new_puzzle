import {Component,} from '@angular/core';

@Component({
    selector: 'magic-box',
    templateUrl: './magic.component.html',
    styleUrls: ['./magic.component.css']
})
export class MagicComponent {
    title = 'app-manis';
    curQuestion = 0;
    curQuestionData: any = {};
    curShuffledOptions = [];
    curActualOptions = [];
    curSelectedOptions = [];


    questions = [
        {
            question_text: 'Put the words below in Alphabatical Order',
            answer: ['abstract', 'cinquain', 'diagram', 'literary', 'long'],
            jumbled: ['literary', 'long', 'abstract', 'diagram', 'cinquain'],
        },
        {
            question_text: 'Put the words below in Alphabatical Order',
            answer: ['War', 'Wasp', 'Waste', 'Wrinkle', 'Wrist'],
            jumbled: ['Wasp', 'Wrist', 'Wrinkle', 'Waste', 'War'],
        }
    ];

    numberOfOptions = 5;

    constructor() {

        // console.log(this.dictionary);
        // let rand = this.getRandomInt(0, (this.dictionary.length - (this.numberOfOptions + 1)));
        // this.options = this.dictionary.slice(rand, rand + 5);
        this.curQuestionData = this.questions[this.curQuestion];
        this.curShuffledOptions = this.curQuestionData.jumbled;
        this.curActualOptions = this.curQuestionData.answer;
        // this.curSelectedOptions = this.curQuestionData.jumbled;
        for (let i = 0; i < this.curShuffledOptions.length; i++) {
            this.curSelectedOptions[i] = '';
        }

    }

    onDrop(data: any, index: number) {
        // alert( 'dropped ' + data , 'index ' + index );
        this.curSelectedOptions[index] = data;
        document.getElementById('drop' + index).classList.remove('drop-card')
        document.getElementById('drop' + index).classList.add('drag-card');
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    checkEmpty(val) {
        if (val.trim() !== '' && val.trim() != null && val.trim() !== undefined) {
            return true;
        }
    }

    checkAnswer() {
        if (JSON.stringify(this.curSelectedOptions) === JSON.stringify(this.curQuestionData.answer)) {
            for (let i = 0; i < this.curQuestionData.answer.length; i++) {
                if (this.curQuestionData.answer[i] === this.curSelectedOptions[i]) {
                    document.getElementById('drop' + i).classList.add('success-div');
                }
            }
        } else {
            for (let i = 0; i < this.curQuestionData.answer.length; i++) {
                if (this.curQuestionData.answer[i] !== this.curSelectedOptions[i]) {
                   // this.curSelectedOptions[i] = '';
                   // document.getElementById('drag' + i).classList.add('error-div');
                } else {
                    document.getElementById('drop' + i).classList.add('success-div');
                }
            }
        }
    }
}
