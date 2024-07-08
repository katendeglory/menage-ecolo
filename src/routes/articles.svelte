<script>
  import Container from "../components/utils/Container.svelte";

  let nbrs = [1, 2, 3, 4, 5];
</script>

<Container>
  <div class="py-20 h-screen">
    <div class="h-font uppercase text-2xl mb-5">
      Here Are Some Pretty Good Blogs
    </div>

    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {#each nbrs as n (n)}
        <a class="btn btn-primary !w-full" href={`/article?id=${n}`}>
          <ion-icon name="newspaper" class="mr-2 text-2xl" />
          SEE ARTICLE {n}
        </a>
      {/each}
    </ul>
  </div>
</Container>
