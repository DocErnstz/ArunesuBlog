<script>
    export let postData
</script>


<div class="bg-gray-600 p-4 grid-span-{postData.gridProp} card-type-{postData.gridProp} " id="card">
			
	<div class="absolute top-0 left-0 w-full h-full image">
		
		<div class="pt-8 pl-8 flex flex-col justify-between h-28">
			<div class="tags flex justify-between w-36">
				<div>Inspiration</div>
				<div>News</div>
			</div>
			<div>
				{postData.title}
			</div>
			<div>
				01-06-03
			</div>
		</div>
	</div>
	
</div>

<style>

	
@media (max-width:768px) {
		.grid-span-2 {
		grid-column: span 1 / span 1 !important;
		grid-row: span 1 / span 1 !important;
	}
	
	.card-type-1{
		width: 70% !important;
		padding-bottom: 70% !important;
	}
}
	#card{
		position: relative;
		width: 100%;
		padding-bottom: 100%;
	}
	
	.grid-span-1 {
		grid-column: span 1 / span 1;
		grid-row: span 1 / span 1;
	}
    .grid-span-2 {
		grid-column: span 2 / span 2;
		grid-row: span 2 / span 2;
	}
    .grid-span-3 {
		grid-column: span 3 / span 3;
		grid-row: span 3 / span 3;
	}
	
	.image{
		background-image: url("./guitarPost.jpg");
		background-size: cover;
		
	}
	
</style>
