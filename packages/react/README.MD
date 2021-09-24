# Auto complete

In this we're using React to build a simple Autocomplete function. 

You will need to fetch the data from:

https://jsonplaceholder.typicode.com/users

Example Response:

```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
]
```

Using the fetch API pull the data from this endpoint and write a component that will, as the user types, output the auto complete items that match the the users name.

Complete the App.jsx file so it functions.

**Notes**:

- Due to limitations of the coding platform everything is compiled in browser and React is a global. If you want to 
  access hooks please use for example `React.useState` etc. You could destructure from this as well to avoid writing `React` everywhere.


**Bonus Question**

Now, if you were to have to send the search term to the API as the user types, what considerations would you make? 
