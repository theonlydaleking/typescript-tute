# Sorting Example

This project has some good examples of how classes work together with inheritence and abstract classes. 

The main idea of the project is that you define a class that sorts, and classes that contain different data types (numbers, strings and exotic shit like linked lists)

The goal is to then store data in instances of these, then sort them. 

Some old code of how _not_ to do it is also included. 

the parent class is called SuperSort.ts and it is the abstract class referred to that allows you to call super() in child classes and get access to the `sort()` function. 