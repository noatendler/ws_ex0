'use strict';

var event = require('events');

module.exports = class Hotel extends event{
    constructor(name, country){
        super();
        this.name = name;
        this.country = country;
        this.grade = 0;
        this.mss = new Array();
    }

    getArray(){
        return this.mss;
    }

    showHotel(){
    console.log(`hotelName: ${this.name}`);
    this.mss.push(`hotelName: ${this.name}`);
    console.log(`hotelCountry: ${this.country}`);
    this.mss.push(`hotelCountry: ${this.country}`);
    console.log(`hotelGrade: ${this.grade}`);
    this.mss.push(`hotelGrade: ${this.grade}`);
    this.emit("hotelID");
    }

    addLiks(num){
       this.grade += num;
        process.stdout.write(`like was added, new num of liks: ${this.grade}`);
        this.mss.push(`like was added, new num of liks: ${this.grade}`);
        this.emit("change");
    }

    subtractLiks(num){
        this.grade -= num;
            process.stdout.write(`like was subtract, new num of liks: ${this.grade}`);
            this.mss.push(`like was subtract, new num of liks: ${this.grade}`);
        this.emit("change");
    }

    check()
    {
         console.log('your likes are below zero');
         this.mss.push('your likes are below zero');

    }

}