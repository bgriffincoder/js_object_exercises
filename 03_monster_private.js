/**
 * Let's protect our objects' properties so no one can change the name or health directly.
 *
 * Copy your code from the previous exercise, then change the properties to be private.
 *
 * Once the properties are private you will need to add GETTER methods so we can still
 * access the values. So, add two methods called "getName" and "getHealth" that return the
 * value of the name and health properties respectively.
 *
 * Finally, now that your name and health properties are private, fix the line that
 * prints out each monster's name and health.
 *
 * NOTE: Read the section "Private" for a push in the right direction.
 * http://javascript.crockford.com/private.html
 */

(function(){
    //@see https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
    'use strict';

    ///////////////////////////
    // Put your code here!
    ///////////////////////////
    function LivingThing(monsterName, monsterHealth){
      let name = monsterName; //private variable
      let health = monsterHealth //private variable

      //public method - want people be able to access the methods so .this stays
      this.isAlive = function() {
        if(health > 0) {
          return true;
        } else {
          return false;
        }
      }

      this.getName = function() {
        return name;
      }

      this.getHealth = function() {
        return health;
      }
    }

    let rat = new LivingThing("Rat",5);
    let goblin = new LivingThing("Goblin",30);
    let ogre = new LivingThing("Ogre",80);

    let monsters = [rat, goblin, ogre];


    //The code below should work when you are done
    console.log("Monsters!");

    //for...of loop supported in ES6
    //not compatable before IE edge
    //@see http://www.benmvp.com/learning-es6-for-of-loop/
    //@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    console.log("ES6 for...in");
    for (let monster of monsters) {
        console.log(monster.getName() + ": " + monster.getHealth());
    }

    //just a spacer
    console.log("===================");

    //for loop loop supported before ES6
    //@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
    console.log("for loop for support before ES6");
    for (let i=0; i < monsters.length; i++) {
        console.log(monsters[i].getName() + ": " + monsters[i].getHealth());
    }

})();
