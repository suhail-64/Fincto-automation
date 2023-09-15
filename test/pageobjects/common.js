class Common {
    constructor() {
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
        this.namesArray = ['John', 'Alice', 'Bob', 'Eve', 'Charlie']; // Add your array of names here
        this.name = this.generateRandomName();
        this.emailAddress = this.generateRandomEmailAddress();
        this.phoneNumber = this.generateRandomPhoneNumber();
    }

    generateRandomName() {
        const randomIndex = Math.floor(Math.random() * this.namesArray.length);
        return this.namesArray[randomIndex];
    }

    generateRandomEmailAddress() {
        const randomString = Math.random().toString(36).substring(3, 8);
        return randomString + "@gmail.com";
    }

    generateRandomPhoneNumber() {
        // Generate a random 10-digit phone number
        const phoneNumber = '9' + Math.random().toString().substring(2, 12);
        return phoneNumber;
    }

    // You can add methods to access the generated values if needed
    getName() {
        return this.name;
    }

    getEmailAddress() {
        return this.emailAddress;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }
}

module.exports = Common;
