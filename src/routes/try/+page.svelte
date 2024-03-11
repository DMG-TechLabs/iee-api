<script>
    import { domain } from "$lib/consts.js"
    import { onMount } from "svelte";

    let selected;
    let lessons = [];

    function range(from, to) {
        const result = [];
        let i = from;

        while (i <= to) {
            result.push(i);
            i += 1;
        }

        return result;
    }
    
    async function GET(index){
        if(index < 1 || index > 9) return;

        try{
            const response = await fetch(`/lessons?semester=${index}`);

            if (!response.ok) {
                throw new Error('Unable to fetch data');
            }

            lessons = await response.json();
        } catch (err) {
            console.error(err);
        }
    }

    // trigger get function when the component mounts
    onMount(() => {
        GET(selected);
    });
</script>

<p class="message">Try it!</p>

<div class="join">
    <p class="url rounded bg-primary">Semester</p>
    <select bind:value={selected} class="select select-primary max-w-xs" on:change={() => GET(selected)}>
        <option value="" disabled>Select</option>
        {#each range(1, 9) as i}
            <option value={i}>{i}</option>
        {/each}
    </select>
</div>

<div class="mockup-code">
    {#each JSON.stringify(lessons, null, 4).split('\n') as line}
        <pre><code>{line}</code></pre>
    {/each}
</div>

<style>
    .message {
        font-size: 3em;
        padding-bottom: 0.5em;
    }

    .url {
        display: grid;
        place-items: center;
        padding: 0 1em;
        color: white;
    }

    .join {
        margin-bottom: 2em;
    }

    .mockup-code{
        max-width: 80%;
        width: 80%;
        overflow-x: auto;
    }

	@media only screen and (max-width: 800px) {
        .mockup-code{
            max-width: 95%;
            width: 95%;
        }
    }
</style>

