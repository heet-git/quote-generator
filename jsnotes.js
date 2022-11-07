/* Every Javascript object has a prototype property, 
which makes inheritance possible in javascript;

The prototype property of an object is where 
we put methods and properties that we 
want other objects to inherit;

The constructor's prototype property is NOT 
the property of the constructor
itself; it's the property of All instances 
that are created through it.

When the certain methods (or property)
is called, the search starts in the 
object itself; and if cannot be found,
the search moves on to the object's 
prototype. This continues until the 
method is found: prototype chain. 
