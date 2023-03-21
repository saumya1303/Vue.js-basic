<template>
    <div>
      <h1>framework array</h1>
      <ul>
        <li v-for="(str,index) in frameworks" :key="index"> <!--key is used to identify any duplicate value  str is value of array ehich it has-->
          {{index}} - {{str}}</li>  <!--index is for index  {{ index+1 }} to start from 1 and str is a variable to store values-->
      </ul>
      <h1>Object Array</h1>
      <ul>
        <li v-for="item in items" :key="item.id">   <!--v for is just to iterate over the loop of array and key is to identify its unique value -->
          {{ item.name }} Rs.{{ item.price }}/-
        </li>
      </ul>
      <h1> 3 key value pair via method Object Array</h1>
      <ul>
        <li v-for="(value,name,index) in student" :key="index">   <!--v for is just to iterate over the loop of array and key is to identify its unique value -->
          {{ index}} -{{ student.name}} - {{ student.city }}
        </li>
      </ul>
      <h1>books table</h1>
      <table border="2">
        <tr>
          <th>ID</th>
          <th>Book name</th>
          <th>Author name</th>
          <th>Number of pages</th>
          <th>issued/available</th>
        </tr>
        <tr v-for="books in books" :key="index">
          <td>{{ index }}</td>
          <td>{{ book.id }}</td>
          <td>{{ book.book_name }}</td>
          <td>{{ book.Author_name }}</td>
          <td>{{ book.Number_of_pages }}</td>
          <td>{{ book.issued_available }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  
    export default {
      data() {
        return {
          frameworks : ['Angular', 'React', 'Vue', 'Expressjs', 'Vue'],
          items: [
                  { id: 1, name: "Orange", price: 24 },
                  { id: 2, name: "Banana", price: 12 },
                  { id: 3, name: "Apple", price: 15 },
              ],
          student:{
            name: "Saumya Pandey",
            age: 21,
            city:"lucknow",
          },
          books:[
            {id: 1 , book_name: "abc " , Author_name: " xyz" , Number_of_pages: 254 , issued_available: "yes"},
            {id: 1 , book_name: "abc " , Author_name: " xyz" , Number_of_pages: 254 , issued_available: "yes"},
            {id: 1 , book_name: "abc " , Author_name: " xyz" , Number_of_pages: 254 , issued_available: "yes"},
            {id: 1 , book_name: "abc " , Author_name: " xyz" , Number_of_pages: 254 , issued_available: "yes"},
            {id: 1 , book_name: "abc " , Author_name: " xyz" , Number_of_pages: 254 , issued_available: "yes"},
            {id: 1 , book_name: "abc " , Author_name: " xyz" , Number_of_pages: 254 , issued_available: "yes"},
            {id: 1 , book_name: "abc " , Author_name: " xyz" , Number_of_pages: 254 , issued_available: "yes"},
          ]  
        }
      }
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>