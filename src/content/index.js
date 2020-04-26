import 'alpinejs';

console.log("working...")
(function() {
   function script() {
      console.log(window.location);
   }

   function inject(fn) {
      const script = document.createElement("script");

      script.textContent = `(${fn.toString()})();`

      (document.head || document.documentElement).appendChild(script);
   }

   inject(script);
});
