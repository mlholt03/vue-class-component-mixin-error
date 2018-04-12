import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';

import {TheMixin} from './theMixin';

@Component({
    
})
export class TheComponent extends mixins(TheMixin) {
    
}