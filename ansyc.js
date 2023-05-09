// Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should log the message to the console after the specified delay time.

const delayMessage = async (message, delay) => {
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(message);
  };
  
  delayMessage('We welcome you to our event', 3000); 
  

// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.

// const fetchData = async (id) => {
//     for (const id of ids) {
//       const data = await getUserData(ids);
//       console.log(userData);
//     }
//   };
//   fetchData(id(1,2,3,4,5,6))


// You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error. Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.

function findTask() {
    performTask().then(() => {console.log("Task is successful"); })
    .catch(() => { console.log("Task failed");});
  }
findTask()  