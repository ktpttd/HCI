/* globals hopscotch: false */

/* ============================================= */
/* KATEMI TAKE TOUR - Layout 2 (Apps) */
/* ============================================= */

var tour = {
  id: 'katemi-take-tour',
  steps: [
    {
      target: 'tour-1',
      title: 'Welcome to Food Live!',
      content: 'Let\'s begin! Food Live is the perfect appilcation to order the food through your location.',
      placement: 'bottom',
      xOffset: 300,
      arrowOffset: 140
    },
    {
      target: 'tour-2',
      placement: 'top',
      title: 'App Screenshot',
      content: 'Take a look! Some screenshot of 4 main features: <strong>Shipper</strong>, <strong>Food</strong>, <strong>Arund me!</strong>, <strong>Restaurant</strong>.'
    },
    {
      target: 'tour-3',
      placement: 'right',
      title: 'All Features',
      content: 'Here you are! They are all features that Food Live has.',
      arrowOffset: 100,
      xOffset: -200,
      yOffset: -80
    },
    {
      target: 'tour-4',
      placement: 'top',
      title: 'Something beauty from Food Live :D',
      content: 'Hover the image below and click to show the PrettyPhoto.',
      arrowOffset: 140
    },
    {
      target: 'tour-5',
      placement: 'top',
      title: 'Some pictures in-app',
      content: 'How Food Live it works on mobile',
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
      content: 'Click the "questions" to toggle the answers/description',
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
      content: 'We will send the newest information to you. Thanks for your subscribing.',
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
        content: 'Click to see the Food Live take a tour feature in action!',
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

