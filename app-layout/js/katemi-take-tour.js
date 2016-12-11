/* globals hopscotch: false */

/* ============================================= */
/* KATEMI TAKE TOUR - Layout 1 (Service/Product) */
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
      placement: 'right',
      title: 'Product or Service Screenshot',
      content: 'Perfect to show your product or service layout. Press the play icon to show the video lightbox'
    },
    {
      target: 'tour-3',
      placement: 'top',
      title: 'Flexslider Head Banner',
      content: 'Your client logos and testimonial inside a smart above the fold layout. This will help your visitor trust your service.',
      yOffset: 25
    },
    {
      target: 'tour-4',
      placement: 'right',
      title: 'Your Product/Service Features',
      content: 'Perfect to describe what\'s your product special features. Click next to see more details about this section',
      arrowOffset: 100,
      xOffset: -200,
      yOffset: -80
    },
    {
      target: 'tour-5',
      placement: 'top',
      title: 'Image with PrettyPhoto Link',
      content: 'Hover the image below and click to show the PrettyPhoto plugin work.',
      arrowOffset: 140
    },
    {
      target: 'tour-6',
      placement: 'top',
      title: 'Mobile App Slideshow',
      content: 'Perfect to show your customers how it works on mobile',
      arrowOffset: 50
    },
    {
      target: 'tour-7',
      placement: 'left',
      title: 'Image Annotations',
      content: 'Ensure your customers about your service/product feature details. Hover the red dots to see the details.',
      xOffset: 75,
      yOffset: 85
    },
    {
      target: 'tour-8',
      placement: 'top',
      title: 'Your Best Deals',
      content: 'Pricing table with popular service ribbon',
      arrowOffset: 175
    },
    {
      target: 'tour-9',
      placement: 'right',
      title: 'Contact Form Modal',
      content: 'Click the link to show the contact form modal window.',
      yOffset: -25
    },
    {
      target: 'tour-10',
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

