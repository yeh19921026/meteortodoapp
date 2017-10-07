import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({

    task:[
        {text:'task 1'},
        {text:'task 2'},
        {text:'task 3'},
    ],
});