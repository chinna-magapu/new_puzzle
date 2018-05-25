import { Component, } from '@angular/core';

@Component({
  selector: 'magic-box',
  templateUrl: './magic.component.html',
  styleUrls: ['./magic.component.css']
})
export class MagicComponent {
  title = 'app-manis';
  dictionary=[ "abbreviation",
  "abstract",
  "acronym",
  "acrostic", 
  "ballad",
  "base word",
  "bias",
  "blank verse",
  "characterisation",
  "cinematography",
  "cinquain",
  "vclause",
  "close-up shot",
  "demonstrative pro",
  "dependent clause",
  "descriptive ",
  "diagram",
  "effects",
  "elegy",
  "ellipsis",
  "end rhyme",
  "endpapers",
  "epic",
  "flashback",
  "font",
  "foreground",
  "foreshadowing",
  "framing",
  "free verse",
  "haiku",
  "homograph",
  "homonym",
  "homophone",
  "indirect object",
  "inference",
  "infinitive", 
  "information report",
  "literary recount",
  "literary",
  "logo",
  "long shot",
  "medium shot",
  "metaphor",
  "metre",
  "mind map",
  "mise-en-scene"];
  options:string[]=[];
  numberOfOptions=5;
  constructor(){
    console.log(this.dictionary);
    let rand=this.getRandomInt(0,(this.dictionary.length-(this.numberOfOptions+1)));
    this.options=this.dictionary.slice(rand,rand+5);
    console.log(this.options);
  }
  onDrop(data: any,index:number) {
    alert(`dropped: ${data}`);
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
