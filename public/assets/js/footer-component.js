const footerContent = `
    <footer class="bg-bg border-t border-white/5 pt-10 pb-10">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-16">
        <div class="col-span-2 md:col-span-1">
          <a href="#" class="flex items-center gap-2 mb-6">
            <div class="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-white font-bold">
              <img class="w-8 h-8" src="assets/img/logo/icon-512.png" alt="Campus Hub Logo" />
            </div>
            <span class="font-display font-bold text-xl text-white tracking-tight">Campus Hub</span>
          </a>
          <p class="text-zinc-500 text-sm mb-6 leading-relaxed">The unified operating system for modern campuses.
            Connecting services, spaces, and students.</p>
          <div class="flex space-x-4">

            <button type="button"
              class="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Twitter Action">
              <i class="fa-brands fa-twitter"></i>
            </button>
            <button type="button"
              class="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Facebook Action">
              <i class="fa-brands fa-facebook"></i>
            </button>
            <button type="button"
              class="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Instagram Action">
              <i class="fa-brands fa-instagram"></i>
            </button>



          </div>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6 font-display">Ecosystem</h4>
          <ul class="space-y-3 text-sm text-zinc-400">
            <li><a href="app.html" class="hover:text-white transition-colors">Campus Hub app</a></li>
            <li><a href="postalhub.html" class="hover:text-white transition-colors">Postal Management System</a></li>
            <li><a href="nexo.html" class="hover:text-white transition-colors">Nexo POS</a></li>
            <li><a href="https://docs.campushub.my" class="hover:text-white transition-colors">Developer API</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6 font-display">Solutions</h4>
          <ul class="space-y-3 text-sm text-zinc-400">
            <li><a href="#" class="hover:text-white transition-colors">For Universities</a></li>
            <li><a href="#" class="hover:text-white transition-colors">For Retailers</a></li>
            <li><a href="#" class="hover:text-white transition-colors">For Student Unions</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6 font-display">More</h4>
          <ul class="space-y-3 text-sm text-zinc-400">
            <li><a href="about.html" class="hover:text-white transition-colors">About</a></li>
            <li><a href="#contact" class="hover:text-white transition-colors">Contact</a></li>
            <li><a href="https://policies.campushub.my" class="hover:text-white transition-colors">Policies</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <!-- Wrapped in a div to keep them stacked together -->
        <div class="flex flex-col text-center md:text-left">
          <p class="text-zinc-600 text-sm">© <span id="year">2026</span> Campus Hub Project. All rights reserved.</p>
          <a href="https://studio.qimlab.com.my" class="text-zinc-600 text-xs mt-1 hover:text-zinc-400 transition-colors">by QL Studio</a>

        </div>

       
      </div>
    </div>
  </footer>

  <script>
   

    // Set dynamic copyright year
    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  </script>
`;

class GlobalFooter extends HTMLElement {
  connectedCallback() {
    this.style.display = 'block';
    this.innerHTML = footerContent;
  }
}

customElements.define('global-footer', GlobalFooter);
