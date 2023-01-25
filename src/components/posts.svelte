<script>
    import Post from "./Post.svelte";
    import { postData } from '../storeData/postData.js';
    let postList;
   
    postData.subscribe(data => {
		postList = data
	});
  
</script>

  {#each postList as post}
     <Post postData={post}/>
	{/each}


		
