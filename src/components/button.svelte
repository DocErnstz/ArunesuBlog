<script>
    export let menuIsShow;
    import 'iconify-icon';
</script>

    
        <button class="" on:click={() => {
            menuIsShow = !menuIsShow
        } }>
        <div class="flex items-center">
            <slot />
        </div>
       
            
        </button>
   
  

   


