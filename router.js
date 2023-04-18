const routes = [
    { path: /\/piedra-papel-tijera\/welcome/, component: initWelcomePage },
    { path: /\/piedra-papel-tijera\/instructions/, component: initInstructionsPage },
  ];
  
  function initRouter(container) {
    function goTo(path) {
      history.pushState({}, "", path);
      handleRoute(path);
    }
    
    function handleRoute(route) {
      for (const r of routes) {
        if (r.path.test(route)) {
          const el = r.component({ goTo: goTo });
          if (container.firstChild) {
            container.firstChild.remove();
          }
          container.appendChild(el);
        }
      }
    }
  
    if (location.host.includes("netlify.app") || "/") {
      goTo("/piedra-papel-tijera/welcome");
    } else {
      handleRoute(location.pathname);
    }
    
    window.onpopstate = function () {
      handleRoute(location.pathname);
    };
  }