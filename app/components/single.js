import Component from '@ember/component';


export default Component.extend({

    iswide: false,

    actions:{

        toggleImageSize(){
            this.toggleProperty('isWide');
        }
    }

});