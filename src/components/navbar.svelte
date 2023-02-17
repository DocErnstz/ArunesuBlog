<script>
import Button from "./button.svelte";
import 'iconify-icon';


var menuIsShow = false;
</script>

<div class="bg-gray-800" id="header">
  <div id="responsive_navbar" class={['max-w-lg	 w-full fixed top-0 left-0 h-full p-5 bg-slate-900 z-10 transition-all ease-in-out', menuIsShow ? '' : 'transform -translate-x-full'].join(" ")}>
      <div class="my-auto flex flex-col [&>a]:mb-4 text-2xl">
        
          <Button bind:menuIsShow={menuIsShow}>
            <iconify-icon icon="mdi:close" class="text-3xl ml-auto"></iconify-icon>
    
          </Button>
        
         
      
          
        <a href="/posts">Option</a>
        <a href="">Option</a>
        <a href="">Option</a>
        <a href="">Option</a>
        <a href="">Option</a>
        <a href="">Option</a>
        </div>
        
  </div>
  <nav class="text-white  mx-auto">
    <div class="container max-w-6xl	flex-col mx-auto flex items-center justify-between">
      <div class="container w-full text-center relative my-10">

        <a href="#" class="text-4xl font-abril">feature shoot</a>
        <div class="absolute bottom-0 left-0 h-full">
          <div class="flex items-center h-full">
            <Button bind:menuIsShow={menuIsShow}>
              <iconify-icon icon="mdi:menu" class="text-3xl"></iconify-icon>
            </Button>
          </div>
        </div>
      
      </div>
      <div id="navOptions" class="container hidden md:flex px-24 items-center justify-center [&>div]:p-4">
        <div class="relative borderMark">
            <a href="#" class="text-lg  tracking-widest ">Interviews</a>
        </div>
        <div class="transition ease-in-out duration-300 delay-150 relative hover:border-indigo-600">
            <a href="#" class="text-lg  tracking-widest ">NFTs</a>
        </div>
        <div class="transition ease-in-out duration-300 delay-150 relative hover:border-indigo-600">
            <a href="/posts/post-1" class="text-lg  tracking-widest ">Opportunities</a>
        </div>
        <div class="transition ease-in-out duration-300 delay-150 relative hover:border-indigo-600">
            <a href="#" class="text-lg  tracking-widest ">Feature Shoot Portfolio Reviews</a>
        </div>
        <div class="transition ease-in-out duration-300 delay-150 relative hover:border-indigo-600">
            <a href="#" class="text-lg  tracking-widest ">Explore by Genre</a>
        </div>
      </div>
    </div>
  </nav>
</div>


  <style>
   
   

    
    
     #navOptions > div:not(:first-child)::before {
        content:'';
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height: 100%;
        transform: scaleX(0);
        border-bottom: 2px solid blue;
        transition: all 0.4s ease-in-out;
     }

     #navOptions > div:not(:first-child):hover::before{
        transform: scaleX(0.7);
     }
     
     .borderMark::before{
        content:'';
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height: 100%;
        transform: scaleX(1);
        border-bottom: 2px solid blue;
     }
     
  </style>