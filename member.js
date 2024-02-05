function skillsMember(){};
skillsMember.prototype = {
  add: function(skill){
    console.log('Adding skill: ' + skill);
  },
  remove: function(skill){
    console.log('Removing skill: ' + skill);
  },
  list: function(){
    console.log('Listing skills');
  }
};

// Path: member.js
function member(){
  this.skills = new skillsMember();
}

// Path: main.js
var member = new member();
member.skills.add('Javascript');
member.skills.remove('Javascript');
member.skills.list();
 
 The member object is composed of the skillsMember object. This is a good example of the use of the composition pattern. 
 The Composite Pattern 
 The composite pattern is a structural pattern that allows us to compose objects into tree structures to represent part-whole hierarchies. 
 The composite pattern is a structural pattern that allows us to compose objects into tree structures to represent part-whole hierarchies. 
 The composite pattern allows us to treat individual objects and compositions of objects uniformly. The composite pattern allows us to treat individual objects and compositions of objects uniformly. 
 The composite pattern is a structural pattern that allows us to compose objects into tree structures to represent part-whole hierarchies