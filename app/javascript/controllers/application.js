/* eslint-disable */
import { Application } from '@hotwired/stimulus';

export const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

export { application };
