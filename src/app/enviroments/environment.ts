export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDg4BqeB147NGkZMGlw89SibDOznX2kQ4M",

        authDomain: "musicante2023.firebaseapp.com",
      
        projectId: "musicante2023",
      
        storageBucket: "musicante2023.appspot.com",
      
        messagingSenderId: "29874549323",
      
        appId: "1:29874549323:web:c3673bc8f8259df58553ce",
      
        measurementId: "G-FJV2M9D38X"
      
    }
  };
  
export const countDownLimit = new Date("Nov 22, 2023 12:00:00")
export const canVote = ():boolean => {
    var now = new Date().getTime();
    let limit = countDownLimit.getTime();
    return now < limit
}