<<<<<<< HEAD
import { Component, signal } from "@angular/core";


interface Character {
    name: string;
    id: number;
    powerLevel: number;
}
@Component({
 templateUrl: './dragonball.html',
 
})
export class DragonballPageComponent { 

    name = signal ('gohan');
    powerLevel = signal (5000);

    characters = signal<Character[]>([             
    {id:1,name:'goku',powerLevel:9001},
   // {id:1,name:'vegeta',powerLevel:8001},
    //{id:1,name:'piccolo',powerLevel:6001},
    //{id:1,name:'Yamcha',powerLevel:3001},
    
]);

addCharacter(){
if (this.name() || !this.powerLevel() || this.powerLevel() <=0 ) {
    return;       
}
 const newCharacter: Character = {
    id: this.characters().length + 1,
    name: this.name(),
    powerLevel: this.powerLevel(),
 };
 this.characters.update((list) => [...list, newCharacter]);
 this.resetFields();

   

} 
resetFields(){
    this.name.set('');
    this.powerLevel.set(0); 
} 

}
=======
import { Component } from "@angular/core";

@Component({
 templateUrl: './dragonball.html',

})
export class DragonballPageComponent { }
>>>>>>> origin/main
