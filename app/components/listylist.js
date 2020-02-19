import Component from '@ember/component';


export default Component.extend({

    actions: {
        showThis(person){
            alert('you straight up just clicked on '+ person);
        }
    }

});