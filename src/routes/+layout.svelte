<script>
    import "tailwindcss/tailwind.css";
</script>

<div class="navbar bg-base-100">
    <div class="navbar-start">
        <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="/">Home</a></li>
                <li><a href="/tryit">Try it!</a></li>
                <li><a target="_blank" href="https://github.com/DMG-TechLabs/iee-api">Github</a></li>
                <li><a target="_blank" href="https://iee.ihu.gr">IEE | IHU</a></li>
            </ul>
        </div>
    </div>
    <div class="navbar-center">
        <a href="/" class="btn btn-ghost text-xl">iee-api</a>
    </div>
    <div class="navbar-end">
        <label class="flex cursor-pointer gap-2">
            <span class="label-text">Default</span> 
            <input type="checkbox" value="emerald" class="toggle theme-controller"/>
            <span class="label-text">Emerald</span> 
        </label>
    </div>
</div>

<main>
    <slot />
</main>

<footer class="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © 2024 - All right reserved by DMG-TechLabs</p>
  </aside>
</footer>

<style>
    main {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 2em;
        width: 100vw;
        min-height: 100vh;
    }

    footer {
        margin-top: 2em;
    }
</style>
