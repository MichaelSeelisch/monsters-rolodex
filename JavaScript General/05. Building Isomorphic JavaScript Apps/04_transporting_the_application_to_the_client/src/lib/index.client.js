export default class Application {

  navigate(url, push = true) {
    // If browser does not support the history API then set location and return
    if(!history.pushState) {
      window.location = url;
      return;
    }

    console.log(url);

    // Only push history stack if push argument is true
    if (push) {
      history.pushState({}, null, url);
    }
  }

  start() {
    // Create event listener popstate
    this.popStateListener = window.addEventListener('popstate', (event) => {
      let { pathname, search } = window.location;
      let url = `${pathname}${search}`;
      this.navigate(url, false);
    });

    // Create click listener that delegates to navigate method if it meets the criteria for executing
    this.clickListener = document.addEventListener('click', (event) => {
      let { target } = event;
      let identifier = target.dataset.navigate;
      let href = target.getAttribute('href');

      if(identifier !== undefined) {
        // If user clicked on an href then prevent the default browser action (loading a new HTML doc)
        if (href) {
          event.preventDefault();
        }

        // Navigate using the identifier if one was defined; or the href
        this.navigate(identifier || href);
      }
    });
  }
}
