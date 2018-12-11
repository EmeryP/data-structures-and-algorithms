# Hashtables
A hashtable and methods to work with a hashtable.

## Challenge
Implement a Hashtable with the following capabilities:

* A method/function named `add` that takes in both the key and value. This method should hash the key and add the key and value pair to the table.
* A method/function named `find` that takes in the key and returns the value from key/value pair.
* A method/function named `contains` that takes in the key and returns if the key exists in the table already.
* A method/function named `getHash` that takes in a key and returns the index in the array the key is stored.
* A method/function named `serialize` that takes in a hashmap and returns a stringified version of it.
* A method named `deserialize` that takes in a hashmap and returns a new hashmap with the values from the input hashmap that meet a condition. 


## API
* `add(<key to add, value to add>)` will hash and add the thing to add to the hashtable. No return value.
* `find(<key of item to find>)` will return the value of the key of the item to find.
* `contains(<key>)` will return `true` if the hashtable contains the key you searched for otherwise it'll return `false` if the key doesnt exist in the hashtable.
* `getHash(<key>)` will return the index in the array the key is stored.
* `serialize(<hashmap>)` will return a stringified version of the input hashmap.
* `deserialize(<hashmap>)` can consume a hashmap, will serialize/deserialize and return a new hashmap from the input based on a condition.

## Credits
Code Fellows instructors John & Allie

### Author
Emery Parks