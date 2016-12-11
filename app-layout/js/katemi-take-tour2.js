/* globals hopscotch: false */

/* ============================================= */
/* KATEMI TAKE TOUR - Layout 2 (Apps) */
/* ============================================= */

var tour = {
  id: 'katemi-take-tour',
  steps: [
    {
      target: 'tour-1',
      title: 'Welcome to Katemi!',
      content: 'Hey there! This is the example tour feature of Katemi Landing Page. I will guide you through the template to see what will you get from Katemi Landing Page',
      placement: 'bottom',
      xOffset: 300,
      arrowOffset: 140
    },
    {
      target: 'tour-2',
      placement: 'top',
      title: 'App Screenshot',
      content: 'App slideshow, perfect to show your App layout/design'
    },
    {
      target: 'tour-3',
      placement: 'right',
      title: 'Your App Features',
      content: 'Perfect to describe what\'s your app special features. Click next to see more details about this section',
      arrowOffset: 100,
      xOffset: -200,
      yOffset: -80
    },
    {
      target: 'tour-4',
      placement: 'top',
      title: 'Image with PrettyPhoto Link',
      content: 'Hover the image below and click to show the PrettyPhoto plugin work.',
      arrowOffset: 140
    },
    {
      target: 'tour-5',
      placement: 'top',
      title: 'Mobile App Slideshow',
      content: 'Perfect to show your customers how it works on mobile',
      arrowOffset: 50
    },
    {
      target: 'tour-6',
      placement: 'right',
      title: 'Image Annotations',
      content: 'Ensure your customers about your app feature details. Hover the red dots to see the details.',
	  arrowOffset: 80
    },
    {
      target: 'tour-7',
      placement: 'left',
      title: 'Toggle FAQ',
      content: 'Click the "questions" to toggle the anwers/description',
    },
    {
      target: 'tour-8',
      placement: 'bottom',
      title: 'Contact Form Modal',
      content: 'Click the link to show the contact form modal window.'
    },
    {
      target: 'tour-9',
      placement: 'top',
      title: 'Work Subscribe Form',
      content: 'As well as the contact form. The subscribe form is working, and you don\'t need any online database to collect your subscribers email address. Perfect!<hr> <i>That\'s all folks, now go press Done and the Purchase button to get this template! ;)</i>',
      arrowOffset: 130,
      yOffset: 25
    }
  ],
  showPrevButton: true,
  scrollTopMargin: 100
}

/* ========== */
/* TOUR SETUP */
/* ========== */
addClickListener = function(el, fn) {
  if (el.addEventListener) {
    el.addEventListener('click', fn, false);
  }
  else {
    el.attachEvent('onclick', fn);
  }
},

init = function() {
  var startBtnId = 'startTourBtn',
      calloutId = 'startTourCallout',
      mgr = hopscotch.getCalloutManager(),
      state = hopscotch.getState();

  if (state && state.indexOf('katemi-take-tour:') === 0) {
    // Already started the tour at some point!
    hopscotch.startTour(tour);
  }
  else {
    // Looking at the page for the first(?) time.
    setTimeout(function() {
      mgr.createCallout({
        id: calloutId,
        target: startBtnId,
        placement: 'left',
        title: 'Click Take a Tour',
        content: 'Click to see the Katemi take a tour feature in action!<hr><i>This feature is great for introducing your customers on your website/service/product or app. :)',
        yOffset: -25,
        arrowOffset: 20,
        width: 240
      });
    }, 100);
  }

  addClickListener(document.getElementById(startBtnId), function() {
    if (!hopscotch.isActive) {
      mgr.removeAllCallouts();
      hopscotch.startTour(tour);
    }
  });
};

init();

