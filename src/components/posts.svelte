<script>
    import Post from "./Post.svelte";
    import { postData } from '../storeData/postData.js';
    export let GridNumber;
    let postList;
    postData.subscribe(data => {
		postList = data[GridNumber]
	});
   
</script>

  {#each postList as post}
     <Post postData={post} />
	{/each}


		
