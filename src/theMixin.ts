import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export class TheMixin extends Vue {
    myDumbTest = 'my dumb test';

    created() {
        console.log(this.myDumbTest);
    }
}