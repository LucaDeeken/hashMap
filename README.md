HashMap Implementation in JavaScript

Project Overview

This project is a custom implementation of a HashMap in JavaScript as part of The Odin Project curriculum. The implementation includes methods for setting, retrieving, and managing key-value pairs while handling collisions and dynamically resizing the hashmap when necessary.

Features

Custom hash function for key hashing

Handling collisions using separate chaining (or other strategies)

Dynamic resizing when the load factor exceeds 0.75

Standard HashMap methods:

set(key, value) – Inserts or updates a key-value pair

get(key) – Retrieves a value by key

has(key) – Checks if a key exists

remove(key) – Deletes a key-value pair

length() – Returns the number of stored keys

clear() – Removes all entries

keys() – Returns an array of all keys

values() – Returns an array of all values

entries() – Returns an array of key-value pairs

Testing the HashMap to ensure functionality after resizing

