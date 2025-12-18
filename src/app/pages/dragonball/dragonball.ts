import { Component, signal, Signal } from "@angular/core";


interface Character {
    name: string;
    id: number;
    powerLevel: number;
}
@Component({
 templateUrl: './dragonball.html',

})
export class DragonballPageComponent { 

    characters = signal<Character[]>([             
    {id:1,name:'goku',powerLevel:9001},
    {id:1,name:'vegeta',powerLevel:8001},
    {id:1,name:'piccolo',powerLevel:6001},
    {id:1,name:'Yamcha',powerLevel:3001},
    
]);


}