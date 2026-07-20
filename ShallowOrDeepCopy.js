Shallow Copy :  A shallow copy is copy ma main obeject but if main object is contain nested object so, when we update shallow copyy nasted refrence
  it will effect main Object natsed property

// A shallow copy duplicates only the top-level properties of an object.
// If the object contains nested objects or arrays, those references are shared between the original and the copy.
const original = {
  name: "Alice",
  address: { city: "Chennai", zip: 600010 }
};
// Shallow copy using Object.assign
const shallowCopy = Object.assign({}, original);
// Or using spread operator
// const shallowCopy = { ...original };
shallowCopy.name = "Bob";
shallowCopy.address.city = "Bangalore";
console.log(original.name);       // "Alice" (not affected)
console.log(original.address.city); // "Bangalore" (affected!)

Deep Copy : A deep copy duplicates everything, including nested objects and arrays. The copy is completely independent of the original.
const original = {
  name: "Alice",
  address: { city: "Chennai", zip: 600010 }
};

// Deep copy using JSON methods (simple but limited)
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.name = "Bob";
deepCopy.address.city = "Bangalore";
console.log(original.name);       // "Alice" (not affected)
console.log(original.address.city); // "Chennai" (not affected)

