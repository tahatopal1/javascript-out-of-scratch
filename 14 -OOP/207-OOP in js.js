/*
    ✅ Classical OOP: Classes
        🟢 Objects (instances) are instantiated from a class, which functions like a blueprint
        🟢 Behavior (methods) is copied from class to all instances

    ✅ OOP in JS: Prototypes
        🟢 Objects are linked to a prototype object
        🟢 Prototypal inheritance: The prototype contains methods (behavior) that are accessible to all objects linked to that prototype
        🟢 Behavior is delegated to the linked prototype object
        
    ✅ 3 Ways of Implementing Prototypal Inheritance in JS
        🟢 Constructor function
            🟡 Technique to create objects from a function
            🟡 This is how built-in objects like Arrays, Maps and Sets are actually implemented
        🟢 ES6 Classes
            🟡 Modern alternative to constructor function syntax
            🟡 "Syntactic sugar": behind the scenes, ES6 classes work exactly like constructor functions
            🟡 ES6 classes do NOT behave like classes in "classical OOP"
        🟢 Object.create()
            🟡 The easiest and most straightforward way of linking an object to a prototype object
*/
