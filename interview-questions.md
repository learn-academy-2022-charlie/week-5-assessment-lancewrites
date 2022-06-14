# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

  Your answer: A hash in Ruby is a list of key: value pairs that correspond to a class of objects. When I was first learning Ruby, I had to figure out how to update the values for specific keys in a hash. And, because hashes are enumerable, I was also able to iterate through a hash and manipulate the data within it.

  Researched answer: Some objects can be used as keys in Ruby hashes. If a value is not directly written into a hash to correspond with a key, then the program would search for an already declared value for that key if it was written earlier. Although hashes are similar to arrays, the indexing of a hash is based on the keys, not the value's number in the list.



2. What is a gem?

  Your answer: A gem in Ruby is like a node module in JavaScript. I have used Rails, which is a gem that helps make applications with the Ruby language. Another popular gem I have used is Rspec to test my Ruby code.

  Researched answer: A gem has 6 major components/directories: lib directory which houses the code for the gem; a testing directory; a rakefile that automates tests; a file for documentation, usually a README; and a gemspec which contains information about the gem like its version number and platform information. 



3. What is Ruby on Rails?

  Your answer: Ruby on Rails is an open source gem that allows a developer to create a full stack app using the Ruby language. I have used Ruby on Rails to store database information to be called upon in the app.

  Researched answer: Ruby on Rails prizes the idea of "Convention over Configuration" which basically allows the developer to focus on tried and true ways of quickly developing usable applications. Because of this approach, Ruby on Rails is touted as the framework that cares for the happiness of the developers who use it. 



4. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database is a database that arranges data in rows and columns. There are other kinds of databases but relational databases have data optimally organized. I have used ruby code to pass information into a database that would show up in a row if that database was displayed in a table. Basically, a row in a relational database is a child class of a parent class that represents the whole database.  

  Researched answer: Some relational databases use SQL to find specific information within the databases. Each row in the database has a unique identifier which corresponds to the object that row represents. A column contains a particular aspect of all of the objects within the database. For instance, a calendar event might be the whole row in a database tracking events, but a column could contain just the day of the week each event takes place on, without specifically identifying a particular event



5. What are primary keys? Why are they important?

  Your answer: A primary key is the unique identifier for an instance of a class or database. It is important because each instance in a database must have something to distinguish itself from other instances, especially of the data associated with those instances is similar. An instance in a database that I deleted took its unique identifier along with it. If it had the unique identifier of '2' and I deleted it, then '2' would no longer be able to be used as a unique identifier for any other information added to the database. 

  Researched answer: Because a primary key needs to serve as a unique identifier it cannot have a null value. In Rails, each primary key is named 'id' which corresponds to the 'row' that the instance occupies in the database.



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: Representational State Transfer routes try to make HTTP requests out of the operations that are applied to objects

2. JSON: JavaScript Object Notation: stores and transports data from a server to a web page that is written in a way similar to objects in JavaScript

3. ERB: Embedded Ruby: allows developer to genterate any text in an quantity using templates. Combines plain text with Ruby code. Useful when creating files that include repetative information. 

4. Params: allows developer to choose which attributes are permitted for mass updating while maintaining the privacy of sensitive information. 

5. API: Application Programming Interface. An intermediary that allows communication between applications. 
