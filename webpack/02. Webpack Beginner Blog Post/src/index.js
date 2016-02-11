import $ from 'jquery';
import Button from './Components/Button';

$('body').html('Hello');

const button = new Button('google.com');
button.render('a');