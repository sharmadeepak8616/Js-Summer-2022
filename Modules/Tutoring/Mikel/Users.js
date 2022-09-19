class Users {

    // properties
    name = '';
    age = 0;
    static countryName;


    // functions
    /**
     * Function to print Hello
     */
    printHello() {
        console.log(`Hello ${this.name}`);
    }

    /**
     * Function to print if user's age is above 18 or not
     */
    userAbove18(userAge) {
        if (userAge > 18) {
            console.log("User above 18");
        } else {
            console.log("User is not above 18");
        }
    }


    /**
     * Function to convert 1-word String into Titlecase
     * 
     * word = haPPy
     * get index-1 to end -> convert word into lowercase -> appy
     * convert index-0 to Uppercase -> H
     * 
     * convert index-0 to Uppercase -> H + get index-1 to end -> convert word into lowercase -> appy
     * 
     * 
     * Happy
     * 
     * 
     * 
     * 
     */
    convertToTitleCase(word) {
        const lWord = word.substring(1).toLowerCase();
        const lWord_H = word.slice(0,0).toUpperCase();
        console.log(lWord_H + lWord);
    }





}
module.exports = Users;