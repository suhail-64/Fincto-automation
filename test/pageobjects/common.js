class Common {
  constructor() {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.namesArray = ['John', 'Alice', 'Bob', 'Eve', 'Charlie']; // Add your array of names here
    this.name = this.generateRandomName();
    this.emailAddress = this.generateRandomEmailAddress();
    this.phoneNumber = this.generateRandomPhoneNumber();
    this.companyNamesArray = ['Jrdx', 'Alice Tech', 'BobMartin Info', 'Eve entreprice', 'Charlie pvt ltd', 'CST', 'TSC'];
    this.companyName = this.generateRandomCompanyName();
    this.DINnumber = this.generateRandomDINnumber();
    this.randomAlphaNumeric = this.generateRandomAlphaNumericString();

    this.words = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua."];
    this.randomwords = this.generateRandomParagraph(201);
  }

  generateRandomName() {
    const randomIndex = Math.floor(Math.random() * this.namesArray.length);
    return this.namesArray[randomIndex];
  }

  generateRandomEmailAddress() {
    const randomString = Math.random().toString(36).substring(3, 8);
    return randomString;
  }

  generateRandomPhoneNumber() {
    // Generate a random 10-digit phone number
    const phoneNumber = '9' + Math.random().toString().substring(2, 12);
    return phoneNumber;
  }

  generateRandomCompanyName() {
    const randomIndex = Math.floor(Math.random() * this.companyNamesArray.length);
    return this.companyNamesArray[randomIndex];
  }

  generateRandomDINnumber() {
    const DINnumber = '8' + Math.random().toString().substring(2, 10);
    return DINnumber;
  }

  generateRandomAlphaNumericString() {
    const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * 36); // 26 letters + 10 numbers
      result += alphanumeric.charAt(randomIndex);
    }

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * 10); // 10 numbers
      result += alphanumeric.charAt(26 + randomIndex);
    }

    return result;
  }

  getRandomWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  generateRandomParagraph(charLimit) {
    let paragraph = "";
    let currentCharCount = 0;

    while (currentCharCount < charLimit) {
      const word = this.getRandomWord();
      if (currentCharCount + word.length + 1 <= charLimit) {
        paragraph += word + " ";
        currentCharCount += word.length + 1;
      } else {
        break;
      }
    }

    // Trim any extra space at the end
    paragraph = paragraph.trim();

    return paragraph;
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

  getCompanyName() {
    return this.companyName;
  }

  getDINnumber() {
    return this.DINnumber;
  }

  getRandomAlphaNumeric() {
    return this.randomAlphaNumeric;
  }

  getRandomWords() {
    return this.randomwords;
  }
}

module.exports = Common;
