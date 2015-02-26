if (Meteor.isClient) {
  Template.login.helpers({
    creatingAccount : function(){
      return Session.get("creatingAccount");
    }
  });
  
  Template.login.events({
    'click #loginform' : function () {
      Session.set('creatingAccount', false);
    },
    'click #accountform' : function () {
      Session.set("creatingAccount", true)
    },
    'click #createaccount' : function (e, t) {
      Session.set('creatingAccount', false);
      Accounts.createUser({
        username:  t.find("#username").value,
        password:  t.find("#password").value,
        email:     t.find("#email").value,
        profile:   {
          name: t.find("#name").value,
        }
      });
    },
    'click #login' : function () {
      
    },
    'click #logout' : function () {
      Meteor.logout()
    },
  });
}

if (Meteor.isServer) {
}
